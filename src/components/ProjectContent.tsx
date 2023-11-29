import { FC } from 'react'
import styled from 'styled-components'
import { Links, NormalText } from '../shared_styling/Styled'
import photoMirandaProject from '../assets/hotel_miranda.png'
import photoTravlProject from '../assets/travl_dashboard.png'
import oxygenPicsProject from '../assets/oxygen_pics.png'
import js from '../assets/technologies/js.png'
import html from '../assets/technologies/html.png'
import css from '../assets/technologies/css.png'
import php from '../assets/technologies/php.png'
import scss from '../assets/technologies/scss.png'

const ProjectContent: FC = () => {
	return (
		<>
			<BodyContainer id='projectSection'>
				<IntroSection></IntroSection>
				<FirstSection>
					<ProjectCard>
						<Links
							href='http://13.38.229.168/index'
							target='_blank'
						>
							<PhotoProjectRight
								src={photoMirandaProject}
								alt='Project miranda photo'
							/>
						</Links>
						<TextSection>
							<NormalText pos='mid' textSize='title'>
								Hotel Miranda
							</NormalText>
							<NormalText pos='justi'>
								This is a FrontEnd project I worked on during my
								mentorship program at Oxygen Academy. It was
								constructed using HTML, CSS (Sass/Scss), and
								JavaScript, primarily for implementing photo
								sliders with Swiper.js. Later on, I integrated
								it with an SQL database and transitioned all the
								code to PHP. I employed the BladeOne Template
								Engine, following the MVC pattern. Overall, it
								was a very enjoyable project!!!"
							</NormalText>
							<NormalText pos='right'>
								<Links
									href='http://13.38.229.168/index'
									target='_blank'
								>
									Visit the website
								</Links>
							</NormalText>
							<NormalText>Technologies used:</NormalText>
							<IconsContainer>
								<IconImage src={html} />
								<IconImage src={css} />
								<IconImage src={js} />
								<IconImage src={scss} />
								<IconImage src={php} />
							</IconsContainer>
							<NormalText pos='right'>
								<Links
									href='https://github.com/SirAllap/miranda-hotel-php'
									target='_blank'
								>
									Github
								</Links>
							</NormalText>
						</TextSection>
					</ProjectCard>
				</FirstSection>
				<SecondSection>
					<ProjectCard>
						<Links
							href='http://13.38.229.168/index'
							target='_blank'
						>
							<PhotoProjectLeft
								src={photoTravlProject}
								alt='Project miranda photo'
							/>
						</Links>
						<TextSectionRight>
							<NormalText pos='mid' textSize='title'>
								Hotel Miranda
							</NormalText>
							<NormalText pos='justi'>
								This is a FrontEnd project I worked on during my
								mentorship program at Oxygen Academy. It was
								constructed using HTML, CSS (Sass/Scss), and
								JavaScript, primarily for implementing photo
								sliders with Swiper.js. Later on, I integrated
								it with an SQL database and transitioned all the
								code to PHP. I employed the BladeOne Template
								Engine, following the MVC pattern. Overall, it
								was a very enjoyable project!!!"
							</NormalText>
							<NormalText pos='right'>
								<Links
									href='http://13.38.229.168/index'
									target='_blank'
								>
									Visit the website
								</Links>
							</NormalText>
							<NormalText>Technologies used:</NormalText>
							<IconsContainer>
								<IconImage src={html} />
								<IconImage src={css} />
								<IconImage src={js} />
								<IconImage src={scss} />
								<IconImage src={php} />
							</IconsContainer>
							<NormalText pos='right'>
								<Links
									href='https://github.com/SirAllap/miranda-hotel-php'
									target='_blank'
								>
									Github
								</Links>
							</NormalText>
						</TextSectionRight>
					</ProjectCard>
				</SecondSection>
				<ThirdSection>
					<ProjectCard>
						<Links
							href='http://13.38.229.168/index'
							target='_blank'
						>
							<PhotoProjectRight
								src={oxygenPicsProject}
								alt='Project miranda photo'
							/>
						</Links>
						<TextSection>
							<NormalText pos='mid' textSize='title'>
								Hotel Miranda
							</NormalText>
							<NormalText pos='justi'>
								This is a FrontEnd project I worked on during my
								mentorship program at Oxygen Academy. It was
								constructed using HTML, CSS (Sass/Scss), and
								JavaScript, primarily for implementing photo
								sliders with Swiper.js. Later on, I integrated
								it with an SQL database and transitioned all the
								code to PHP. I employed the BladeOne Template
								Engine, following the MVC pattern. Overall, it
								was a very enjoyable project!!!"
							</NormalText>
							<NormalText pos='right'>
								<Links
									href='http://13.38.229.168/index'
									target='_blank'
								>
									Visit the website
								</Links>
							</NormalText>
							<NormalText>Technologies used:</NormalText>
							<IconsContainer>
								<IconImage src={html} />
								<IconImage src={css} />
								<IconImage src={js} />
								<IconImage src={scss} />
								<IconImage src={php} />
							</IconsContainer>
							<NormalText pos='right'>
								<Links
									href='https://github.com/SirAllap/miranda-hotel-php'
									target='_blank'
								>
									Github
								</Links>
							</NormalText>
						</TextSection>
					</ProjectCard>
				</ThirdSection>
				<FourthSection>
					<ProjectCard>
						<Links
							href='http://13.38.229.168/index'
							target='_blank'
						>
							<PhotoProjectLeft
								src={photoTravlProject}
								alt='Project miranda photo'
							/>
						</Links>
						<TextSectionRight>
							<NormalText pos='mid' textSize='title'>
								Hotel Miranda
							</NormalText>
							<NormalText pos='justi'>
								This is a FrontEnd project I worked on during my
								mentorship program at Oxygen Academy. It was
								constructed using HTML, CSS (Sass/Scss), and
								JavaScript, primarily for implementing photo
								sliders with Swiper.js. Later on, I integrated
								it with an SQL database and transitioned all the
								code to PHP. I employed the BladeOne Template
								Engine, following the MVC pattern. Overall, it
								was a very enjoyable project!!!"
							</NormalText>
							<NormalText pos='right'>
								<Links
									href='http://13.38.229.168/index'
									target='_blank'
								>
									Visit the website
								</Links>
							</NormalText>
							<NormalText>Technologies used:</NormalText>
							<IconsContainer>
								<IconImage src={html} />
								<IconImage src={css} />
								<IconImage src={js} />
								<IconImage src={scss} />
								<IconImage src={php} />
							</IconsContainer>
							<NormalText pos='right'>
								<Links
									href='https://github.com/SirAllap/miranda-hotel-php'
									target='_blank'
								>
									Github
								</Links>
							</NormalText>
						</TextSectionRight>
					</ProjectCard>
				</FourthSection>
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
		border-radius: 0 5px 5px 0;
	}
	&::-webkit-scrollbar-thumb {
		background: #8c56d2de;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		border-radius: 0 5px 5px 0;
	}
	height: 100vh;
`

const IntroSection = styled.div`
	height: 150px;
`

const ProjectCard = styled.div`
	overflow-y: scroll;
	overflow-x: hidden;
	margin: 0 auto;
	width: 90%;
	height: 85%;
	border-radius: 5px;
	background: rgba(255, 255, 255, 0.2);
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	transition: all 0.5s;
	filter: grayscale(90%);
	&:hover {
		filter: grayscale(0%);
		scale: 1.01;
	}
	&::-webkit-scrollbar {
		width: 15px;
	}
	&::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.2);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		border-radius: 5px;
	}
	&::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.2);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		border-radius: 5px;
	}
`

const TextSection = styled.div`
	padding: 20px;
	width: 25%;
	height: 100%;
`

const TextSectionRight = styled.div`
	position: absolute;
	right: 0%;
	padding: 20px;
	width: 25%;
	height: 100%;
`

const FirstSection = styled.div`
	position: relative;
	height: 45%;
	display: flex;
	align-items: center;
`

const SecondSection = styled.div`
	direction: rtl;
	position: relative;
	height: 45%;
	display: flex;
	align-items: center;
`

const ThirdSection = styled.div`
	position: relative;
	height: 45%;
	display: flex;
	align-items: center;
`

const FourthSection = styled.div`
	direction: rtl;
	position: relative;
	height: 45%;
	display: flex;
	align-items: center;
`

const PhotoProjectRight = styled.img`
	cursor: pointer;
	position: absolute;
	top: 10%;
	right: 0%;
	width: 73%;
`

const PhotoProjectLeft = styled.img`
	cursor: pointer;
	position: absolute;
	top: 10%;
	left: 0%;
	width: 73%;
`

const IconsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	height: 50px;
	width: 100%;
	transition: 0.5s;
`

const IconImage = styled.img`
	width: 35px;
	height: 35px;
`

export default ProjectContent
