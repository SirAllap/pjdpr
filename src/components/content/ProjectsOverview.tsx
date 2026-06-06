import { FC } from 'react'
import { projects } from '../../data/portfolio'

interface ProjectsOverviewProps {
  onSelectProject: (id: string) => void
}

const ProjectsOverview: FC<ProjectsOverviewProps> = ({ onSelectProject }) => {
  return (
    <div className="fade-in">
      <div className="section-cmd">
        <span className="section-cmd-prompt">$</span>
        <span className="section-cmd-text">ls ~/DPR/work/</span>
        <span className="cursor-blink" />
      </div>
      <h2 className="section-title">Work</h2>
      <hr className="section-divider" />

      <div className="projects-grid">
        {projects.map((p) => {
          const badge = p.liveUrl ? 'live ↗' : p.isPrivate ? 'private' : 'repo'
          return (
            <button
              key={p.id}
              className="proj-card"
              onClick={() => onSelectProject(p.id)}
            >
              <div className="proj-card-media">
                <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
                <span className={`proj-card-badge${p.liveUrl ? '' : ' muted'}`}>
                  {badge}
                </span>
              </div>
              <div className="proj-card-body">
                <div className="proj-card-title">{p.title}</div>
                <div className="proj-card-desc">{p.description}</div>
                <div className="proj-card-tech">
                  {p.tech.slice(0, 4).map((t) => (
                    <span key={t.name} className="proj-card-tag">{t.name}</span>
                  ))}
                  {p.tech.length > 4 && (
                    <span className="proj-card-tag more">+{p.tech.length - 4}</span>
                  )}
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectsOverview
