import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
// import UserCard from './UserCard'
import { BigTitle, CTA, Links } from '../shared_styling/Styled'
// import imageMe from '../assets/me1.png'
import UserCard from './IntroCard'

const Intro: FC = () => {
	const [scrollY, setScrollY] = useState(0)
	const [shadowed, setShadowed] = useState('no')
	function logit() {
		setScrollY(window.scrollY)
	}

	useEffect(() => {
		function watchScroll() {
			window.addEventListener('scroll', logit)
		}
		watchScroll()
		scrollY >= 100 ? setShadowed('yes') : setShadowed('no')
		return () => {
			window.removeEventListener('scroll', logit)
		}
	}, [scrollY])
	return (
		<>
			<Links href='https://github.com/SirAllap' target='_blank'>
				<CTAGH>GitHub</CTAGH>
			</Links>
			<Container>
				<HeaderContainer shadow={shadowed}>
					<LeftHeaderTextContainer>
						<Links href='#projectSection'>
							<CTA>WORK</CTA>
						</Links>
						<Links href='#experienceContent'>
							<CTA type={'true'}>Experience</CTA>
						</Links>
					</LeftHeaderTextContainer>
					<Links href='#'>
						<BigTitle className='title-glow'>DPR</BigTitle>
					</Links>
					<Divider></Divider>
					<RightHeaderTextContainer>
						<Links href='#contactSection'>
							<CTA>Contact</CTA>
						</Links>
					</RightHeaderTextContainer>
				</HeaderContainer>
				<TextArea>
					<IntroContainer>Hi, I'm David</IntroContainer>
					<IntroNextContainer>
						FullStack Web Developer
					</IntroNextContainer>
					<br />
					<br />
					<UserCard />
				</TextArea>
				<Arrow href='#projectSection' />
			</Container>
		</>
	)
}

const Container = styled.div`
	position: relative;
	height: 100dvh;
	display: flex;
	align-items: center;
	flex-direction: row;
	@media (min-width: 600px) {
		justify-content: center;
	}
`

const TextArea = styled.div`
	width: 60dvw;
	height: fit-content;
	backdrop-filter: blur(2px);
	@media (max-width: 1500px) {
		width: 80%;
	}
	@media (max-width: 600px) {
		width: 100%;
		margin-top: 10%;
	}
`

const IntroContainer = styled.div`
	text-align: center;
	font-size: 4.5dvw;
	text-transform: uppercase;
	transition: 0.5s;
	@media (max-width: 600px) {
		font-size: 2rem;
	}
	hr {
		margin: auto;
		width: 70%;
		@media (min-width: 1000px) {
			width: 40%;
		}
	}
`

const IntroNextContainer = styled.div`
	text-align: center;
	font-size: 4.5dvw;
	transition: 0.5s;
	text-transform: uppercase;
	animation: glitch 900ms infinite;
	@keyframes glitch {
		0% {
			text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
				0.025em 0.04em 0 #8c56d2;
		}
		15% {
			text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
				0.025em 0.04em 0 #8c56d2;
		}
		16% {
			text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
				-0.05em -0.05em 0 #8c56d2;
		}
		49% {
			text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
				-0.05em -0.05em 0 #8c56d2;
		}
		50% {
			text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
				0 -0.04em 0 #8c56d2;
		}
		99% {
			text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
				0 -0.04em 0 #8c56d2;
		}
		100% {
			text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
				-0.04em -0.025em 0 #8c56d2;
		}
	}
	@media (max-width: 600px) {
		font-size: 3rem;
	}
`

interface HeaderContainerProps {
	readonly shadow: string
}

const HeaderContainer = styled.header<HeaderContainerProps>`
	z-index: 99;
	transition: 0.5s;
	position: fixed;
	top: 5%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: ${(props) => (props.shadow === 'yes' ? '50dvw' : '70dvw')};
	padding: ${(props) => (props.shadow === 'yes' ? '1rem' : '0')};
	align-items: center;
	margin-top: ${(props) => (props.shadow === 'yes' ? '40px' : '0')};
	background: ${(props) =>
		props.shadow === 'yes' ? 'rgba(255, 255, 255, 0.154)' : 'transparent'};
	border-radius: 70px 20px 70px 20px;
	box-shadow: ${(props) =>
		props.shadow === 'yes' ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'};
	backdrop-filter: ${(props) =>
		props.shadow === 'yes' ? 'blur(7px)' : 'blur(0px)'};
	p {
		color: #8c56d2;
	}
	h1 {
		color: ${(props) => (props.shadow === 'yes' ? '#8c56d2' : '#fff')};
	}
	button:hover {
		background-color: ${(props) =>
			props.shadow === 'yes' ? 'transparent' : '#8c56d2'};
		color: ${(props) => (props.shadow === 'yes' ? '#8c56d2' : '#373737')};
	}
	@media (max-width: 1500px) {
		width: 85dvw;
	}
	@media (max-width: 1200px) {
		border-radius: 55px 20px 55px 20px;
		padding: ${(props) => (props.shadow === 'yes' ? '0.5rem' : '0')};
	}
	@media (max-width: 600px) {
		width: 95dvw;
		margin-top: 0;
		background: none;
		border-radius: none;
		box-shadow: none;
		backdrop-filter: none;
		button {
			background-color: ${(props) =>
				props.shadow === 'yes' ? '#8c56d2' : 'transparent'};
			color: ${(props) =>
				props.shadow === 'yes' ? '#373737' : '#8c56d2'};
			:hover {
				background-color: ${(props) =>
					props.shadow === 'yes' ? '#8c56d2' : 'transparent'};
				color: ${(props) =>
					props.shadow === 'yes' ? '#373737' : '#8c56d2'};
			}
		}
	}
`

const LeftHeaderTextContainer = styled.div`
	a {
		button {
			font-size: 2rem;
		}
	}
`

const RightHeaderTextContainer = styled.div`
	a {
		button {
			font-size: 2rem;
		}
	}
`

const Divider = styled.div`
	width: 1px;
	height: 100%;
	background-color: #8c56d2;
	margin: 0 10px;
	@media (max-width: 600px) {
		display: none;
	}
`

const Arrow = styled.a`
	position: absolute;
	bottom: 5%;
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

const CTAGH = styled.button`
	p {
		font-size: 1.5rem;
	}
	z-index: 2;
	position: fixed;
	bottom: 30px;
	right: 30px;
	background-color: #8c56d2;
	color: #fff;
	&:hover {
		scale: 1.05;
	}
	@media (max-width: 600px) {
		bottom: 5px;
		right: 6px;
	}
`

export default Intro
