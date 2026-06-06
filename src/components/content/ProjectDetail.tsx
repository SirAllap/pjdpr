import { FC } from 'react'
import { Project, projects } from '../../data/portfolio'
import { track } from '../../lib/analytics'
import { useGithubStats, relativeTime } from '../../lib/useGithubStats'

interface ProjectDetailProps {
  project: Project
  onBack: () => void
  onSelectProject: (id: string) => void
}

const ProjectDetail: FC<ProjectDetailProps> = ({ project, onBack, onSelectProject }) => {
  const idx = projects.findIndex((p) => p.id === project.id)
  const prev = projects[idx - 1]
  const next = projects[idx + 1]
  const stats = useGithubStats(project.githubUrl)
  const { title, description, liveUrl, githubUrl, isPrivate, tech, image, gallery, featured, tagline } = project

  return (
    <div className="project-detail fade-in">
      <div className="section-cmd">
        <span className="section-cmd-prompt">$</span>
        <span className="section-cmd-text">cat ~/DPR/work/{project.id}.md</span>
        <span className="cursor-blink" />
      </div>

      <div className="project-header">
        <h2 className="section-title">{title}</h2>
        {featured && <span className="project-flag">★ flagship</span>}
        <button className="back-btn" onClick={onBack} aria-label="Back to projects">
          ← back
        </button>
      </div>
      {tagline && <p className="project-tagline">{tagline}</p>}
      <hr className="section-divider" />

      {gallery && gallery.length > 1 ? (
        <div className="project-gallery">
          <div className="project-gallery-item g-wide">
            <img src={gallery[0]} alt={`${title} desktop screenshot`} loading="lazy" />
          </div>
          <div className="project-gallery-item g-tall">
            <img src={gallery[1]} alt={`${title} mobile screenshot`} loading="lazy" />
          </div>
        </div>
      ) : (
        <div className="project-image-wrap">
          <img src={image} alt={`${title} screenshot`} loading="lazy" />
        </div>
      )}

      <p className="project-desc">{description}</p>

      {stats && (stats.stars > 0 || stats.language || stats.pushedAt) && (
        <div className="project-ghstats">
          {stats.language && <span className="proj-lang"><i className="lang-dot" />{stats.language}</span>}
          {stats.stars > 0 && <span>★ {stats.stars} stars</span>}
          {stats.pushedAt && <span>updated {relativeTime(stats.pushedAt)}</span>}
        </div>
      )}

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
            onClick={() => track('outbound', { channel: 'project_live', id: project.id })}
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
            onClick={() => track('outbound', { channel: 'project_repo', id: project.id })}
          >
            github ↗
          </a>
        ) : isPrivate ? (
          <span className="project-link-btn disabled">private repo</span>
        ) : null}
      </div>

      <nav className="project-nav" aria-label="Project navigation">
        {prev ? (
          <button className="project-nav-btn" onClick={() => onSelectProject(prev.id)}>
            <span className="project-nav-dir">← prev</span>
            <span className="project-nav-name">{prev.title}</span>
          </button>
        ) : <span />}
        {next ? (
          <button className="project-nav-btn align-end" onClick={() => onSelectProject(next.id)}>
            <span className="project-nav-dir">next →</span>
            <span className="project-nav-name">{next.title}</span>
          </button>
        ) : <span />}
      </nav>
    </div>
  )
}

export default ProjectDetail
