import { FC } from 'react'
import styled from 'styled-components'
import { MdOutlineWork } from 'react-icons/md'
import { TbSchool } from 'react-icons/tb'
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { IntroSection, SmallLinks } from '../shared_styling/Styled'

const ExperienceContent: FC = () => {
	return (
		<>
			<BodyContainer>
				<IntroSection>
					<h1>Experience</h1>
					<hr />
				</IntroSection>
				<VerticalTimeline>
					<VerticalTimelineElement
						className='vertical-timeline-element--education'
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
						icon={<TbSchool style={{ fill: '#fff' }} />}
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
						<p style={{ textAlign: 'justify' }}>
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
						icon={<MdOutlineWork style={{ fill: '#fff' }} />}
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
						<p style={{ textAlign: 'justify' }}>
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
						<p style={{ textAlign: 'justify' }}>
							My responsibilities involve source candidates for
							open positions, using various methods and tools, and
							maintain a candidate database. I also screen and
							conduct initial interviews to assess their fit for
							the company.
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
						date='2023 - 2024'
						iconStyle={{
							background: '#8c56d2',
							color: '#fff',
						}}
						icon={<MdOutlineWork style={{ fill: '#fff' }} />}
					>
						<h3 className='vertical-timeline-element-title'>
							✤ Full-stack Developer
						</h3>
						<SmallLinks
							href='https://oxygenworkspace.com/'
							target='_blank'
						>
							OXYGEN Coworking
						</SmallLinks>
						<h4 className='vertical-timeline-element-subtitle'>
							Spain, Canary Islands ( 100% Remote )
						</h4>
						<p style={{ textAlign: 'justify' }}>
							As a FullStack developer, I've had the privilege of
							working with a diverse array of technologies
							including MongoDB, React with Redux, Node, PHP,
							MySQL, and AWS. My responsibilities have ranged from
							designing responsive web layouts with a mobile-first
							mindset to developing and integrating RESTful APIs.
							I've also been deeply involved in end-to-end and
							unit testing, as well as engaging in pair
							programming sessions to enhance collaboration.
							Throughout these experiences, I've embraced Agile
							methodologies and valued the invaluable feedback
							provided by Senior Developers to ensure code
							quality. These experiences have not only sharpened
							my technical skills but also ignited my passion for
							creating impactful digital solutions.
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
						date='2024 - current'
						iconStyle={{
							background: '#bead8e',
							color: '#fff',
						}}
						icon={<MdOutlineWork style={{ fill: '#fff' }} />}
					>
						<h3 className='vertical-timeline-element-title'>
							FullStack Developer
						</h3>
						<h4 className='vertical-timeline-element-subtitle'>
							<SmallLinks
								href='https://www.nextpyme.com/'
								target='_blank'
							>
								Nextpyme
							</SmallLinks>
						</h4>
						<p style={{ textAlign: 'justify' }}>
							With my expertise in JavaScript, Node.js, Laravel,
							PHP, SQL, HTML, Bootstrap, and Vue.js, I actively
							collaborate with the CEO to translate client needs
							into practical web solutions. Together, we work to
							ensure that every project is executed with precision
							and meets the unique requirements of our clients.
						</p>
					</VerticalTimelineElement>
					{/* <VerticalTimelineElement
            iconStyle={{
              background: "#8c56d2",
              color: "#fff",
            }}
            date="2024 / 03 - 2024 / 08"
						iconStyle={{
							background: '#8c56d2',
							color: '#fff',
						}}
						icon={<FaGenderless style={{ fill: '#fff' }} />}
					/> */}
				</VerticalTimeline>
			</BodyContainer>
		</>
	)
}

const BodyContainer = styled.div`
	height: 100%;
	position: relative;
`

export default ExperienceContent
