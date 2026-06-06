import { RefObject, useEffect } from 'react'

const SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

// Traps Tab focus inside `ref` while `active`, focuses the first element on
// activation, and restores focus to the previously-focused element on close.
export function useFocusTrap(ref: RefObject<HTMLElement>, active: boolean): void {
  useEffect(() => {
    if (!active) return
    const el = ref.current
    if (!el) return

    const prev = document.activeElement as HTMLElement | null
    const focusables = () =>
      Array.from(el.querySelectorAll<HTMLElement>(SELECTOR)).filter((n) => n.offsetParent !== null)

    const first = focusables()[0]
    ;(first ?? el).focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const f = focusables()
      if (!f.length) { e.preventDefault(); return }
      const a = f[0]
      const b = f[f.length - 1]
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); b.focus() }
      else if (!e.shiftKey && document.activeElement === b) { e.preventDefault(); a.focus() }
    }

    el.addEventListener('keydown', onKey)
    return () => {
      el.removeEventListener('keydown', onKey)
      prev?.focus?.()
    }
  }, [active, ref])
}
