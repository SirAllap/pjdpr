import { FC, useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

// Appears after scrolling (mobile/body-scroll layouts) and returns to top.
const ScrollTop: FC = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={`scroll-top${show ? ' show' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      tabIndex={show ? 0 : -1}
    >
      <FiArrowUp />
    </button>
  )
}

export default ScrollTop
