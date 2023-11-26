import { FC } from 'react'
import styled from 'styled-components'
import { NormalText } from '../shared_styling/Styled'
import UserCard from './UserCard'

const AboutMeContent: FC = () => {
	return (
		<>
			<BodyContainer id='aboutMeSection'>
				<NormalText>Contact info</NormalText>
				<UserCard />
			</BodyContainer>
		</>
	)
}

const BodyContainer = styled.div`
	background-color: #ffc300;
	height: 100vh;
`

export default AboutMeContent
