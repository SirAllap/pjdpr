// Tiny analytics helper — forwards events to gtag / GTM dataLayer if present.
// No-ops gracefully when analytics is blocked or not loaded.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export function track(name: string, params: Record<string, unknown> = {}): void {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params)
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: name, ...params })
    }
  } catch {
    /* analytics unavailable — ignore */
  }
}
