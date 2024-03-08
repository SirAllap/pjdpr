import { FC } from 'react'
import './App.css'
import Intro from './components/Intro'
import ProjectContent from './components/ProjectContent'
import ContactContent from './components/ContactContent'
import ExperienceContent from './components/ExperienceContent'

const App: FC = () => {
	return (
		<>
			<Intro />
			<ProjectContent />
			<ExperienceContent />
			<ContactContent />
		</>
	)
}

export default App
