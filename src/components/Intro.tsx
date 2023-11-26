import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
// import UserCard from './UserCard'
import { BigTitle, CTA, Links, NormalText } from '../shared_styling/Styled'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import imageMe from '../assets/me1.png'

const Intro: FC = () => {
	const [scrollY, setScrollY] = useState(0)
	const [shadowed, setShadowed] = useState(false)
	const [isDarkMode, setIsDarkMode] = useState(
		window.matchMedia('(prefers-color-scheme: dark)').matches
	)
	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode)
	}
	function logit() {
		setScrollY(window.scrollY)
	}
	useEffect(() => {
		document.documentElement.classList.toggle('dark-mode', isDarkMode)
		function watchScroll() {
			window.addEventListener('scroll', logit)
		}
		watchScroll()
		scrollY >= 100 ? setShadowed(true) : setShadowed(false)
		return () => {
			window.removeEventListener('scroll', logit)
		}
	}, [isDarkMode, scrollY])
	return (
		<>
			<DarkModeSwapper>
				<DarkModeSwitch
					style={{}}
					checked={isDarkMode}
					onChange={toggleDarkMode}
					size={70}
					moonColor={'white'}
					sunColor={'white'}
				/>
			</DarkModeSwapper>
			<Container>
				<HeaderContainer shadow={shadowed}>
					<LeftHeaderTextContainer>
						<Links href='#projectSection'>
							<NormalText textSize='subTitle'>WORK</NormalText>
						</Links>
						<Links href='#contactSection'>
							<NormalText textSize='subTitle'>CONTACT</NormalText>
						</Links>
					</LeftHeaderTextContainer>
					<Links href='#'>
						<BigTitle className='title-glow'>DPR</BigTitle>
					</Links>
					<RightHeaderTextContainer>
						<CTA>Hit me up</CTA>
					</RightHeaderTextContainer>
				</HeaderContainer>
				<MePicture>
					<IntroContainer>Hi. I'm David.</IntroContainer>
					<IntroNextContainer>A Developer.</IntroNextContainer>
					<Arrow href='#aboutMeSection'>arrowdown</Arrow>
				</MePicture>
			</Container>
		</>
	)
}

const Container = styled.div`
	position: relative;
	height: 100vh;
`

const IntroContainer = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	font-size: 7vw;
	width: 62%;
`
const IntroNextContainer = styled.div`
	position: relative;
	left: 50%;
	top: 62%;
	transform: translate(-50%, -50%);
	text-align: center;
	font-size: 7vw;
	width: 62%;
	transition: 0.5s;
	&:hover {
		transition: 0.5s;
		font-weight: bold;
		text-transform: uppercase;
		text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
			0.025em 0.04em 0 #fffc00;
		animation: glitch 1000ms infinite;
		@keyframes glitch {
			0% {
				text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
					0.025em 0.04em 0 #fffc00;
			}
			15% {
				text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
					0.025em 0.04em 0 #fffc00;
			}
			16% {
				text-shadow: -0.05em -0.025em 0 #00fffc,
					0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00;
			}
			49% {
				text-shadow: -0.05em -0.025em 0 #00fffc,
					0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00;
			}
			50% {
				text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
					0 -0.04em 0 #fffc00;
			}
			99% {
				text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
					0 -0.04em 0 #fffc00;
			}
			100% {
				text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
					-0.04em -0.025em 0 #fffc00;
			}
		}
	}
`

const MePicture = styled.div`
	background-image: url(${imageMe});
	background-repeat: no-repeat;
	background-size: 35vw;
	background-position-y: 105%;
	background-position-x: -2%;
	height: 100vh;
	filter: brightness(60%);
	transition: 0.5s;
	&:hover {
		filter: brightness(100%);
		background-position-y: 100%;
		background-position-x: 0%;
	}
`
interface HeaderContainerProps {
	readonly shadow: boolean
}

const HeaderContainer = styled.header<HeaderContainerProps>`
	z-index: 99;
	transition: 0.5s;
	width: 1000px;
	position: fixed;
	top: 10%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 20px 0 20px 0;
	text-align: center;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	background: ${(props) =>
		props.shadow ? 'rgba(0, 0, 0, 0.167)' : 'transparent'};
	border-radius: 80px;
	box-shadow: ${(props) =>
		props.shadow ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'};
	backdrop-filter: ${(props) => (props.shadow ? 'blur(7px)' : 'blur(0px)')};
`

const LeftHeaderTextContainer = styled.div`
	display: flex;
	:first-child {
		margin-right: 10px;
	}
	margin-right: 20%;
`
const RightHeaderTextContainer = styled.div`
	margin-left: 20%;
`

const DarkModeSwapper = styled.span`
	z-index: 99;
	position: fixed;
	right: 20px;
	bottom: 20px;
	cursor: pointer;
`

const Arrow = styled.a`
	z-index: 99;
	position: fixed;
	left: 50%;
	bottom: 10%;
	transform: translate(-50%, -50%);
	cursor: pointer;
`

export default Intro
