import { FC } from 'react'
import { Project } from '../../data/portfolio'

interface ProjectDetailProps {
  project: Project
  onBack: () => void
}

const ProjectDetail: FC<ProjectDetailProps> = ({ project, onBack }) => {
  const { title, description, liveUrl, githubUrl, isPrivate, tech } = project

  return (
    <div className="project-detail fade-in">
      <div className="section-cmd">
        <span className="section-cmd-prompt">$</span>
        <span className="section-cmd-text">cat ~/DPR/work/{project.id}.md</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 4 }}>
        <h2 className="section-title" style={{ marginBottom: 0 }}>{title}</h2>
        <button
          onClick={onBack}
          style={{
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
            background: 'none',
            border: '1px solid rgba(255,255,255,0.12)',
            padding: '2px 8px',
            borderRadius: 2,
            cursor: 'pointer',
            fontFamily: 'var(--mono)',
            transition: 'color 0.15s, border-color 0.15s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--text)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-muted)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
          }}
        >
          ← back
        </button>
      </div>
      <hr className="section-divider" />

      <p className="project-desc">{description}</p>

      <p className="project-tech-label">Tech stack</p>
      <div className="project-tech-row">
        {tech.map((t) => (
          <div className="tech-badge" key={t.name}>
            <span>{t.name}</span>
          </div>
        ))}
      </div>

      <div className="project-links">
        {liveUrl ? (
          <a
            className="project-link-btn"
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            visit ↗
          </a>
        ) : (
          <span className="project-link-btn disabled">coming soon</span>
        )}

        {githubUrl ? (
          <a
            className="project-link-btn"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--gold)', borderColor: 'rgba(190,173,142,0.4)' }}
          >
            github ↗
          </a>
        ) : isPrivate ? (
          <span className="project-link-btn disabled">private repo</span>
        ) : null}
      </div>
    </div>
  )
}

export default ProjectDetail
