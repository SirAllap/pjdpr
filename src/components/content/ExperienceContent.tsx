import { FC } from 'react'
import { MdOutlineWork } from 'react-icons/md'
import { TbSchool } from 'react-icons/tb'
import { experience } from '../../data/portfolio'

const ExperienceContent: FC = () => {
  return (
    <div className="exp-content fade-in">
      <div className="section-cmd">
        <span className="section-cmd-prompt">$</span>
        <span className="section-cmd-text">git log --oneline ~/DPR/experience</span>
        <span className="cursor-blink" />
      </div>
      <h2 className="section-title">Experience</h2>
      <hr className="section-divider" />

      <ol className="exp-log">
        {experience.map((entry) => {
          // Locations look like "Seville, Spain — On-site"
          const [place, mode] = entry.location.split('—').map((s) => s.trim())
          const modeClass = mode ? (/remote/i.test(mode) ? 'remote' : 'onsite') : ''

          return (
            <li
              key={entry.id}
              className={`exp-item${entry.isCurrent ? ' current' : ''}`}
            >
              <span className="exp-node" aria-hidden="true">
                {entry.type === 'work' ? <MdOutlineWork /> : <TbSchool />}
              </span>

              <div className="exp-card">
                <div className="exp-card-top">
                  <span className="exp-date">{entry.date}</span>
                  {entry.isCurrent && (
                    <span className="exp-now">
                      <span className="status-dot" aria-hidden="true" />
                      current
                    </span>
                  )}
                </div>

                <h3 className="exp-role">{entry.title}</h3>

                <div className="exp-org">
                  <a
                    className="exp-company"
                    href={entry.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {entry.company}
                  </a>
                  {place && (
                    <>
                      <span className="exp-dot-sep">·</span>
                      <span className="exp-place">{place}</span>
                    </>
                  )}
                  {mode && <span className={`exp-mode ${modeClass}`}>{mode}</span>}
                </div>

                <p className="exp-desc">{entry.description}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default ExperienceContent
