import { FC } from 'react'
import styled from 'styled-components'

const ExperienceContent: FC = () => {
	return (
		<>
			<BodyContainer id='experienceContent'></BodyContainer>
		</>
	)
}

const BodyContainer = styled.div`
	overflow-y: scroll;
	&::-webkit-scrollbar {
		width: 15px;
	}
	&::-webkit-scrollbar-track {
		background: #8c56d22d;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		border-radius: 5px;
	}
	&::-webkit-scrollbar-thumb {
		background: #8c56d2de;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		border-radius: 5px;
	}
	height: 100vh;
`

export default ExperienceContent
