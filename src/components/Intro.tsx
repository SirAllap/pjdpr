import { FC } from 'react'
import styled from 'styled-components'
import UserCard from './UserCard'
import { BigTitle, CTA, Links, NormalText } from '../shared_styling/Styled'

const Intro: FC = () => {
	return (
		<>
			<Container>
				<HeaderContainer>
					<LeftHeaderTextContainer>
						<Links href='#contactSection'>
							<NormalText textSize='subTitle'>CONTACT</NormalText>
						</Links>
						<Links href='#projectSection'>
							<NormalText textSize='subTitle'>WORK</NormalText>
						</Links>
					</LeftHeaderTextContainer>
					<BigTitle className='titleGlow'>DPR</BigTitle>
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

export default Intro
