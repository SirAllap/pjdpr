import { FC } from 'react'
import { CTA, Links, NormalText } from '../shared_styling/Styled'
import styled from 'styled-components'
import cvESP from '../../src/assets/CV/David_PR_ESP.pdf'
import cvENG from '../../src/assets/CV/David_PR_ENG.pdf'

const ContactCard: FC = () => {
	return (
		<>
			<Card>
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
				<NormalText>👨‍💻 Contact:</NormalText>
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
				<NormalText>
					LinkedIn:{' '}
					<Links href='https://www.linkedin.com/in/davidpallaresrobaina/'>
						HERE!
					</Links>
				</NormalText>
				<Links href={cvESP} download='David_PR_ESP.pdf'>
					<CTA>🇪🇸 CV ESPAÑOL 🇪🇸</CTA>
				</Links>
				<Links href={cvENG} download='David_PR_ENG.pdf'>
					<CTA>🇬🇧 CV ENGLISH 🇬🇧</CTA>
				</Links>
			</Card>
		</>
	)
}

const Card = styled.div`
	height: 50%;
	border-radius: 25px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	p {
		text-align: justify;
		font-size: 2rem;
	}
	@media (max-width: 600px) {
		p {
			text-align: justify;
			font-size: 1rem;
			margin-bottom: 2px;
		}
	}
	a {
		text-align: center;
		margin: 20px 0 20px 0;
	}
	button {
		width: fit-content;
		background-color: #8c56d2;
		color: white;
	}
	button:hover {
		background-color: transparent;
		color: #8c56d2;
	}
`

interface HighlightedTextProps {
	readonly color: string
}

const HighlightedText = styled.span<HighlightedTextProps>`
	color: ${(props) => props.color};
`

export default ContactCard
