interface QuitEvent {
  preventDefault(): void
}

interface ShutdownCoordinatorOptions {
  app: { quit(): void }
  flush: () => Promise<void>
  cleanup?: () => void
  logger: { error(message: string, error: unknown): void }
}

export function createShutdownCoordinator({
  app,
  flush,
  cleanup,
  logger
}: ShutdownCoordinatorOptions): (event: QuitEvent) => void {
  let pending = false
  let allowQuit = false

  return (event) => {
    if (allowQuit) return

    event.preventDefault()
    if (pending) return
    pending = true
    try {
      cleanup?.()
    } catch (error) {
      logger.error('[shutdown] cleanup failed', error)
    }

    void flush()
      .catch((error) => logger.error('[shutdown] config flush failed', error))
      .finally(() => {
        allowQuit = true
        app.quit()
      })
  }
}
