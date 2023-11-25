import { FC } from 'react'
import styled from 'styled-components'
import { NormalText } from '../shared_styling/Styled'

const ContactContent: FC = () => {
	return (
		<>
			<BodyContainer id='contactSection'>
				<NormalText>Contact info</NormalText>
				{/* <FirstSection className='firstSection'>
				</FirstSection>
				<SecondSection className='secondSection'></SecondSection>
				<ThirdSection className='thirdSection'></ThirdSection>
				<FourthSection className='fourthSection'></FourthSection> */}
			</BodyContainer>
		</>
	)
}

const BodyContainer = styled.div`
	height: 100vh;
`
// const FirstSection = styled.div`
// 	height: 25%;
// `
// const SecondSection = styled.div`
// 	height: 25%;
// `
// const ThirdSection = styled.div`
// 	height: 25%;
// `
// const FourthSection = styled.div`
// 	height: 25%;
// `

export default ContactContent
