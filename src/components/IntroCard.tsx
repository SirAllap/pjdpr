import { FC } from 'react'
import { NormalText } from '../shared_styling/Styled'
import styled from 'styled-components'

const UserCard: FC = () => {
	return (
		<>
			<Card>
				<NormalText pos='justi'>
					Hello there! I'm a passionate{' '}
					<HighlightedText color='#8c56d2'>
						web developer
					</HighlightedText>{' '}
					dedicated to crafting digital experiences that bring genuine
					enjoyment to users. Customer satisfaction is at the heart of
					what I do.
				</NormalText>
				<br />
				<NormalText pos='justi'>
					As a Full-stack Developer at OXYGEN Coworking, I bring a
					meticulous approach to testing, prioritize accessibility,
					thrive in teamwork, and consistently produce high-quality
					code. My expertise lies in building scalable and secure
					applications usingself-motivated learner React.js,
					Express.js, Node.js, and MongoDB — skills acquired within
					the last two years.
				</NormalText>
				<br />
				<NormalText pos='justi'>
					I'm a{' '}
					<HighlightedText color='#8c56d2'>
						self-motivated learner
					</HighlightedText>{' '}
					and a strong team player, valuing collaboration,
					communication, and feedback. Actively contributing to
					challenging projects at OXYGEN Coworking, I contribute
					significantly to our team's success.
				</NormalText>
			</Card>
		</>
	)
}

const Card = styled.div`
	height: 50%;
	border-radius: 25px;
	display: flex;
	flex-direction: column;
	p {
		font-size: 1.5rem;
	}
	@media (max-width: 600px) {
		margin-top: 70px;
		padding: 20px;
		p {
			font-size: 1rem;
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
