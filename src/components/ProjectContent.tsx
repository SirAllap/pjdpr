import { FC } from 'react'
import styled from 'styled-components'
import { Links, NormalText } from '../shared_styling/Styled'
import photoMirandaProject from '../assets/hotel_miranda.png'
import photoTravlProject from '../assets/travl_dashboard.png'
import oxygenPicsProject from '../assets/oxygen_pics.png'
import oxygenshop from '../assets/oxygen_shop.png'
import peekbeats from '../assets/peekbeats.png'
import frogger from '../assets/frogger.png'
import gmf from '../assets/gmf.png'
import js from '../assets/technologies/js.png'
import html from '../assets/technologies/html.png'
import css from '../assets/technologies/css.png'
import php from '../assets/technologies/php.png'
import scss from '../assets/technologies/scss.png'

const ProjectContent: FC = () => {
	return (
		<>
			<BodyContainer id='projectSection'>
				<IntroSection />
				<FirstSection>
					<ProjectCard>
						<PhotoContainerRight>
							<Links
								href='http://13.38.229.168/index'
								target='_blank'
							>
								<PhotoProjectRight
									src={photoMirandaProject}
									alt='Project miranda photo'
								/>
							</Links>
						</PhotoContainerRight>
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
						<PhotoContainerLeft>
							<Links
								href='http://hotelmiranda-dashboard.s3-website.eu-west-3.amazonaws.com/login'
								target='_blank'
							>
								<PhotoProjectLeft
									src={photoTravlProject}
									alt='Project travl dashboard'
								/>
							</Links>
						</PhotoContainerLeft>
						<TextSectionRight>
							<NormalText pos='mid' textSize='title'>
								Travl Dashboard
							</NormalText>
							<NormalText pos='justi'>
								This is one of the most complex projects I've
								done so far, involving user management, roles,
								CRUD using Express with MongoDB/Mongoose, React
								with Redux. Styling was an absolute delight with
								Styled Components! The user can seamlessly
								handle upcoming bookings, manage rooms, and
								oversee the hotel's working staff—all within a
								visually stunning dashboard!
							</NormalText>
							<NormalText pos='left'>
								<Links
									href='http://hotelmiranda-dashboard.s3-website.eu-west-3.amazonaws.com/login'
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
							<NormalText pos='left'>
								<Links
									href='https://github.com/SirAllap/hotel_miranda_dashboard'
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
						<PhotoContainerRight>
							<Links
								href='http://oxygen-academy-photo-app.s3-website.eu-west-3.amazonaws.com/'
								target='_blank'
							>
								<PhotoProjectRight
									src={oxygenPicsProject}
									alt='Oxygen Stock Free Photos'
								/>
							</Links>
						</PhotoContainerRight>
						<TextSection>
							<NormalText pos='mid' textSize='title'>
								Oxygen Stock Free Photos
							</NormalText>
							<NormalText pos='justi'>
								This project is a personal favorite of mine
								because it has a clean and stylish appearance,
								making the whole experience enjoyable. I created
								this web application using React, Redux Toolkit,
								and the Unsplash API. My main focus was to
								master React from the ground up and effectively
								implement Redux Toolkit for managing the
								project's data. It took me about a week to
								complete, and I take pride in its smooth
								performance and polished design.
							</NormalText>
							<NormalText pos='right'>
								<Links
									href='http://oxygen-academy-photo-app.s3-website.eu-west-3.amazonaws.com/'
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
									href='https://github.com/SirAllap/app-photos'
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
						<PhotoContainerLeft>
							<Links
								href='http://13.38.229.168/index'
								target='_blank'
							>
								<PhotoProjectLeft
									src={oxygenshop}
									alt='Project peekbeats'
								/>
							</Links>
						</PhotoContainerLeft>
						<TextSectionRight>
							<NormalText pos='mid' textSize='title'>
								PeekBeats
							</NormalText>
							<NormalText pos='justi'>
								This is a streaming applicationdesigned for both
								music lovers and content creators. I
								collaborated with two other bootcamp students to
								develop PeekBeats, an incredible application.
								"PeekBeats is a dynamic streaming platform that
								connects music producers with listeners. It
								offers a user-friendly interface and bridges the
								gap between creators and consumers, enriching
								the global music scene." This platform is
								working thanks to: Socket.IO a "bidirectional
								and low-latency communication for every
								platform."
							</NormalText>
							<NormalText pos='left'>
								<Links href='#'>
									NOT AVAILABLE AT THE MOMENT
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
							<NormalText pos='left'>
								<Links
									href='https://github.com/JuanAntonioLeonOjeda/Project-3---Streaming-App'
									target='_blank'
								>
									Github
								</Links>
							</NormalText>
						</TextSectionRight>
					</ProjectCard>
				</FourthSection>
				<FifthSection>
					<ProjectCard>
						<PhotoContainerRight>
							<Links
								href='http://13.38.229.168/index'
								target='_blank'
							>
								<PhotoProjectRight
									src={peekbeats}
									alt='Project peekbeats'
								/>
							</Links>
						</PhotoContainerRight>
						<TextSection>
							<NormalText pos='mid' textSize='title'>
								PeekBeats
							</NormalText>
							<NormalText pos='justi'>
								This is a streaming applicationdesigned for both
								music lovers and content creators. I
								collaborated with two other bootcamp students to
								develop PeekBeats, an incredible application.
								"PeekBeats is a dynamic streaming platform that
								connects music producers with listeners. It
								offers a user-friendly interface and bridges the
								gap between creators and consumers, enriching
								the global music scene." This platform is
								working thanks to: Socket.IO a "bidirectional
								and low-latency communication for every
								platform."
							</NormalText>
							<NormalText pos='left'>
								<Links href='#'>
									NOT AVAILABLE AT THE MOMENT
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
							<NormalText pos='left'>
								<Links
									href='https://github.com/JuanAntonioLeonOjeda/Project-3---Streaming-App'
									target='_blank'
								>
									Github
								</Links>
							</NormalText>
						</TextSection>
					</ProjectCard>
				</FifthSection>
				<SixthSection>
					<ProjectCard>
						<PhotoContainerLeft>
							<Links
								href='http://13.38.229.168/index'
								target='_blank'
							>
								<PhotoProjectLeft
									src={frogger}
									alt='Project miranda photo'
								/>
							</Links>
						</PhotoContainerLeft>
						<TextSection>
							<NormalText pos='mid' textSize='title'>
								Frogger, classic game
							</NormalText>
							<NormalText pos='justi'>
								Classic Frogger game. The game's objective is to
								guide a frog to each empty home at the top of
								the screen. I worked on this project alongside
								two other colleagues. It was a valuable
								experience where we learned how to function
								effectively as a team. We divided tasks, worked
								in separate branches, and merged our changes to
								GitHub.
							</NormalText>
							<NormalText pos='right'>
								<Links
									href='sirallap.github.io/proyecto1-frogger/'
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
									href='https://github.com/SirAllap/proyecto1-frogger'
									target='_blank'
								>
									Github
								</Links>
							</NormalText>
						</TextSection>
					</ProjectCard>
				</SixthSection>
				<SeventhSection>
					<ProjectCard>
						<PhotoContainerRight>
							<Links
								href='http://13.38.229.168/index'
								target='_blank'
							>
								<PhotoProjectRight
									src={gmf}
									alt='Project miranda photo'
								/>
							</Links>
						</PhotoContainerRight>
						<TextSection>
							<NormalText pos='mid' textSize='title'>
								GMF Mediación
							</NormalText>
							<NormalText pos='justi'>
								This was my first real job, and I built the
								website using HTML, CSS, and a bit of JS. The
								site is for a professional office that promotes
								peace in families dealing with conflicts. I
								worked closely with the client, meeting twice a
								week to talk about new features and how things
								were going. They even added some new stuff along
								the way. It was a bit tough for a beginner like
								me, but seeing how happy the client was with the
								result made it really rewarding.
							</NormalText>
							<NormalText pos='right'>
								<Links
									href='https://www.gmfmediacion.com/'
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
							</IconsContainer>
						</TextSection>
					</ProjectCard>
				</SeventhSection>
				<EndSection>
					<Arrow href='#contactSection' />
				</EndSection>
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

const IntroSection = styled.div`
	height: 150px;
`

const EndSection = styled.div`
	height: 150px;
	position: relative;
`

const ProjectCard = styled.div`
	overflow-y: hidden;
	overflow-x: hidden;
	margin: 0 auto;
	width: 90%;
	height: 90%;
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
`

const PhotoContainerRight = styled.div`
	&::-webkit-scrollbar {
		width: 0px;
	}
	overflow-y: scroll;
	position: absolute;
	top: 0;
	right: 0;
	width: 70%;
	height: 100%;
	a {
		font-size: 0rem;
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

const PhotoContainerLeft = styled.div`
	&::-webkit-scrollbar {
		width: 0px;
	}
	overflow-y: scroll;
	position: absolute;
	top: 0;
	left: 0;
	width: 70%;
	height: 100%;
	a {
		font-size: 0rem;
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
	margin-top: 15px;
	width: 30%;
	height: 100%;
	p {
		padding: 0 40px 0 40px;
	}
`

const TextSectionRight = styled.div`
	position: absolute;
	right: 0%;
	margin-top: 15px;
	width: 30%;
	height: 100%;
	p {
		direction: ltr;
		padding: 0 40px 0 40px;
	}
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

const FifthSection = styled.div`
	position: relative;
	height: 45%;
	display: flex;
	align-items: center;
`

const SixthSection = styled.div`
	direction: rtl;
	position: relative;
	height: 45%;
	display: flex;
	align-items: center;
`

const SeventhSection = styled.div`
	position: relative;
	height: 45%;
	display: flex;
	align-items: center;
`

const PhotoProjectRight = styled.img`
	cursor: pointer;
	padding: 10px 0 0 0;
	width: 100%;
`

const PhotoProjectLeft = styled.img`
	cursor: pointer;
	padding: 10px 0 0 0;
	width: 100%;
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

const Arrow = styled.a`
	position: absolute;
	bottom: 50%;
	left: calc(50% - 35px);
	transform: translate(-50%, -50%);
	cursor: pointer;
	border: solid #8c56d2;
	border-width: 0 10px 10px 0;
	width: 70px;
	height: 70px;
	transition: 0.5s;
	animation: float 2.5s ease-in-out infinite;
	@keyframes float {
		0% {
			transform: translatey(0px) rotate(45deg);
		}
		50% {
			transform: translatey(-20px) rotate(45deg);
		}
		100% {
			transform: translatey(0px) rotate(45deg);
		}
	}
	@media (max-width: 600px) {
		width: 40px;
		height: 40px;
		left: calc(50% - 20px);
	}
`

export default ProjectContent
