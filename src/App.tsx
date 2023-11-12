import { FC } from 'react'
import './App.css'
import Intro from './components/Intro'
import BodyContent from './components/BodyContent'

const App: FC = () => {
	return (
		<>
			<Intro />
			<BodyContent />
		</>
	)
}

export default App
