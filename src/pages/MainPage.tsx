import { FC } from 'react'
import { Link } from 'react-router-dom'

interface IMainPage {}

const MainPage: FC<IMainPage> = props => {
	const {} = props
	return <div className={'app'}>
		Hello MainPage
		
		<Link to={'/'}>MainPage</Link>
		<Link to={'counter'}>Counter</Link>

		</div>
}


export default MainPage