import { FC } from 'react'
import styled from 'styled-components'

const AboutMeContent: FC = () => {
	return (
		<>
			<BodyContainer id='aboutMeSection'></BodyContainer>
		</>
	)
}

const BodyContainer = styled.div`
	background-color: #ffc300;
	height: 100vh;
`

export default AboutMeContent
