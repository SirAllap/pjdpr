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
	display: grid;
	place-items: center;
`

const Card = styled.div`
	display: grid;
	place-items: center;
	margin: 0 auto;
	max-width: 500px;
	height: 500px;
	border: 1px solid white;
	border-radius: 10px;
	text-align: center;
	padding: 50px;
	background-color: #5402be;
`

export default UserCard
