import { FC } from 'react'
import styled from 'styled-components'
import ContactCard from './ContactCard'
import { IntroSection } from '../shared_styling/Styled'

const ContactContent: FC = () => {
	return (
		<>
			<BodyContainer>
				<IntroSection>
					<h1>Contact</h1>
					<hr />
				</IntroSection>
				<TextArea>
					<ContactCard />
				</TextArea>
			</BodyContainer>
		</>
	)
}

const BodyContainer = styled.div`
	position: relative;
	height: 100dvh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const TextArea = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	backdrop-filter: blur(2px);
	width: 60dvw;
	@media (max-width: 1200px) {
		width: 100%;
	}
`

export default ContactContent
