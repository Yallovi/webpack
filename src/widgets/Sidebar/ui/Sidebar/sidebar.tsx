import { FC, useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { Button } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames'

import s from './sidebar.module.scss'


export const Sidebar: FC = () => {
	const [collapsed,setCollapsed] = useState(false)

	const handleToggle = () => setCollapsed(prev => !prev)

	return (
		<div className={classNames(s.sidebar, {[s.collapsed]:collapsed})}>
			<Button onClick={handleToggle}>Toggle</Button>
			<div className={s.switchers}>
				<ThemeSwitcher />
			</div>
		</div>
	)
}
