import { FC, useEffect, useRef } from 'react'

const BlobBackground: FC = () => {
  const ref    = useRef<HTMLDivElement>(null)
  const target = useRef({ x: 0.4, y: 0.4 })
  const b1     = useRef({ x: 0.3, y: 0.35 })
  const b2     = useRef({ x: 0.7, y: 0.60 })
  const b3     = useRef({ x: 0.5, y: 0.80 })
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect users who prefer reduced motion — skip the rAF loop entirely.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX / window.innerWidth
      target.current.y = e.clientY / window.innerHeight
    }

    const tick = () => {
      b1.current.x = lerp(b1.current.x, target.current.x, 0.10)
      b1.current.y = lerp(b1.current.y, target.current.y, 0.10)
      b2.current.x = lerp(b2.current.x, target.current.x, 0.07)
      b2.current.y = lerp(b2.current.y, target.current.y, 0.07)
      b3.current.x = lerp(b3.current.x, target.current.x, 0.04)
      b3.current.y = lerp(b3.current.y, target.current.y, 0.04)

      el.style.setProperty('--b1x', `${(b1.current.x * 100).toFixed(1)}%`)
      el.style.setProperty('--b1y', `${(b1.current.y * 100).toFixed(1)}%`)
      el.style.setProperty('--b2x', `${(b2.current.x * 100).toFixed(1)}%`)
      el.style.setProperty('--b2y', `${(b2.current.y * 100).toFixed(1)}%`)
      el.style.setProperty('--b3x', `${(b3.current.x * 100).toFixed(1)}%`)
      el.style.setProperty('--b3y', `${(b3.current.y * 100).toFixed(1)}%`)

      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return <div ref={ref} className="blob-bg" />
}

export default BlobBackground
