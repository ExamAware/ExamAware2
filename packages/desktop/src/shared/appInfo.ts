import packageJson from '../../package.json'

type EnvRecord = Record<string, string | undefined>

const runtimeEnv: EnvRecord = (() => {
  try {
    const metaEnv = (import.meta as any)?.env as EnvRecord | undefined
    if (metaEnv) return metaEnv
  } catch {}

  if (typeof process !== 'undefined' && process.env) {
    return process.env as EnvRecord
  }

  return {}
})()

export const APP_NAME = packageJson.productName || 'ExamAware'
export const APP_CODENAME = runtimeEnv.VITE_APP_CODENAME || 'Lighthouse / 灯塔'
export const APP_VERSION = (
  runtimeEnv.VITE_APP_VERSION ||
  runtimeEnv.APP_VERSION ||
  packageJson.version ||
  'dev'
).trim()

const rawGitHash =
  runtimeEnv.VITE_GIT_HASH ||
  runtimeEnv.VITE_APP_GIT_HASH ||
  runtimeEnv.EXAMAWARE_GIT_HASH ||
  runtimeEnv.GIT_COMMIT ||
  runtimeEnv.GIT_COMMIT_SHA ||
  runtimeEnv.GITHUB_SHA ||
  runtimeEnv.COMMIT_SHA ||
  runtimeEnv.npm_package_gitHead ||
  ''

export const APP_GIT_HASH = (rawGitHash || '').trim()
export const APP_GIT_HASH_SHORT = APP_GIT_HASH ? APP_GIT_HASH.slice(0, 7) : ''
export const APP_VERSION_WITH_HASH = APP_GIT_HASH_SHORT
  ? `${APP_VERSION} (${APP_GIT_HASH_SHORT})`
  : APP_VERSION
export const APP_VERSION_WITH_CODENAME = `${APP_VERSION} (${APP_CODENAME})`

export function composeVersionLabel(version?: string): string {
  const base = (version || APP_VERSION || 'dev').trim()
  const gitPart = APP_GIT_HASH_SHORT ? `, ${APP_GIT_HASH_SHORT}` : ''
  return `${base} (${APP_CODENAME}${gitPart})`
}
