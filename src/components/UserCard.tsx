import { FC } from 'react'
import { Links, NormalText } from '../shared_styling/Styled'
import styled from 'styled-components'

const UserCard: FC = () => {
	return (
		<>
			<CardContainer>
				<Card>
					<NormalText pos='mid'>
						I'm David Pallarés, based in the sunny Canary Islands.
						Over the last two years, I've deeply engaged in
						technology, making notable contributions. My early
						passion for gadgets evolved into expertise in PC
						hardware and Linux systems.
					</NormalText>
					<NormalText pos='mid'>
						Post-education, I delved deeper into crafting custom
						computers. Discovering my passion for web development
						just before the COVID pandemic, I embraced HTML, CSS,
						JS, PHP, and Laravel, marking a turning point.
					</NormalText>
					<NormalText pos='mid'>
						Two years ago, I enrolled in a Coding Bootcamp, gaining
						expertise in JS, Node, Express, UX-UI, Vue, and React.
						I've contributed to remarkable projects and am eager for
						new challenges to enhance my skills.
					</NormalText>
					<Links href='#projectSection'>
						<CTAProjects>Projects!</CTAProjects>
					</Links>
				</Card>
			</CardContainer>
		</>
	)
}

const CardContainer = styled.div`
	height: 100%;
	display: grid;
	place-items: center;
`

const Card = styled.div`
	display: grid;
	place-items: center;
	margin: 0 auto;
	width: 85%;
	height: 60%;
	border: 1px solid white;
	border-radius: 10px;
	text-align: center;
	padding: 50px;
	background-color: #5402be;
	p {
		font-size: 2rem;
	}
`

const CTAProjects = styled.button`
	background-color: white;
	color: black;
	&:hover {
		background-color: transparent;
		color: white;
	}
`

export default UserCard
