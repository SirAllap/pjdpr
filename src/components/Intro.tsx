import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import UserCard from './UserCard'
import { BigTitle, CTA, Links, NormalText } from '../shared_styling/Styled'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

const Intro: FC = () => {
	const [isDarkMode, setIsDarkMode] = useState(
		window.matchMedia('(prefers-color-scheme: dark)').matches
	)
	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode)
	}
	useEffect(() => {
		document.documentElement.classList.toggle('dark-mode', isDarkMode)
	}, [isDarkMode])

	return (
		<>
			<Container>
				<HeaderContainer>
					<LeftHeaderTextContainer>
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
						<Links href='#contactSection'>
							<NormalText textSize='subTitle'>CONTACT</NormalText>
						</Links>
						<Links href='#projectSection'>
							<NormalText textSize='subTitle'>WORK</NormalText>
						</Links>
					</LeftHeaderTextContainer>
					<BigTitle className='title-glow'>DPR</BigTitle>
					<CTA>Hit me up</CTA>
				</HeaderContainer>

				<IntroContainer>
					<UserCard />
				</IntroContainer>
			</Container>
		</>
	)
}

const Container = styled.div`
	height: 100vh;
`
const HeaderContainer = styled.header`
	position: sticky;
	height: 10%;
	margin: 0 auto;
	text-align: center;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`
const LeftHeaderTextContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	:first-child {
		margin-right: 10px;
	}
`
const IntroContainer = styled.div`
	height: 90%;
`

const DarkModeSwapper = styled.span`
	position: fixed;
	left: 20px;
	bottom: 20px;
	cursor: pointer;
`

export default Intro
