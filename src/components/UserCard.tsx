import { FC } from 'react'
import { NormalText } from '../shared_styling/Styled'
import styled from 'styled-components'

const UserCard: FC = () => {
	return (
		<>
			<Card>
				<NormalText pos='mid'>
					I'm David Pallarés, based in the sunny Canary Islands. Over
					the last two years, I've deeply engaged in technology,
					making notable contributions. My early passion for gadgets
					evolved into expertise in PC hardware and Linux systems.
				</NormalText>
				<NormalText pos='mid'>
					Post-education, I delved deeper into crafting custom
					computers. Discovering my passion for web development just
					before the COVID pandemic, I embraced HTML, CSS, JS, PHP,
					and Laravel, marking a turning point.
				</NormalText>
				<NormalText pos='mid'>
					Two years ago, I enrolled in a Coding Bootcamp, gaining
					expertise in JS, Node, Express, UX-UI, Vue, and React. I've
					contributed to remarkable projects and am eager for new
					challenges to enhance my skills.
				</NormalText>
			</Card>
		</>
	)
}

const Card = styled.div`
	height: 50%;
	border-radius: 25px;
	padding: 50px;
	display: flex;
	flex-direction: column;
	p {
		text-align: justify;
		font-size: 1.2vw;
	}
`

export default UserCard
