import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { BigTitle, CTA, Links } from '../shared_styling/Styled'
import UserCard from './IntroCard'
import { Sling as Hamburger } from 'hamburger-react'

const Intro: FC = () => {
	const [scrollY, setScrollY] = useState(0)
	const [shadowed, setShadowed] = useState('no')
	const [isOpen, setOpen] = useState(false)

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
				<CTAGH toggled={isOpen.toString()}>GitHub</CTAGH>
			</Links>
			<Container>
				<HeaderContainer shadow={shadowed}>
					<LeftHeaderTextContainer>
						<Links href='#projectSection'>
							<CTA>WORK</CTA>
						</Links>
						<Links href='#experienceSection'>
							<CTA type={'left'}>Experience</CTA>
						</Links>
					</LeftHeaderTextContainer>
					<Links href='#'>
						<BigTitle className='title-glow'>DPR</BigTitle>
					</Links>
					<RightHeaderTextContainer>
						<Links>
							<CTA type={'right'}>XXXXXXXXXX</CTA>
						</Links>
						<Links href='#contactSection'>
							<CTA>Contact</CTA>
						</Links>
					</RightHeaderTextContainer>
				</HeaderContainer>
				<MobileMenu toggled={isOpen.toString()}>
					<MobileMenuItemsContainer>
						<MobileMenuItem
							href='#projectSection'
							onClick={() => {
								setOpen(false)
							}}
						>
							Work
						</MobileMenuItem>
						<MobileMenuItem
							href='#experienceSection'
							onClick={() => {
								setOpen(false)
							}}
						>
							Experience
						</MobileMenuItem>
						<MobileMenuItem
							href='#contactSection'
							onClick={() => {
								setOpen(false)
							}}
						>
							Contact
						</MobileMenuItem>
					</MobileMenuItemsContainer>
				</MobileMenu>
				<MobileHeaderContainer
					shadow={shadowed}
					toggled={isOpen.toString()}
				>
					<BurgerIcon>
						<Hamburger
							toggled={isOpen}
							toggle={setOpen}
							color={isOpen ? '#bead8e' : '#fff'}
						/>
					</BurgerIcon>
					<MobileLogo>
						<Links href='#'>
							<BigTitle
								className='title-glow'
								toggled={isOpen.toString()}
							>
								DPR
							</BigTitle>
						</Links>
					</MobileLogo>
				</MobileHeaderContainer>
				<TextArea>
					<IntroContainer>Hi, I'm David</IntroContainer>
					<IntroNextContainer>
						FullStack Web Developer
					</IntroNextContainer>
					<br />
					<br />
					<UserCard />
				</TextArea>
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
	@media (max-width: 900px) {
		display: none;
	}
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
	width: ${(props) => (props.shadow === 'yes' ? '60dvw' : '80dvw')};
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
		border-radius: 100px;

		padding-block: ${(props) => (props.shadow === 'yes' ? '0.5rem' : '0')};
		padding-inline: ${(props) => (props.shadow === 'yes' ? '2rem' : '0')};
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

interface MobileHeaderContainerProps {
	readonly shadow: string
	readonly toggled: string
}

const MobileHeaderContainer = styled.header<MobileHeaderContainerProps>`
	@media (min-width: 900px) {
		display: none;
	}
	background: ${(props) =>
		props.shadow === 'yes' && props.toggled === 'false'
			? '#272727eb'
			: 'transparent'};
	box-shadow: ${(props) =>
		props.shadow === 'yes' && props.toggled === 'false'
			? '0 4px 30px rgba(0, 0, 0, 0.1)'
			: 'none'};
	backdrop-filter: ${(props) =>
		props.shadow === 'yes' && props.toggled === 'false'
			? 'blur(7px)'
			: 'blur(0px)'};
	height: 130px;
	display: flex;
	justify-content: center;
	z-index: 99;
	transition: 0.5s;
	position: fixed;
	top: 0%;
	width: 100dvw;
	@media (max-width: 600px) {
		height: 100px;
	}
`

const MobileLogo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const BurgerIcon = styled.div`
	width: 50px;
	height: 50px;
	position: absolute;
	top: 50%;
	left: 7%;
	transform: translate(-50%, -50%);
`

interface MobileMenuProps {
	readonly toggled: string
}

const MobileMenu = styled.div<MobileMenuProps>`
	position: fixed;
	left: 0;
	top: 0;
	transform: ${(props) =>
		props.toggled === 'true'
			? 'translate3d(0vw, 0, 0)'
			: 'translate3d(-100vw, 0, 0)'};
	transition: transform 0.5s cubic-bezier(0, 0.1, 0, 1);
	width: 100vw;
	height: 100vh;
	background: #272727eb;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	z-index: 99;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (min-width: 900px) {
		display: none;
	}
`
const MobileMenuItemsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	a {
		button {
			font-size: 2rem;
		}
	}
	@media (max-width: 900px) {
		display: flex;
		flex-direction: column;
	}
	@media (max-width: 600px) {
		a {
			button {
				font-size: 1.5rem;
			}
		}
	}
`
const MobileMenuItem = styled.a`
	cursor: pointer;
	font-size: 2.5rem;
	color: #bead8e;
	letter-spacing: 2px;
	padding-block: 20px;
`

const LeftHeaderTextContainer = styled.div`
	a {
		button {
			font-size: 2rem;
		}
	}
	@media (max-width: 900px) {
		display: flex;
		flex-direction: column;
	}
`

const RightHeaderTextContainer = styled.div`
	a {
		button {
			font-size: 2rem;
		}
	}
`
interface CTAGHProps {
	readonly toggled: string
}

const CTAGH = styled.button<CTAGHProps>`
	p {
		font-size: 1.5rem;
	}
	z-index: 100;
	position: fixed;
	bottom: ${(props) => (props.toggled === 'true' ? '50px' : '30px')};
	right: ${(props) => (props.toggled === 'true' ? '50px' : '30px')};
	background-color: ${(props) =>
		props.toggled === 'true' ? '#bead8e' : ' #8c56d2'};
	border-color: ${(props) =>
		props.toggled === 'true' ? '#bead8e' : ' #8c56d2'};
	color: ${(props) => (props.toggled === 'true' ? '#000' : '#fff')};
	scale: ${(props) => (props.toggled === 'true' ? '1.5' : 'initial')};
	&:hover {
		scale: 1.05;
	}
`

export default Intro
