import { FC } from 'react'
import styled from 'styled-components'
import { FaConnectdevelop } from 'react-icons/fa6'
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { SmallLinks } from '../shared_styling/Styled'

const ExperienceContent: FC = () => {
	return (
		<>
			<BodyContainer id='experienceContent'>
				<IntroSection />
				<VerticalTimeline>
					<VerticalTimelineElement
						className='vertical-timeline-element--work'
						contentStyle={{
							background: 'rgba(255, 255, 255, 0.2)',
							color: '#fff',
						}}
						contentArrowStyle={{
							borderRight: '7px solid  rgba(255, 255, 255, 0.2)',
						}}
						date='2021 - 2022'
						iconStyle={{
							background: '#8c56d2',
							color: '#fff',
						}}
						icon={<FaConnectdevelop style={{ fill: '#fff' }} />}
					>
						<h3 className='vertical-timeline-element-title'>
							✤ FullStack Development Bootcamp
						</h3>
						<SmallLinks
							href='https://reboot.academy/'
							target='_blank'
						>
							Reboot Academy
						</SmallLinks>
						<h4 className='vertical-timeline-element-subtitle'>
							Spain, Canary Islands ( 100% Remote )
						</h4>
						<p>
							Built responsive web apps with Vue.js, Node.js,
							Express, and MongoDB. Collaborated with teams,
							managed code with Git, and deployed on
							Heroku/Netlify. Developed APIs, tested with Postman,
							and ensured intuitive UX/UI design with Miro/Figma.
							Actively participated in code reviews, continuous
							learning, and mastered UX/UI principles.
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--work'
						contentStyle={{
							background: 'rgba(255, 255, 255, 0.2)',
							color: '#fff',
						}}
						contentArrowStyle={{
							borderRight: '7px solid  rgba(255, 255, 255, 0.2)',
						}}
						date='2022 - 2023'
						iconStyle={{
							background: '#8c56d2',
							color: '#fff',
						}}
						icon={<FaConnectdevelop style={{ fill: '#fff' }} />}
					>
						<h3 className='vertical-timeline-element-title'>
							✤ Junior Sourcer
						</h3>
						<SmallLinks href='https://clarity.ai/' target='_blank'>
							Calrity AI
						</SmallLinks>
						<h4 className='vertical-timeline-element-subtitle'>
							Spain, Canary Islands ( 100% Remote )
						</h4>
						<p>
							My responsibilities involve source candidates for
							open positions, using various methods and tools, and
							maintain a candidate database. I also screen and
							conduct initial interviews to assess their fit for
							the company.
						</p>
						<h3 className='vertical-timeline-element-title'>
							<br />
							<hr />
							<br />
						</h3>
						<h3 className='vertical-timeline-element-title'>
							✤ Talent Acquisition Associate
						</h3>
						<SmallLinks href='https://clarity.ai/' target='_blank'>
							Calrity AI
						</SmallLinks>
						<h4 className='vertical-timeline-element-subtitle'>
							Spain, Canary Islands ( 100% Remote )
						</h4>
						<p>
							My responsibilities involve source candidates for
							open positions, using various methods and tools, and
							maintain a candidate database. I also screen and
							conduct initial interviews to assess their fit for
							the company.
						</p>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className='vertical-timeline-element--education'
						date='2002 - 2006'
						iconStyle={{
							background: 'rgb(233, 30, 99)',
							color: '#fff',
						}}
					>
						<h3 className='vertical-timeline-element-title'>
							Bachelor of Science in Interactive Digital Media
							Visual Imaging
						</h3>
						<h4 className='vertical-timeline-element-subtitle'>
							Bachelor Degree
						</h4>
						<p>Creative Direction, Visual Design</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						iconStyle={{
							background: 'rgb(16, 204, 82)',
							color: '#fff',
						}}
					/>
				</VerticalTimeline>
			</BodyContainer>
		</>
	)
}

const BodyContainer = styled.div`
	overflow-y: scroll;
	&::-webkit-scrollbar {
		width: 15px;
	}
	&::-webkit-scrollbar-track {
		background: #8c56d22d;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		border-radius: 5px;
	}
	&::-webkit-scrollbar-thumb {
		background: #8c56d2de;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		border-radius: 5px;
	}
	height: 100vh;
`

export default ExperienceContent

const IntroSection = styled.div`
	height: 180px;
	@media (max-width: 600px) {
		height: 120px;
	}
`
