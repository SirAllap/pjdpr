import { FC } from 'react'
import './App.css'
import Menu from './components/Menu'
import ProjectContent from './components/ProjectContent'
import ContactContent from './components/ContactContent'
import ExperienceContent from './components/ExperienceContent'

const App: FC = () => {
	return (
		<>
			<Menu />
			<ProjectContent />
			<ExperienceContent />
			<ContactContent />
		</>
	)
}

export default App
