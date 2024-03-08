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
	font-size: 5rem;
	@media (max-width: 600px) {
		font-size: 3rem;
	}
`
export const Links = styled.a`
	color: #bead8e;
	font-size: 2rem;
	&:hover {
		color: #ceacf9;
	}
	@media (max-width: 600px) {
		font-size: 1rem;
	}
`

export const SmallLinks = styled.a`
	color: #bead8e;
	&:hover {
		color: #ceacf9;
	}
	@media (max-width: 600px) {
		font-size: 1rem;
	}
`

export const PrivateLinks = styled.a`
	color: #ceacf9;
	font-size: 2rem;
	cursor: not-allowed;
	&:hover {
		color: #ceacf9;
	}
	@media (max-width: 600px) {
		font-size: 1rem;
	}
`

type NormalTextProps = {
	pos?: string
	color?: string
	textsize?: string
	type?: string
}
export const NormalText = styled.p<NormalTextProps>`
	text-align: ${(props) =>
		props.pos === 'mid'
			? 'center'
			: props.pos === 'right'
			? 'right'
			: props.pos === 'justi'
			? 'justify'
			: 'left'};
	font-size: ${(props) =>
		props.textsize === 'subTitle'
			? '1.5rem'
			: props.textsize === 'title'
			? '1.5rem'
			: '1rem'};
	border-bottom: ${(props) =>
		props.textsize === 'subTitle' ? '2px solid trasparent' : 'none'};
	padding: ${(props) => (props.textsize === 'subTitle' ? '10px' : 'none')};
	&:hover {
		border-bottom: ${(props) =>
			props.textsize === 'subTitle' ? '2px solid white' : 'none'};
	}
`

type BTN = {
	type?: string
}

export const CTA = styled.button<BTN>`
	margin-left: ${(props) => (props.type === 'left' ? '15px' : null)};
	width: ${(props) => (props.type === 'left' ? 'fit-content' : null)};
	opacity: ${(props) => (props.type === 'right' ? '0' : null)};
	cursor: ${(props) => (props.type === 'right' ? '0' : null)};
	@media (max-width: 1200px) {
		margin-left: 0px;
		margin-top: ${(props) => (props.type === 'left' ? '5px' : null)};
		display: ${(props) => (props.type === 'right' ? 'none' : null)};
	}
`
