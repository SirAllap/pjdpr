import styled from 'styled-components'

type BigTitleProps = {
	readonly pos?: string
	readonly toggled?: string
}
export const BigTitle = styled.h1<BigTitleProps>`
	text-align: ${(props) =>
		props.pos === 'mid'
			? 'center'
			: props.pos === 'right'
			? 'right'
			: 'left'};
	font-size: 5rem;
	color: ${(props) => (props.toggled === 'true' ? '#bead8e' : '#fff')};
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
			? '1.8rem'
			: '1rem'};
	color: ${(props) => (props.textsize === 'title' ? '#bead8e' : '#fff')};
	text-shadow: ${(props) =>
		props.textsize === 'title' ? '2px 5px 10px #272727' : 'none'};
	border-bottom: ${(props) =>
		props.textsize === 'subTitle' ? '2px solid trasparent' : 'none'};
	padding: ${(props) => (props.textsize === 'subTitle' ? '10px' : 'none')};
	&:hover {
		border-bottom: ${(props) =>
			props.textsize === 'subTitle' ? '2px solid white' : 'none'};
	}
`

type CTAProps = {
	type?: string
}

export const CTA = styled.button<CTAProps>`
	margin-left: ${(props) => (props.type === 'left' ? '15px' : null)};
	width: ${(props) => (props.type === 'left' ? 'fit-content' : null)};
	opacity: ${(props) => (props.type === 'right' ? '0' : null)};
	cursor: ${(props) => (props.type === 'right' ? '0' : null)};
	@media (max-width: 900px) {
		margin-left: 0px;
		margin-top: ${(props) => (props.type === 'left' ? '5px' : null)};
		display: ${(props) => (props.type === 'right' ? 'none' : null)};
	}
`

export const IntroSection = styled.div`
	height: 150px;
	width: 90%;
	margin: auto;
	display: flex;
	flex-direction: column;
	padding-top: 10%;
	h1 {
		margin-left: 2%;
		color: #fff;
		font-size: 4vw;
		z-index: 2;
	}
	hr {
		background-color: #8c56d299;
		width: 20%;
		height: 25px;
		border: none;
		margin-top: -30px;
		box-shadow: 5px 10px 30px #8c56d299;
	}
	@media (max-width: 900px) {
		height: 100px;
		justify-content: center;
		padding-top: 25%;
		h1 {
			font-size: 15vw;
		}
		hr {
			background-color: #8c56d299;
			width: 70%;
			height: 25px;
			border: none;
			margin-top: -30px;
			box-shadow: 5px 10px 30px #8c56d299;
		}
	}
`
