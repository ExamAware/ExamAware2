let overlayEl: HTMLDivElement | null = null

export function ensureOverlay(): HTMLDivElement {
  if (!overlayEl) {
    overlayEl = document.createElement('div')
    overlayEl.style.position = 'fixed'
    overlayEl.style.inset = '0'
    overlayEl.style.zIndex = '2200'
    overlayEl.style.pointerEvents = 'auto'
    document.body.appendChild(overlayEl)
  }
  return overlayEl
}

export function releaseOverlayIfEmpty() {
  if (overlayEl && overlayEl.childElementCount === 0) {
    overlayEl.remove()
    overlayEl = null
  }
}
