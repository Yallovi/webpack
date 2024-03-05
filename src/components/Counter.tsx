import { useState} from "react";
import './index.scss'

export const Counter = () => {
	const [counter, setCounter] = useState(0)
	console.log(counter);
	return (
		<div className={'block'}>
			{counter}
			<button className={'btn'} onClick={() => setCounter(prev=> ++prev)}>click</button>
		</div>

	)
}