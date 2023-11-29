import { FC } from 'react'
import './App.css'
import Intro from './components/Intro'
import ProjectContent from './components/ProjectContent'
import ContactContent from './components/ContactContent'

const App: FC = () => {
	return (
		<>
			<Intro />
			<ProjectContent />
			<ContactContent />
		</>
	)
}

export default App
