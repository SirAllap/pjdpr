import { FC } from 'react'
import styled from 'styled-components'
import { NormalText } from '../shared_styling/Styled'
import photoMirandaProject from '../assets/miranda-hotel1.png'

const ProjectContent: FC = () => {
	return (
		<>
			<BodyContainer id='projectSection'>
				<IntroSection>
					<NormalText>My latest projects:</NormalText>
				</IntroSection>
				<FirstSection className='firstSection'>
					<ProjectCard>
						<PhotoProject
							src={photoMirandaProject}
							alt='miranda project'
						/>
						{/* <NormalText>Miranda Hotel</NormalText>
						<NormalText>
							This is a project I did for a school project. I made
							a website for a hotel that I had been working for.
						</NormalText>
						<NormalText>
							<a
								href='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
								target='_blank'
							>
								Visit the website
							</a>
						</NormalText>
						<NormalText>
							Technologies used: React, Styled Components,
							Typescript
						</NormalText>
						<NormalText>
							<a
								href='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
								target='_blank'
							>
								Github
							</a>
						</NormalText> */}
					</ProjectCard>
				</FirstSection>
				<SecondSection className='secondSection'>
					<ProjectCard></ProjectCard>
				</SecondSection>
				{/* <ThirdSection className='thirdSection'></ThirdSection>
				<FourthSection className='fourthSection'></FourthSection> */}
			</BodyContainer>
		</>
	)
}

const BodyContainer = styled.div`
	height: 100vh;
`
const IntroSection = styled.div`
	height: 20%;
	p {
		font-size: 2rem;
	}
`
const FirstSection = styled.div`
	height: 40%;
	display: flex;
	align-items: center;
`
const ProjectCard = styled.div`
	overflow-y: auto;
	overflow-x: hidden;
	border: 1px solid black;
	margin: 0 auto;
	width: 90%;
	height: 85%;
	border-radius: 25px;
	background: rgba(255, 255, 255, 0.2);
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border: 1px solid rgba(255, 255, 255, 0.3);
	transition: all 0.5s ease-in-out;
	filter: brightness(90%);
	&:hover {
		filter: brightness(100%);
	}
`

const PhotoProject = styled.img`
	margin-left: 15%;
	width: 90%;
`

const SecondSection = styled.div`
	height: 40%;
	display: flex;
	align-items: center;
`
// const ThirdSection = styled.div`
// 	height: 25%;
// `
// const FourthSection = styled.div`
// 	height: 25%;
// `

export default ProjectContent
