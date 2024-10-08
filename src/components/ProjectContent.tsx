import { FC } from 'react'
import styled from 'styled-components'
import {
	HighlightedText,
	IntroSection,
	Links,
	NormalText,
	PrivateLinks,
	SmallLinks,
} from '../shared_styling/Styled'
import tudietista from '../assets/dietista_full-low.webp'
import photoAlaveraProject from '../assets/alavera.webp'
import photoMirandaProject from '../assets/hotel_miranda.webp'
import photoTravlProject from '../assets/travl_dashboard.webp'
import oxygenPicsProject from '../assets/oxygen_pics.webp'
import oxygenshop from '../assets/oxygen_shop.webp'
import peekbeats from '../assets/peekbeats.webp'
import frogger from '../assets/frogger.webp'
import gmf from '../assets/gmf.webp'

import js from '../assets/technologies/js.png'
import ts from '../assets/technologies/ts.png'
import html from '../assets/technologies/html.png'
import css from '../assets/technologies/css.png'
import php from '../assets/technologies/php.png'
import scss from '../assets/technologies/scss.png'
import aws from '../assets/technologies/aws.png'
import react from '../assets/technologies/react.png'
import node from '../assets/technologies/node.png'
import mongo from '../assets/technologies/mongo-db.png'
import npm from '../assets/technologies/npm.png'
import vscode from '../assets/technologies/vscode.png'
import vue from '../assets/technologies/vue.png'
import mui from '../assets/technologies/mui.png'
import next from '../assets/technologies/next.png'
import firebase from '../assets/technologies/firebase.png'
import react_router from '../assets/technologies/react_router.png'
import tailwind from '../assets/technologies/tailwind.png'
import calendly from '../assets/technologies/calendly.png'
import emailjs from '../assets/technologies/emailjs.png'

