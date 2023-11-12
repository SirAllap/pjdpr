import { FC } from 'react'
import styled from 'styled-components'
import { NormalText } from '../shared_styling/Styled'

const BodyContent: FC = () => {
	return (
		<>
			<BodyContainer id='superSection'>
				<FirstSection>
					<NormalText>
						I'm a container where all the projects will be
					</NormalText>
				</FirstSection>
				<SecondSection></SecondSection>
				<ThirdSection></ThirdSection>
				<FourthSection></FourthSection>
			</BodyContainer>
		</>
	)
}

const BodyContainer = styled.div`
	height: 100vh;
`
const FirstSection = styled.div`
	height: 25%;
	background-color: #dd7373;
`
const SecondSection = styled.div`
	height: 25%;
	background-color: #3b3561;
`
const ThirdSection = styled.div`
	height: 25%;
	background-color: #51a3a3;
`
const FourthSection = styled.div`
	height: 25%;
	background-color: #ead94c;
`

export default BodyContent
