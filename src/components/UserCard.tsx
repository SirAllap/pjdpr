import { FC } from 'react'
import { CTA, Links, NormalText } from '../shared_styling/Styled'
import styled from 'styled-components'

const UserCard: FC = () => {
	return (
		<>
			<CardContainer>
				<Card>
					<NormalText pos='mid'>
						My name is David Pallarés, and I live in the beautiful
						Canary Islands, where the sun shines all year round. For
						the past two years, I have been fully immersed in
						learning and creating, contributing to several
						noteworthy projects along the way. My interest in
						technology began in my childhood, where I spent
						countless hours tinkering with old gadgets, eager to
						understand their inner workings.
					</NormalText>
					<NormalText pos='mid'>
						After completing my education, I delved even further
						into the world of PCs and hardware, honing my skills in
						the art of crafting custom computers. The world of Linux
						and systems fascinated me, and I relished the joy of
						bringing together PC parts and giving them life.
					</NormalText>
					<NormalText pos='mid'>
						Just before the COVID pandemic, I discovered my true
						passion for web development. I enrolled in a web
						development course and dived straight into HTML, CSS,
						JS, and some PHP & Laravel. Although it wasn't a
						profound commitment at the time, it marked the beginning
						of a turning point for me.
					</NormalText>
					<NormalText pos='mid'>
						Two years ago, I made a bold decision to enroll in a
						Coding Bootcamp, where I gained an in-depth foundation
						in JS, Node, Express, UX-UI, Vue, React, which has been
						a game-changer for me. Since then, my commitment to
						learning and my curiosity about this fascinating world
						has only deepened. I have contributed to various
						remarkable projects, and I am eager to take on more
						challenges that will enhance my skills and expertise.
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