const ProjectContent: FC = () => {
	return (
		<>
			<BodyContainer>
				<IntroSection>
					<h1>Projects</h1>
					<hr />
				</IntroSection>
				<NormalSection>
					<ProjectCard>
						<PhotoContainerRight>
							<NormalText pos='mid' textsize='title'>
								Tu Dietista Online
							</NormalText>
							<Links href='https://tudietistaonline-am.com/' target='_blank'>
								<PhotoProjectRight
									src={tudietista}
									alt='Project Tu Dietista Online'
								/>
							</Links>
						</PhotoContainerRight>
						<TextSection>
							<NormalText pos='mid' textsize='title'>
								Tu Dietista Online
							</NormalText>
							<NormalText pos='justi'>
								Tu Dietista Online is a project I independently designed and
								developed using modern web technologies. From structuring the
								layout and creating a seamless user experience to handling
								deployment and maintenance, this was an enjoyable and rewarding
								experience. The site features smooth navigation with{' '}
								<HighlightedText color='#D0021B'>React</HighlightedText>{' '}
								<HighlightedText color='#000000'>Router</HighlightedText>,
								responsive design with{' '}
								<HighlightedText color='#33D3CA'>Tailwind</HighlightedText>,
								engaging visuals with a parallax effect, and integrated tools
								like <HighlightedText color='#006BFF'>Calendly</HighlightedText>{' '}
								for scheduling and{' '}
								<HighlightedText color='#FF8434'>EmailJS</HighlightedText> for
								contact forms.
							</NormalText>
							<NormalText pos='right'>
								<Links href='https://tudietistaonline-am.com/' target='_blank'>
									Visit the website
								</Links>
							</NormalText>
							<NormalText>Technologies used:</NormalText>
							<IconsContainer>
								<IconImage src={react} />
								<IconImage src={react_router} />
								<IconImage src={tailwind} />
								<IconImage src={calendly} />
								<IconImage src={emailjs} />
								<IconImage src={vscode} />
							</IconsContainer>
							<NormalText pos='right'>
								<PrivateLinks>Private Github</PrivateLinks>
							</NormalText>
						</TextSection>
					</ProjectCard>
				</NormalSection>
				<ReversedSection>
					<ProjectCard>
						<PhotoContainerLeft>
							<NormalText pos='mid' textsize='title'>
								Alavera Project
							</NormalText>
							<PrivateLinks>
								<PhotoProjectLeft
									src={photoAlaveraProject}
									alt='Baby Project "Alavera"'
								/>
							</PrivateLinks>
						</PhotoContainerLeft>
						<TextSectionRight>
							<NormalText pos='mid' textsize='title'>
								Baby Project "Alavera"
							</NormalText>
							<NormalText pos='justi'>
								I've been diving into this super cool project lately, working
								for a private client. It's an amazing opportunity to expand my
								knowledge by using the Next.js framework, and I'm also
								experimenting with Firebase! <br />
								Right now, the project is still in its early stages, like a
								newborn baby. Basically, it's a collection of illustrated cards,
								each with its unique backstory. And the best part? All the
								illustrations are handcrafted by the amazing artist{' '}
								<SmallLinks
									href='https://www.linkedin.com/in/armichelora/'
									target='_blank'
								>
									Armiche Lora
								</SmallLinks>
								, perfectly capturing the vibe of each character and faction.
								<br />
								Check the artist portfolio{' '}
								<SmallLinks
									href='https://www.artstation.com/nahelus'
									target='_blank'
								>
									HERE!
								</SmallLinks>
								<br />
							</NormalText>
							<NormalText pos='left'>
								<PrivateLinks>Visit the website</PrivateLinks>{' '}
								<span>Coming soon!</span>
							</NormalText>
							<NormalText>Technologies used:</NormalText>
							<IconsContainer>
								<IconImage src={vscode} />
								<IconImage src={npm} />
								<IconImage src={firebase} />
								<IconImage src={node} />
								<IconImage src={next} />
								<IconImage src={ts} />
								<IconImage src={react} />
							</IconsContainer>
							<NormalText pos='left'>
								<PrivateLinks>Private Github</PrivateLinks>
							</NormalText>
						</TextSectionRight>
					</ProjectCard>
				</ReversedSection>
				<NormalSection>
					<ProjectCard>
						<PhotoContainerRight>
							<NormalText pos='mid' textsize='title'>
								Hotel Miranda
							</NormalText>
							<Links
								href='http://ec2-13-39-83-255.eu-west-3.compute.amazonaws.com/'
								target='_blank'
							>
								<PhotoProjectRight
									src={photoMirandaProject}
									alt='Project miranda photo'
								/>
							</Links>
						</PhotoContainerRight>
						<TextSection>
							<NormalText pos='mid' textsize='title'>
								Hotel Miranda
							</NormalText>
							<NormalText pos='justi'>
								This is a FrontEnd project I worked on during my mentorship
								program at Oxygen Academy. It was constructed using HTML, CSS
								(Sass/Scss), and JavaScript, primarily for implementing photo
								sliders with Swiper.js. Later on, I integrated it with an SQL
								database and transitioned all the code to PHP. I employed the
								BladeOne Template Engine, following the MVC pattern. Overall, it
								was a very enjoyable project!!!
							</NormalText>
							<NormalText pos='right'>
								<Links
									href='http://ec2-13-39-83-255.eu-west-3.compute.amazonaws.com/'
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
								<IconImage src={vscode} />
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
				</NormalSection>
				<ReversedSection>
					<ProjectCard>
						<PhotoContainerLeft>
							<NormalText pos='mid' textsize='title'>
								Travl Dashboard
							</NormalText>
							<Links
								href='http://davidprcloud-travldashboard.s3-website-eu-west-1.amazonaws.com/login'
								target='_blank'
							>
								<PhotoProjectLeft
									src={photoTravlProject}
									alt='Project travl dashboard'
								/>
							</Links>
						</PhotoContainerLeft>
						<TextSectionRight>
							<NormalText pos='mid' textsize='title'>
								Travl Dashboard
							</NormalText>
							<NormalText pos='justi'>
								This is one of the most complex projects I've done so far,
								involving user management, roles, CRUD using Express with
								MongoDB/Mongoose, React with Redux. Styling was an absolute
								delight with Styled Components! The user can seamlessly handle
								upcoming bookings, manage rooms, and oversee the hotel's working
								staff—all within a visually stunning dashboard!
							</NormalText>
							<NormalText pos='left'>
								<Links
									href='http://davidprcloud-travldashboard.s3-website-eu-west-1.amazonaws.com/login'
									target='_blank'
								>
									Visit the website
								</Links>
							</NormalText>
							<NormalText>Technologies used:</NormalText>
							<IconsContainer>
								<IconImage src={vscode} />
								<IconImage src={npm} />
								<IconImage src={aws} />
								<IconImage src={node} />
								<IconImage src={mongo} />
								<IconImage src={ts} />
								<IconImage src={react} />
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
				</ReversedSection>
				<NormalSection>
					<ProjectCard>
						<PhotoContainerRight>
							<NormalText pos='mid' textsize='title'>
								Oxygen Stock Free Photos
							</NormalText>
							<Links
								href='http://davidprcloud-unsplash-photo-app.s3-website.eu-west-3.amazonaws.com'
								target='_blank'
							>
								<PhotoProjectRight
									src={oxygenPicsProject}
									alt='Oxygen Stock Free Photos'
								/>
							</Links>
						</PhotoContainerRight>
						<TextSection>
							<NormalText pos='mid' textsize='title'>
								Oxygen Stock Free Photos
							</NormalText>
							<NormalText pos='justi'>
								This project is a personal favorite of mine because it has a
								clean and stylish appearance, making the whole experience
								enjoyable. I created this web application using React, Redux
								Toolkit, and the Unsplash API. My main focus was to master React
								from the ground up and effectively implement Redux Toolkit for
								managing the project's data. It took me about a week to
								complete, and I take pride in its smooth performance and
								polished design.
							</NormalText>
							<NormalText pos='right'>
								<Links
									href='http://davidprcloud-unsplash-photo-app.s3-website.eu-west-3.amazonaws.com'
									target='_blank'
								>
									Visit the website
								</Links>
							</NormalText>
							<NormalText>Technologies used:</NormalText>
							<IconsContainer>
								<IconImage src={js} />
								<IconImage src={react} />
								<IconImage style={{ width: '50px' }} src={mui} />
								<IconImage src={node} />
								<IconImage src={aws} />
								<IconImage src={npm} />
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
				</NormalSection>
				<ReversedSection>
					<ProjectCard>
						<PhotoContainerLeft>
							<NormalText pos='mid' textsize='title'>
								Oxigen Shop
							</NormalText>
							<Links
								href='http://davidprcloud-html-css-js-shop.s3-website.eu-west-3.amazonaws.com'
								target='_blank'
							>
								<PhotoProjectLeft src={oxygenshop} alt='Oxigen Shop' />
							</Links>
						</PhotoContainerLeft>
						<TextSectionRight>
							<NormalText pos='mid' textsize='title'>
								Oxigen Shop
							</NormalText>
							<NormalText pos='justi'>
								I took on the challenge of transforming a Figma design into a
								functional website by utilizing my skills in HTML, CSS, and JS.
							</NormalText>
							<NormalText pos='left'>
								<Links href='http://davidprcloud-html-css-js-shop.s3-website.eu-west-3.amazonaws.com'>
									Visit the website
								</Links>
							</NormalText>
							<NormalText>Technologies used:</NormalText>
							<IconsContainer>
								<IconImage src={aws} />
								<IconImage src={npm} />
								<IconImage src={scss} />
								<IconImage src={js} />
								<IconImage src={css} />
								<IconImage src={html} />
							</IconsContainer>
							<NormalText pos='left'>
								<Links
									href='https://github.com/SirAllap/OxygenShop'
									target='_blank'
								>
									Github
								</Links>
							</NormalText>
						</TextSectionRight>
					</ProjectCard>
				</ReversedSection>
				<NormalSection>
					<ProjectCard>
						<PhotoContainerRight>
							<NormalText pos='mid' textsize='title'>
								PeekBeats
							</NormalText>
							<Links href='https://peek-beats.netlify.app/' target='_blank'>
								<PhotoProjectRight src={peekbeats} alt='Project peekbeats' />
							</Links>
						</PhotoContainerRight>
						<TextSection>
							<NormalText pos='mid' textsize='title'>
								PeekBeats
							</NormalText>
							<NormalText pos='justi'>
								This is a streaming application designed for both music lovers
								and content creators. I collaborated with two other bootcamp
								students to develop PeekBeats, an incredible application.
								"PeekBeats is a dynamic streaming platform that connects music
								producers with listeners. It offers a user-friendly interface
								and bridges the gap between creators and consumers, enriching
								the global music scene." This platform is working thanks to:
								Socket.IO a "bidirectional and low-latency communication for
								every platform."
							</NormalText>
							<NormalText pos='right'>
								<Links href='https://peek-beats.netlify.app/'>
									NOT AVAILABLE
								</Links>
							</NormalText>
							<NormalText>Technologies used:</NormalText>
							<IconsContainer>
								<IconImage src={vue} />
								<IconImage style={{ width: '50px' }} src={mui} />
								<IconImage src={js} />
								<IconImage src={node} />
								<IconImage src={mongo} />
							</IconsContainer>
							<NormalText pos='right'>
								<Links
									href='https://github.com/JuanAntonioLeonOjeda/Project-3---Streaming-App'
									target='_blank'
								>
									Github
								</Links>
							</NormalText>
						</TextSection>
					</ProjectCard>
				</NormalSection>
				<ReversedSection>
					<ProjectCard>
						<PhotoContainerLeft>
							<NormalText pos='mid' textsize='title'>
								Frogger, classic game
							</NormalText>
							<Links
								href='https://sirallap.github.io/proyecto1-frogger/'
								target='_blank'
							>
								<PhotoProjectLeft src={frogger} alt='Project miranda photo' />
							</Links>
						</PhotoContainerLeft>
						<TextSectionRight>
							<NormalText pos='mid' textsize='title'>
								Frogger, classic game
							</NormalText>
							<NormalText pos='justi'>
								Classic Frogger game. The game's objective is to guide a frog to
								each empty home at the top of the screen. I worked on this
								project alongside two other colleagues. It was a valuable
								experience where we learned how to function effectively as a
								team. We divided tasks, worked in separate branches, and merged
								our changes to GitHub.
							</NormalText>
							<NormalText pos='left'>
								<Links
									href='https://sirallap.github.io/proyecto1-frogger/'
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
							<NormalText pos='left'>
								<Links
									href='https://github.com/SirAllap/proyecto1-frogger'
									target='_blank'
								>
									Github
								</Links>
							</NormalText>
						</TextSectionRight>
					</ProjectCard>
				</ReversedSection>
				<NormalSection>
					<ProjectCard>
						<PhotoContainerRight>
							<NormalText pos='mid' textsize='title'>
								GMF Mediación
							</NormalText>
							<Links href='https://www.gmfmediacion.com/' target='_blank'>
								<PhotoProjectRight src={gmf} alt='Project miranda photo' />
							</Links>
						</PhotoContainerRight>
						<TextSection>
							<NormalText pos='mid' textsize='title'>
								GMF Mediación
							</NormalText>
							<NormalText pos='justi'>
								This was my first real job, and I built the website using HTML,
								CSS, and a bit of JS. The site is for a professional office that
								promotes peace in families dealing with conflicts. I worked
								closely with the client, meeting twice a week to talk about new
								features and how things were going. They even added some new
								stuff along the way. It was a bit tough for a beginner like me,
								but seeing how happy the client was with the result made it
								really rewarding.
							</NormalText>
							<NormalText pos='right'>
								<Links href='https://www.gmfmediacion.com/' target='_blank'>
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
				</NormalSection>
			</BodyContainer>
		</>
	)
}

