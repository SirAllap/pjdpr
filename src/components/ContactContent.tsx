import { FC } from 'react'
import styled from 'styled-components'
import ContactCard from './ContactCard'

const ContactContent: FC = () => {
	return (
		<>
			<BodyContainer id='contactSection'>
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
	align-items: center;
	flex-direction: column;
`

const TextArea = styled.div`
	backdrop-filter: blur(2px);
	width: 60dvw;
	padding-top: 10dvh;
	@media (max-width: 1200px) {
		padding-top: 0;
		width: 100%;
	}
`

const IntroSection = styled.div`
	height: 150px;
`

export default ContactContent
