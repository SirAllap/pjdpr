import { FC } from 'react'
import './App.css'
import Intro from './components/Intro'
import ProjectContent from './components/ProjectContent'
import ContactContent from './components/ContactContent'
import AboutMeContent from './components/AboutMeContent'

const App: FC = () => {
	return (
		<>
			<Intro />
			<AboutMeContent />
			<ProjectContent />
			<ContactContent />
		</>
	)
}

export default App
