import { FC } from 'react'
import { Links, NormalText } from '../shared_styling/Styled'
import styled from 'styled-components'

const ContactCard: FC = () => {
	return (
		<>
			<Card>
				<NormalText>🚀 Goal:</NormalText>
				<br />
				<NormalText>
					My goal is continuous growth as a web developer, leveraging
					my skills and experiences to make a positive difference. If
					you're looking for a passionate and dedicated web developer
					to bring your projects to life,{' '}
					<Links href='mailto:david.pr.developer@gmail.com?subject=DPR portfolio contact'>
						<HighlightedText color='#8c56d2'>
							let's connect!
						</HighlightedText>{' '}
					</Links>
					💻
				</NormalText>
				<br />
				<br />
				<NormalText>👨‍💻 Contact Info:</NormalText>
				<br />
				<NormalText>Telephone: +34 638492817</NormalText>
				<NormalText>
					Email:{' '}
					<Links href='mailto:david.pr.developer@gmail.com?subject=DPR portfolio contact'>
						david.pr.developer@gmail.com
					</Links>
				</NormalText>
				<NormalText>
					Github:{' '}
					<Links href='https://github.com/SirAllap'>SirAllap</Links>
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
		text-align: justify;
		font-size: 2rem;
	}
	padding: 20px;
	@media (max-width: 600px) {
		p {
			text-align: justify;
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

export default ContactCard
