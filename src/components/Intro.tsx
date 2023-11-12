import { FC } from 'react'
import styled from 'styled-components'
import UserCard from './UserCard'
import { BigTitle, Links, NormalText } from '../shared_styling/Styled'

const Intro: FC = () => {
	return (
		<>
			<Container>
				<HeaderContainer>
					<BigTitle pos='mid'>Hi, my name is David Pallarés</BigTitle>
					<Links href='https://github.com/SirAllap' target='_blank'>
						<NormalText pos='right'>GitHub</NormalText>
					</Links>
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
	background-color: #5402be;
`
const HeaderContainer = styled.header`
	position: sticky;
	height: 10%;
	margin: 0 auto;
	text-align: left;
`
const IntroContainer = styled.div`
	border: 1px solid red;
	height: 90%;
`

export default Intro
