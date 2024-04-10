import { useState} from "react";
import s from './index.module.scss';
import { Link } from 'react-router-dom'

const Counter = () => {
	const [counter, setCounter] = useState(0)
	console.log(counter);
	return (
		<div className={s.block}>
			<Link to={'/'}>Main</Link>
			Hello counter
			{counter}
			<button className={s.btn} onClick={() => setCounter(prev=> ++prev)}>click</button>
		</div>

	)
}

export default Counter;