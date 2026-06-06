import { FC, useEffect, useRef } from 'react'

// Brief "matrix rain" easter egg (triggered by the terminal `matrix` command).
const MatrixRain: FC<{ onDone: () => void }> = ({ onDone }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) { onDone(); return }
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#9ece6a'
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)
    const font = 16
    let cols = Math.floor(w / font)
    let drops = new Array(cols).fill(0).map(() => Math.random() * -50)
    const chars = 'アァカサタナハマヤラ0123456789ABCDEF<>/{}[]=$#*'

    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      cols = Math.floor(w / font)
      drops = new Array(cols).fill(0).map(() => Math.random() * -50)
    }
    window.addEventListener('resize', onResize)

    let raf = 0
    const draw = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.08)'
      ctx.fillRect(0, 0, w, h)
      ctx.fillStyle = accent
      ctx.font = `${font}px monospace`
      for (let i = 0; i < drops.length; i++) {
        const c = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(c, i * font, drops[i] * font)
        if (drops[i] * font > h && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [onDone])

  return <canvas ref={canvasRef} className="matrix-rain" onClick={onDone} aria-hidden="true" />
}

export default MatrixRain
