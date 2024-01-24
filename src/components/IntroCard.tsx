import { FC } from 'react'
import { NormalText } from '../shared_styling/Styled'
import styled from 'styled-components'

const UserCard: FC = () => {
	return (
		<>
			<Card>
				<NormalText pos='justi'>
					Hello there! I'm a{' '}
					<HighlightedText color='#8c56d2'>
						web developer
					</HighlightedText>{' '}
					with a passion for crafting seamless, user-friendly websites
					and apps that leave a lasting impression. I aim not only to
					meet but also to exceed user expectations, ensuring they
					keep coming back for more.
				</NormalText>

				<NormalText pos='justi'>
					I'm a{' '}
					<HighlightedText color='#8c56d2'>
						self-motivated learner
					</HighlightedText>{' '}
					and a strong team player, valuing collaboration,
					communication, and feedback. Actively contributing to
					challenging projects.
				</NormalText>
			</Card>
		</>
	)
}

const Card = styled.div`
	p {
		font-size: 1.5rem;
	}
	@media (max-width: 600px) {
		padding: 20px;
		p {
			font-size: 1rem;
		}
	}
	@media (max-width: 400px) {
		padding: 20px;
		p {
			font-size: 0.8rem;
		}
	}
`

interface HighlightedTextProps {
	readonly color: string
}

const HighlightedText = styled.span<HighlightedTextProps>`
	color: ${(props) => props.color};
`

export default UserCard
