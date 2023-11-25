import { FC } from 'react'
import styled from 'styled-components'
import { NormalText } from '../shared_styling/Styled'

const ProjectContent: FC = () => {
	return (
		<>
			<BodyContainer id='projectSection'>
				<FirstSection className='firstSection'>
					<NormalText>
						I'm a container where all the projects will be
					</NormalText>
				</FirstSection>
				<SecondSection className='secondSection'></SecondSection>
				<ThirdSection className='thirdSection'></ThirdSection>
				<FourthSection className='fourthSection'></FourthSection>
			</BodyContainer>
		</>
	)
}

const BodyContainer = styled.div`
	height: 100vh;
`
const FirstSection = styled.div`
	height: 25%;
`
const SecondSection = styled.div`
	height: 25%;
`
const ThirdSection = styled.div`
	height: 25%;
`
const FourthSection = styled.div`
	height: 25%;
`

export default ProjectContent
