import { FC, Suspense, lazy, useEffect, useState, useMemo } from 'react'
import './App.css'
import Menu from './components/Menu'
import ProjectContent from './components/ProjectContent'
import ContactContent from './components/ContactContent'
import ExperienceContent from './components/ExperienceContent'
import { initParticlesEngine } from '@tsparticles/react'
import { type ISourceOptions } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

const LazyParticles = lazy(() => import('@tsparticles/react'))

const App: FC = () => {
	const [init, setInit] = useState(false)

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine)
			setInit(true)
		})
	}, [])

	const particlesLoaded = async (): Promise<void> => {}

	const options: ISourceOptions = useMemo(
		() => ({
			background: {
				color: {
					value: '#272727',
				},
			},
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: 'push',
					},
					onHover: {
						enable: false,
						mode: 'repulse',
					},
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 100,
						duration: 1,
					},
				},
			},
			particles: {
				color: {
					value: '#bead8e',
				},
				links: {
					color: '#bead8e',
					distance: 150,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				move: {
					enable: true,
					random: false,
					speed: 1,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: 40,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: 'circle',
				},
				size: {
					value: { min: 1, max: 5 },
				},
			},
			detectRetina: true,
		}),
		[]
	)

	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				{init && (
					<LazyParticles
						id='tsparticles'
						particlesLoaded={particlesLoaded}
						options={options}
					/>
				)}
			</Suspense>
			<Menu />
			<ProjectContent />
			<ExperienceContent />
			<ContactContent />
		</>
	)
}

export default App
