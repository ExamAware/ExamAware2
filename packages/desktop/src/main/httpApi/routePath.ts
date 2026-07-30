export function normalizePath(namespace: string | undefined, path: string) {
  const base = path.startsWith('/') ? path : `/${path}`
  if (!namespace) return base
  const normalizedNamespace = namespace.startsWith('/') ? namespace : `/${namespace}`
  return `${normalizedNamespace}${base}`
}
