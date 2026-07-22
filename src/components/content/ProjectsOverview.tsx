import { FC, useMemo, useState } from 'react'
import { projects, Project } from '../../data/portfolio'
import { useGithubStats } from '../../lib/useGithubStats'

interface ProjectsOverviewProps {
  onSelectProject: (id: string) => void
}

const badgeFor = (p: Project) =>
  p.liveUrl ? 'live ↗' : p.isPrivate ? 'private' : 'repo'

const ProjectCard: FC<{ p: Project; onSelect: (id: string) => void }> = ({ p, onSelect }) => {
  const stats = useGithubStats(p.githubUrl)
  return (
    <button className="proj-card" onClick={() => onSelect(p.id)}>
      <div className="proj-card-media">
        <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
        <span className={`proj-card-badge${p.liveUrl ? '' : ' muted'}`}>{badgeFor(p)}</span>
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
        {stats && (stats.stars > 0 || stats.language) && (
          <div className="proj-card-stats">
            {stats.language && <span className="proj-lang"><i className="lang-dot" />{stats.language}</span>}
            {stats.stars > 0 && <span className="proj-stars">★ {stats.stars}</span>}
          </div>
        )}
      </div>
    </button>
  )
}

const SpotlightCard: FC<{ p: Project; onSelect: (id: string) => void }> = ({ p, onSelect }) => {
  const stats = useGithubStats(p.githubUrl)
  return (
    <button className="proj-spotlight" onClick={() => onSelect(p.id)}>
      <div className="proj-spotlight-media">
        <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
      </div>
      <div className="proj-spotlight-body">
        <span className="proj-spotlight-flag">
          ◆ spotlight{stats && stats.stars > 0 ? ` · ★ ${stats.stars}` : ' · open source'}
        </span>
        <div className="proj-spotlight-title">{p.title}</div>
        {p.tagline && <div className="proj-spotlight-tagline">{p.tagline}</div>}
        <div className="proj-spotlight-desc">{p.description}</div>
        <div className="proj-card-tech">
          {p.tech.map((t) => (
            <span key={t.name} className="proj-card-tag">{t.name}</span>
          ))}
        </div>
        <span className="proj-spotlight-cta">view project →</span>
      </div>
    </button>
  )
}

const ProjectsOverview: FC<ProjectsOverviewProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string | null>(null)

  const allTech = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.tech.map((t) => t.name)))).sort(),
    [],
  )

  const matches = (p: Project) => !filter || p.tech.some((t) => t.name === filter)
  const featured = !filter ? projects.find((p) => p.featured) : null
  const spotlight = !filter ? projects.find((p) => p.spotlight) : null
  const grid = projects.filter((p) => (filter ? matches(p) : !p.featured && !p.spotlight))

  return (
    <div className="fade-in">
      <div className="section-cmd">
        <span className="section-cmd-prompt">$</span>
        <span className="section-cmd-text">ls ~/DPR/work/{filter ? ` | grep ${filter}` : ''}</span>
        <span className="cursor-blink" />
      </div>
      <h2 className="section-title">Work</h2>
      <hr className="section-divider" />

      {/* Tech filter bar */}
      <div className="proj-filters" role="group" aria-label="Filter projects by technology">
        <button
          className={`proj-filter${filter === null ? ' active' : ''}`}
          onClick={() => setFilter(null)}
        >
          all
        </button>
        {allTech.map((t) => (
          <button
            key={t}
            className={`proj-filter${filter === t ? ' active' : ''}`}
            onClick={() => setFilter((f) => (f === t ? null : t))}
          >
            {t}
          </button>
        ))}
      </div>

      {featured && (
        <button className="proj-featured" onClick={() => onSelectProject(featured.id)}>
          <div className="proj-featured-media">
            <img src={featured.image} alt={`${featured.title} screenshot`} loading="lazy" />
          </div>
          <div className="proj-featured-body">
            <span className="proj-featured-flag">★ flagship · current</span>
            <div className="proj-featured-title">{featured.title}</div>
            {featured.tagline && (
              <div className="proj-featured-tagline">{featured.tagline}</div>
            )}
            <div className="proj-featured-desc">{featured.description}</div>
            <div className="proj-card-tech">
              {featured.tech.map((t) => (
                <span key={t.name} className="proj-card-tag">{t.name}</span>
              ))}
            </div>
            <span className="proj-featured-cta">view project →</span>
          </div>
        </button>
      )}

      {spotlight && <SpotlightCard p={spotlight} onSelect={onSelectProject} />}

      {grid.length > 0 ? (
        <div className="projects-grid">
          {grid.map((p) => (
            <ProjectCard key={p.id} p={p} onSelect={onSelectProject} />
          ))}
        </div>
      ) : (
        <p className="proj-empty">no projects match “{filter}”.</p>
      )}
    </div>
  )
}

export default ProjectsOverview
