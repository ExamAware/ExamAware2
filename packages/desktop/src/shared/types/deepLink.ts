export interface DeepLinkPayload {
  raw: string
  scheme: string
  host: string
  pathname: string
  search: string
  query: Record<string, string>
}

export type DeepLinkHandler = (payload: DeepLinkPayload) => boolean | void | Promise<boolean | void>
