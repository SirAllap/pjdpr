import { FC } from 'react'
import { projects } from '../data/portfolio'
import AboutContent from './content/AboutContent'
import ProjectsOverview from './content/ProjectsOverview'
import ProjectDetail from './content/ProjectDetail'
import ExperienceContent from './content/ExperienceContent'
import ContactContent from './content/ContactContent'

type Section = 'about' | 'projects' | 'experience' | 'contact'
type ActiveItem = { type: 'section'; section: Section } | { type: 'project'; id: string }

interface ContentViewerProps {
  focused: boolean
  onClick: () => void
  activeItem: ActiveItem
  onSelectProject: (id: string) => void
  onSelectSection: (s: Section) => void
}

const ContentViewer: FC<ContentViewerProps> = ({
  focused,
  onClick,
  activeItem,
  onSelectProject,
  onSelectSection,
}) => {
  const renderContent = () => {
    if (activeItem.type === 'project') {
      const project = projects.find((p) => p.id === activeItem.id)
      if (!project) return null
      return (
        <ProjectDetail
          project={project}
          onBack={() => onSelectSection('projects')}
          onSelectProject={onSelectProject}
        />
      )
    }

    switch (activeItem.section) {
      case 'about':
        return <AboutContent />
      case 'projects':
        return <ProjectsOverview onSelectProject={onSelectProject} />
      case 'experience':
        return <ExperienceContent />
      case 'contact':
        return <ContactContent />
    }
  }

  return (
    <div
      className={`tile content-tile${focused ? ' focused' : ' blurred'}`}
      onClick={onClick}
    >
      <div className="tile-inner scrollable">
        {renderContent()}
      </div>
    </div>
  )
}

export default ContentViewer