const BodyContainer = styled.div`
	position: relative;
	&::-webkit-scrollbar {
		width: 0;
	}
	height: 100%;
`

const ProjectCard = styled.div`
	overflow-y: hidden;
	overflow-x: hidden;
	margin: 0 auto;
	width: 90%;
	height: 550px;
	border-radius: 5px;
	background: rgba(255, 255, 255, 0.2);
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	transition: all 0.5s;
	@media (max-width: 1200px) {
		height: 90%;
		width: 98%;
		overflow-y: auto;
		overflow-x: auto;
	}
`

const PhotoContainerRight = styled.div`
	p {
		display: none;
	}
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
	@media (max-width: 1200px) {
		overflow: hidden;
		width: 100%;
		height: fit-content;
		position: relative;
		p {
			display: block;
			font-size: 2rem;
		}
	}
`

const PhotoContainerLeft = styled.div`
	p {
		display: none;
	}
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
	@media (max-width: 1200px) {
		overflow: hidden;
		width: 100%;
		height: fit-content;
		position: relative;
		p {
			display: block;
			font-size: 2rem;
		}
	}
`

const TextSection = styled.div`
	overflow: auto;
	&::-webkit-scrollbar {
		width: 5px;
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
	margin-top: 5px;
	width: 30%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	p {
		padding: 0 15px 0 15px;
	}
	@media (max-width: 1200px) {
		p {
			&:first-child {
				display: none;
			}
			padding: 0 15px 0 15px;
			&:last-child {
				padding-bottom: 10px;
			}
		}
		overflow: hidden;
		width: 100%;
		height: fit-content;
		position: relative;
		a {
			font-size: 1.6rem;
		}
	}
	@media (min-width: 1200px) {
	}
`

const TextSectionRight = styled.div`
	overflow: auto;
	&::-webkit-scrollbar {
		width: 5px;
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
	position: absolute;
	right: 0%;
	margin-top: 5px;
	width: 30%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	p {
		direction: ltr;
		padding: 0 15px 0 15px;
	}
	@media (max-width: 1200px) {
		overflow: hidden;
		width: 100%;
		height: fit-content;
		position: relative;
		p {
			&:first-child {
				display: none;
			}
			padding: 0 15px 0 15px;
			&:last-child {
				padding-bottom: 10px;
				text-align: right;
			}
			&:nth-child(3) {
				text-align: right;
			}
		}
		a {
			font-size: 1.6rem;
		}
	}
	@media (min-width: 1200px) {
	}
`

const NormalSection = styled.div`
	position: relative;
	height: 45%;
	display: flex;
	align-items: center;
	padding-block: 25px;
	@media (max-width: 900px) {
		height: fit-content;
	}
`

const ReversedSection = styled.div`
	direction: rtl;
	position: relative;
	height: 45%;
	display: flex;
	align-items: center;
	padding-block: 25px;
	@media (max-width: 900px) {
		height: fit-content;
	}
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

export default ProjectContent
