import { FC, ReactNode, createContext, useMemo, useState } from 'react'

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark'
}

export interface ThemContextProps { 
	theme: Theme,
	setTheme: () => void;
}

export const ThemeContext = createContext<ThemContextProps>({
	theme: Theme.LIGHT,
	setTheme: () => null
})

const LOCAL_STORAGE_KEY_THEME = 'theme'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_KEY_THEME) as Theme || Theme.LIGHT

const ThemeProvider: FC<{children: ReactNode}> = ({children}) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme)

	const handleToggleTheme = () => {
		const themeValue = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
		setTheme(themeValue)

		localStorage.setItem(LOCAL_STORAGE_KEY_THEME, themeValue)
	}

	const value = useMemo(() => {
		return {
			theme,
			setTheme: handleToggleTheme
		}
	}, [theme]) 

	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider;