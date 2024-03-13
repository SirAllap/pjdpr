import { FC } from 'react'
import styled from 'styled-components'
import ContactCard from './ContactCard'

const ContactContent: FC = () => {
	return (
		<>
			<BodyContainer>
				<IntroSection />
				<TextArea>
					<ContactCard />
				</TextArea>
			</BodyContainer>
		</>
	)
}

const BodyContainer = styled.div`
	height: 100dvh;
	display: flex;
	flex-direction: row;
	justify-content: center;
`

const TextArea = styled.div`
	backdrop-filter: blur(2px);
	width: 60dvw;
	padding-top: 15dvh;
	@media (max-width: 1200px) {
		width: 100%;
	}
`

const IntroSection = styled.div`
	height: 150px;
	@media (max-width: 600px) {
		height: 100px;
	}
`

export default ContactContent
