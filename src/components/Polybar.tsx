import { FC, useEffect, useState } from 'react'
import { personal } from '../data/portfolio'

type Section = 'about' | 'projects' | 'experience' | 'contact'

interface PolybarProps {
  activeSection: Section
  onNavigate: (s: Section) => void
}

const NAV_ITEMS: { label: string; section: Section; dot: string }[] = [
  { label: '~/about',      section: 'about',      dot: '#8c56d2' },
  { label: '~/work',       section: 'projects',   dot: '#bead8e' },
  { label: '~/experience', section: 'experience', dot: '#56aed2' },
  { label: '~/contact',    section: 'contact',    dot: '#56d2a0' },
]

const Polybar: FC<PolybarProps> = ({ activeSection, onNavigate }) => {
  const [time, setTime] = useState(() => formatTime())

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="polybar">
      <div className="polybar-left">
        <span className="polybar-logo" onClick={() => onNavigate('about')}>
          [{personal.initials}]
        </span>
        <span className="polybar-sep">|</span>
        <span className="polybar-subtitle">{personal.role}</span>
      </div>

      <nav className="polybar-center">
        {NAV_ITEMS.map(({ label, section, dot }) => (
          <button
            key={section}
            className={`polybar-link${activeSection === section ? ' active' : ''}`}
            onClick={() => onNavigate(section)}
            aria-current={activeSection === section ? 'page' : undefined}
          >
            <span
              className="polybar-dot"
              style={{ background: dot }}
            />
            {label}
          </button>
        ))}
      </nav>

      <div className="polybar-right">
        <span className="polybar-time">{time}</span>
        <a
          className="polybar-gh"
          href={personal.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile (opens in a new tab)"
        >
          [github]
        </a>
      </div>
    </div>
  )
}

function formatTime() {
  return new Date().toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
}

export default Polybar
