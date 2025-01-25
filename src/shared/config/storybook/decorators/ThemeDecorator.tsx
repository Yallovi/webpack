import { Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import {Story} from '../types/index'


export const ThemeDecorator = (theme: Theme) => (Story: Story) => {
	return (
		<div className={`app ${theme}`}>
			<Story/>
		</div>
	)
}