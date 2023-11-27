import { FC } from 'react'
import styled from 'styled-components'
import UserCard from './UserCard'

const AboutMeContent: FC = () => {
	return (
		<>
			<BodyContainer id='aboutMeSection'>
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
