import { useState} from "react";
import s from './index.module.scss';

export const Counter = () => {
	const [counter, setCounter] = useState(0)
	console.log(counter);
	return (
		<div className={s.block}>
			{counter}
			<button className={s.btn} onClick={() => setCounter(prev=> ++prev)}>click</button>
		</div>

	)
}