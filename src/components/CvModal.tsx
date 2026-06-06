import { FC, useEffect } from 'react'
import { personal, experience, projects } from '../data/portfolio'

interface CvModalProps {
  open: boolean
  onClose: () => void
}

const work = experience.filter((e) => e.type === 'work')
const education = experience.filter((e) => e.type === 'education')
const featuredProjects = projects.filter((p) => p.featured || p.githubUrl || p.liveUrl).slice(0, 5)

const CvModal: FC<CvModalProps> = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.body.classList.add('cv-open')
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
      document.body.classList.remove('cv-open')
    }
  }, [open, onClose])

  const { contact } = personal

  return (
    <div className={`cv-overlay${open ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Résumé" aria-hidden={!open}>
      <div className="cv-backdrop" onClick={onClose} />
      <div className="cv-shell">
        <div className="cv-toolbar">
          <span className="cv-toolbar-name">~/DPR/resume.pdf</span>
          <div className="cv-toolbar-actions">
            <button className="cv-btn" onClick={() => window.print()}>↓ download / print</button>
            <button className="cv-btn cv-btn-close" onClick={onClose} aria-label="Close résumé">✕</button>
          </div>
        </div>

        <article className="cv-document">
          <header className="cv-head">
            <h1 className="cv-name">{personal.name}</h1>
            <p className="cv-role">{personal.role}</p>
            <p className="cv-contact">
              <span>{personal.location}</span>
              <span>{contact.email}</span>
              <span>github.com/{contact.githubHandle}</span>
              <span>linkedin.com/in/{contact.linkedinHandle}</span>
            </p>
          </header>

          <section className="cv-section">
            <h2 className="cv-h2">Summary</h2>
            <p className="cv-text">{personal.summary}</p>
          </section>

          <section className="cv-section">
            <h2 className="cv-h2">Experience</h2>
            {work.map((e) => (
              <div className="cv-entry" key={e.id}>
                <div className="cv-entry-top">
                  <span className="cv-entry-title">{e.title} — {e.company}</span>
                  <span className="cv-entry-date">{e.date}</span>
                </div>
                <div className="cv-entry-sub">{e.location}</div>
                <p className="cv-text">{e.description}</p>
              </div>
            ))}
          </section>

          <section className="cv-section">
            <h2 className="cv-h2">Selected projects</h2>
            {featuredProjects.map((p) => (
              <div className="cv-entry" key={p.id}>
                <div className="cv-entry-top">
                  <span className="cv-entry-title">{p.title}</span>
                  <span className="cv-entry-date">{p.tech.slice(0, 4).map((t) => t.name).join(' · ')}</span>
                </div>
                <p className="cv-text">{p.description}</p>
              </div>
            ))}
          </section>

          <div className="cv-cols">
            <section className="cv-section">
              <h2 className="cv-h2">Skills</h2>
              <ul className="cv-skills">
                {personal.skills.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </section>

            <section className="cv-section">
              <h2 className="cv-h2">Education</h2>
              {education.map((e) => (
                <div className="cv-entry" key={e.id}>
                  <div className="cv-entry-top">
                    <span className="cv-entry-title">{e.title}</span>
                    <span className="cv-entry-date">{e.date}</span>
                  </div>
                  <div className="cv-entry-sub">{e.company} — {e.location}</div>
                </div>
              ))}

              <h2 className="cv-h2 cv-h2-mt">Languages</h2>
              <ul className="cv-langs">
                {personal.languages.map((l) => (
                  <li key={l.name}><strong>{l.name}</strong> — {l.level}</li>
                ))}
              </ul>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}

export default CvModal
