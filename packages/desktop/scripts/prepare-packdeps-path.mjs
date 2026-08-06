import { fileURLToPath } from 'node:url'

export function resolveDesktopRoot(scriptUrl, options) {
  return fileURLToPath(new URL('..', scriptUrl), options)
}
