import { FC } from 'react'
import { personal } from '../../data/portfolio'
import mePhoto from '../../profile/me.png'
import {
  SiPython,
  SiDjango,
  SiDocker,
  SiReact,
  SiTypescript,
  SiTailwindcss,
} from 'react-icons/si'
import { IconType } from 'react-icons'

interface TechEntry { Icon: IconType; name: string }

const TECH_GRID: TechEntry[] = [
  { Icon: SiPython,      name: 'Python'     },
  { Icon: SiDjango,      name: 'Django'     },
  { Icon: SiDocker,      name: 'Docker'     },
  { Icon: SiReact,       name: 'React'      },
  { Icon: SiTypescript,  name: 'TypeScript' },
  { Icon: SiTailwindcss, name: 'Tailwind'   },
]

const AboutContent: FC = () => {
  return (
    <div className="about-content fade-in">
      {/* ── Mobile neofetch header (hidden on desktop) ── */}
      <div className="mobile-neo-header">
        <div className="mobile-neo-logo">DPR</div>
        <div className="mobile-neo-info">
          <div className="mobile-neo-user">
            <span className="neo-user">david</span>
            <span className="neo-at">@</span>
            <span className="neo-host">DPR</span>
          </div>
          <div className="mobile-neo-sep">──────────────────</div>
          <div className="mobile-neo-row">
            <span className="neo-key">github</span>
            <span className="neo-val">{personal.contact.githubHandle}</span>
          </div>
          <div className="mobile-neo-row">
            <span className="neo-key">linkedin</span>
            <span className="neo-val">{personal.contact.linkedinHandle}</span>
          </div>
          <div className="mobile-neo-row">
            <span className="neo-key">location</span>
            <span className="neo-val">Seville, ES</span>
          </div>
        </div>
      </div>

      <div className="section-cmd">
        <span className="section-cmd-prompt">$</span>
        <span className="section-cmd-text">cat ~/DPR/about.md</span>
      </div>
      <h2 className="section-title">{personal.name}</h2>
      <p className="about-role">{personal.role}</p>
      <hr className="section-divider" />

      {/* Bio + Photo row */}
      <div className="about-layout">
        <div className="about-text">
          {personal.bio.map((p, i) => (
            <p key={i} className="about-intro">{p}</p>
          ))}

          <div className="current-position">
            <p className="current-position-label">current position</p>
            <p className="current-position-title">Backend Developer @ Smith.ai</p>
            <p className="current-position-meta">2026/01 – present · Seville · Remote</p>
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
        {TECH_GRID.map(({ Icon, name }) => (
          <div key={name} className="tech-item">
            <span className="tech-item-icon">
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
