import { FC } from 'react'
import { Links, NormalText } from '../shared_styling/Styled'
import styled from 'styled-components'
import vscode from '../assets/vscode.png'
import aws from '../assets/aws.png'
import js from '../assets/js.png'
import ts from '../assets/ts.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import mongo_db from '../assets/mongo-db.png'
import php from '../assets/php.png'
import rectangle from '../assets/rectangle45.png'

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
					<SkillsContainer>
						<SkillsIcons src={react} />
						<SkillsIcons src={js} />
						<SkillsIcons src={ts} />
						<SkillsIcons src={node} />
						<SkillsIcons src={mongo_db} />
						<SkillsIcons src={php} />
						<SkillsIcons src={vscode} />
						<SkillsIcons src={aws} />
					</SkillsContainer>
					<Links href='#projectSection'>
						<CTAProjects>Projects!</CTAProjects>
					</Links>
				</Card>
			</CardContainer>
		</>
	)
}

const CardContainer = styled.div`
	position: relative;
	height: 100%;
	display: grid;
	place-items: center;
	background-image: url(${rectangle});
`

const Card = styled.div`
	width: 85%;
	height: 60%;
	border-radius: 25px;
	padding: 50px;
	background: rgba(255, 255, 255, 0.2);
	border-radius: 16px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border: 1px solid rgba(255, 255, 255, 0.3);
	p {
		text-align: justify;
		font-size: 2.5rem;
		color: #404040;
	}
`

const CTAProjects = styled.button`
	position: absolute;
	left: 50%;
	bottom: 0;
	transform: translate(-50%, -50%);
	background-color: white;
	color: black;
	&:hover {
		background-color: transparent;
		color: white;
	}
`

const SkillsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	padding: 40px 0 40px 0;
	width: 100%;
`
const SkillsIcons = styled.img`
	width: 100px;
	height: 100px;
`

export default UserCard
