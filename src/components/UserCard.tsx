import { FC } from 'react'
import { CTA, Links, NormalText } from '../shared_styling/Styled'
import styled from 'styled-components'

const UserCard: FC = () => {
	return (
		<>
			<CardContainer>
				<Card>
					<Links href='https://github.com/SirAllap' target='_blank'>
						<NormalText pos='mid'>GitHub</NormalText>
					</Links>
					<NormalText pos='mid'>
						I'm all the intro container
					</NormalText>
					<Links href='#superSection'>
						<CTA>Projects!</CTA>
					</Links>
				</Card>
			</CardContainer>
		</>
	)
}

const CardContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	width: 500px;
	height: 500px;
	border: 1px solid white;
	border-radius: 10px;
	text-align: center;
`

export default UserCard
