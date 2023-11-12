import { FC } from 'react'
import { Links, NormalText } from '../shared_styling/Styled'

const UserCard: FC = () => {
	return (
		<>
			<NormalText>I'm all the intro container</NormalText>
			<Links href='#superSection'>
				<button>Projects!</button>
			</Links>
		</>
	)
}

export default UserCard
