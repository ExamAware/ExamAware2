export function isBrowserSupported(): boolean {
  return (
    typeof window.fetch === 'function' &&
    typeof window.AbortController === 'function' &&
    typeof window.ResizeObserver === 'function' &&
    typeof window.CSS?.supports === 'function' &&
    window.CSS.supports('display', 'grid')
  );
}
