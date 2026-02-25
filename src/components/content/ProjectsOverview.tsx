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
      </div>
      <h2 className="section-title">Work</h2>
      <hr className="section-divider" />

      <div className="projects-grid">
        {projects.map((p) => (
          <div
            key={p.id}
            className="proj-card"
            onClick={() => onSelectProject(p.id)}
          >
            <div className="proj-card-title">{p.title}</div>
            <div className="proj-card-desc">{p.description}</div>
            <div className="proj-card-tech">
              {p.tech.slice(0, 5).map((t) => (
                <span key={t.name} className="proj-card-tag">{t.name}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsOverview
