let overlayEl: HTMLDivElement | null = null

export function ensureOverlay(): HTMLDivElement {
  if (!overlayEl) {
    // Prefer the window content container so the overlay sits inside the visible content area.
    const preferredHost = document.querySelector<HTMLElement>('.ea-window-content')
    const host = preferredHost || document.getElementById('app') || document.body

    overlayEl = document.createElement('div')
    overlayEl.id = 'eaui-overlay'
    overlayEl.style.position = host === document.body ? 'fixed' : 'absolute'
    overlayEl.style.inset = '0'
    overlayEl.style.zIndex = '2200'
    overlayEl.style.pointerEvents = 'auto'
    if (host !== document.body && getComputedStyle(host).position === 'static') {
      host.style.position = 'relative'
    }
    host.appendChild(overlayEl)
    console.info('[eaui] overlay created, host:', host.className || host.id || host.tagName)
  }
  console.info('[eaui] overlay ensured, children:', overlayEl.childElementCount)
  return overlayEl
}

export function releaseOverlayIfEmpty() {
  if (overlayEl && overlayEl.childElementCount === 0) {
    overlayEl.remove()
    overlayEl = null
  }
}
