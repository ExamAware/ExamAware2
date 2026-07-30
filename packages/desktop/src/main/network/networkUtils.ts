import net from 'net'

export function isLoopback(ip: string) {
  if (!ip) return false
  return ip === '127.0.0.1' || ip === '::1' || ip.startsWith('::ffff:127.')
}

export async function findAvailablePort(start: number, maxTries = 25): Promise<number> {
  const tryPort = (port: number) =>
    new Promise<number>((resolve, reject) => {
      const server = net.createServer()
      server.once('error', reject)
      server.once('listening', () => {
        server.close(() => resolve(port))
      })
      server.listen(port, '0.0.0.0')
    })

  let port = start
  for (let i = 0; i < maxTries; i++) {
    try {
      return await tryPort(port)
    } catch (error: any) {
      if (error?.code !== 'EADDRINUSE') throw error
      port += 1
      if (port > 65535) port = 30000
    }
  }
  return start
}
