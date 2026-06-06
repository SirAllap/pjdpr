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

      <div className="project-header">
        <h2 className="section-title">{title}</h2>
        <button className="back-btn" onClick={onBack} aria-label="Back to projects">
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
            className="project-link-btn github"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
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
