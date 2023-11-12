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
`
export const Links = styled.a``

type NormalTextProps = {
	pos?: string
	color?: string
}
export const NormalText = styled.p<NormalTextProps>`
	font-size: 1.5rem;
	text-align: ${(props) => (props.pos === 'right' ? 'right' : 'left')};
	color: ${(props) => (props.color === 'white' ? '#fff' : '#000')};
`
