import styled from 'styled-components'

type BigTitleProps = {
	pos?: string
}
export const BigTitle = styled.h1<BigTitleProps>`
	text-align: ${(props) =>
		props.pos === 'mid'
			? 'center'
			: props.pos === 'right'
			? 'right'
			: 'left'};
	font-size: 4rem;
`
export const Links = styled.a``

type NormalTextProps = {
	pos?: string
	color?: string
	textSize?: string
}
export const NormalText = styled.p<NormalTextProps>`
	text-align: ${(props) =>
		props.pos === 'mid'
			? 'center'
			: props.pos === 'right'
			? 'right'
			: 'left'};
	font-size: ${(props) =>
		props.textSize === 'subTitle' ? '1.5rem' : '1rem'};
	border-bottom: ${(props) =>
		props.textSize === 'subTitle' ? '2px solid trasparent' : 'none'};
	padding: ${(props) => (props.textSize === 'subTitle' ? '10px' : 'none')};
	&:hover {
		border-bottom: ${(props) =>
			props.textSize === 'subTitle' ? '2px solid white' : 'none'};
	}
`

export const CTA = styled.button``
