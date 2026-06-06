import { FC } from 'react'
import { personal } from '../../data/portfolio'
import mePhoto from '../../profile/me.webp'
import {
  SiPython,
  SiDjango,
  SiDocker,
  SiReact,
  SiTypescript,
  SiTailwindcss,
} from 'react-icons/si'
import { IconType } from 'react-icons'

interface TechEntry { Icon: IconType; name: string; color: string }

const TECH_GRID: TechEntry[] = [
  { Icon: SiPython,      name: 'Python',     color: '#3776AB' },
  { Icon: SiDjango,      name: 'Django',     color: '#44B78B' },
  { Icon: SiDocker,      name: 'Docker',     color: '#2496ED' },
  { Icon: SiReact,       name: 'React',      color: '#61DAFB' },
  { Icon: SiTypescript,  name: 'TypeScript', color: '#3178C6' },
  { Icon: SiTailwindcss, name: 'Tailwind',   color: '#06B6D4' },
]

const AboutContent: FC = () => {
  return (
    <div className="about-content fade-in">
      <div className="section-cmd">
        <span className="section-cmd-prompt">$</span>
        <span className="section-cmd-text">cat ~/DPR/about.md</span>
        <span className="cursor-blink" />
      </div>
      <h2 className="section-title">{personal.name}</h2>
      <p className="about-role">{personal.role}</p>

      <div className="about-facts">
        <span className="about-fact"><span className="af-k">loc</span> {personal.location}</span>
        <span className="about-fact"><span className="af-k">lang</span> {personal.languages.map((l) => l.name).join(' · ')}</span>
        <span className="about-fact"><span className="af-k">since</span> {personal.codingSince}</span>
      </div>

      <hr className="section-divider" />

      {/* Bio + Photo row */}
      <div className="about-layout">
        <div className="about-text">
          {personal.bio.map((p, i) => (
            <p key={i} className="about-intro">{p}</p>
          ))}

          <div className="current-position">
            <p className="current-position-label">current position</p>
            <div className="current-position-card">
              <p className="current-position-title">Backend Developer @ Smith.ai</p>
              <p className="current-position-meta">
                <span className="status-dot" aria-hidden="true" />
                2026/01 – present · Seville · Remote
              </p>
            </div>
            <button
              className="cv-link-btn"
              onClick={() => window.dispatchEvent(new Event('pjdpr:open-cv'))}
            >
              ↓ download CV
            </button>
          </div>
        </div>

        {/* Profile photo */}
        <div className="about-photo-wrap">
          <div className="about-photo-frame">
            <img src={mePhoto} alt="David PR" />
            <div className="about-photo-caption">david.pr ~ portrait</div>
          </div>
        </div>
      </div>

      <hr className="section-divider" />

      {/* Tech icon grid — SVG icons, theme-aware */}
      <p className="tech-grid-label">stack</p>
      <div className="tech-grid">
        {TECH_GRID.map(({ Icon, name, color }) => (
          <div key={name} className="tech-item">
            <span className="tech-item-icon" style={{ color }}>
              <Icon />
            </span>
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutContent
