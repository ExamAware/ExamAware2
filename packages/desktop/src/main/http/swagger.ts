import fs from 'fs'
import path from 'path'
import type Koa from 'koa'
import { getAbsoluteFSPath as getSwaggerDistPath } from 'swagger-ui-dist'
import { DEFAULT_SWAGGER, type HttpApiConfig, type RouteRegistration } from './types'
import { normalizePath } from './utils'

const SWAGGER_DIST = getSwaggerDistPath()

export async function serveSwaggerAsset(ctx: Koa.ParameterizedContext, mount: string, rel: string) {
  const clean = path.normalize(rel).replace(/^\//, '')
  const abs = path.join(SWAGGER_DIST, clean)
  if (!abs.startsWith(SWAGGER_DIST)) {
    ctx.status = 403
    ctx.body = { success: false, code: 'forbidden', message: 'Forbidden' }
    return
  }
  try {
    const stat = await fs.promises.stat(abs)
    if (!stat.isFile()) {
      ctx.status = 404
      ctx.body = { success: false, code: 'not_found', message: 'Not found' }
      return
    }
    const ext = path.extname(abs).toLowerCase()
    const mime =
      ext === '.css'
        ? 'text/css'
        : ext === '.js'
          ? 'application/javascript'
          : ext === '.html'
            ? 'text/html'
            : 'application/octet-stream'
    ctx.type = mime
    ctx.body = await fs.promises.readFile(abs)
  } catch {
    ctx.status = 404
    ctx.body = { success: false, code: 'not_found', message: 'Not found' }
  }
}

export function renderSwaggerIndex(config: HttpApiConfig, mount: string, specUrl: string) {
  const base = mount.endsWith('/') ? mount.slice(0, -1) : mount
  const title = config.swagger?.title || DEFAULT_SWAGGER.title
  return `<!doctype html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>${title}</title>
  <link rel="stylesheet" type="text/css" href="${base}/swagger-ui.css" />
  <style>body{margin:0;padding:0;}#swagger-ui{min-height:100vh;}</style>
</head>
<body>
  <div id="swagger-ui"></div>
  <script src="${base}/swagger-ui-bundle.js"></script>
  <script src="${base}/swagger-ui-standalone-preset.js"></script>
  <script>
    window.addEventListener('load', function() {
      SwaggerUIBundle({
        url: '${specUrl}',
        dom_id: '#swagger-ui',
        presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
        layout: 'StandaloneLayout'
      });
    });
  </script>
</body>
</html>`
}

export function buildSwaggerSpec(
  config: HttpApiConfig,
  routes: RouteRegistration[],
  apiBaseUrl: string
) {
  const title = config.swagger?.title || DEFAULT_SWAGGER.title
  const version = config.swagger?.version || DEFAULT_SWAGGER.version
  const desc = config.swagger?.description
  const paths: Record<string, any> = {}

  const registerPath = (
    method: string,
    pathValue: string,
    meta?: Partial<RouteRegistration> & { parameters?: any[] }
  ) => {
    const withNamespace = normalizePath(meta?.namespace, pathValue)
    const fullPath = withNamespace.startsWith('/') ? withNamespace : `/${withNamespace}`
    const op = {
      summary: meta?.summary || undefined,
      description: meta?.description || undefined,
      tags: meta?.tags || undefined,
      parameters: meta?.parameters,
      responses: {
        200: { description: 'OK' },
        401: { description: 'Unauthorized' },
        429: { description: 'Rate limited' }
      }
    }
    paths[fullPath] = paths[fullPath] || {}
    paths[fullPath][method.toLowerCase()] = op
  }

  // core routes (prefix handled by router, spec exposes relative paths)
  registerPath('get', '/health', { summary: 'Health check' })
  registerPath('get', '/healthz', { summary: 'Health check (k8s)' })
  registerPath('get', '/readyz', { summary: 'Readiness probe' })
  registerPath('get', '/livez', { summary: 'Liveness probe' })
  registerPath('get', '/time', { summary: 'Current time' })
  registerPath('post', '/time/sync', { summary: 'Trigger time sync' })
  registerPath('get', '/app/info', { summary: 'App info' })
  // management routes
  registerPath('get', '/config/http', { summary: 'Get HTTP API config' })
  registerPath('patch', '/config/http', { summary: 'Update HTTP API config' })
  registerPath('post', '/http/restart', { summary: 'Restart HTTP API service' })
  registerPath('get', '/config/app', { summary: 'Get application config' })
  registerPath('get', '/config/app/value', {
    summary: 'Get application config value by key',
    parameters: [
      {
        name: 'key',
        in: 'query',
        required: true,
        schema: { type: 'string' },
        description: 'Config key, e.g. behavior.autoStart'
      }
    ]
  })
  registerPath('patch', '/config/app', { summary: 'Patch application config' })
  registerPath('post', '/config/app/value', { summary: 'Set application config value' })

  routes.forEach((r) => registerPath(r.method, r.path, r))

  return {
    openapi: '3.0.0',
    info: { title, version, description: desc },
    servers: [{ url: apiBaseUrl }],
    paths
  }
}
