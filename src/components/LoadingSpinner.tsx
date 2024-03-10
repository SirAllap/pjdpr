import { FC } from 'react'
import { HashLoader } from 'react-spinners'
import styled from 'styled-components'

const LoadingSpinner: FC = () => {
	return (
		<>
			<Container>
				<HashLoader color='#bead8e' size={100} />
			</Container>
		</>
	)
}

export default LoadingSpinner

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`
