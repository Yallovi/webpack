import { useContext } from 'react'
import { Theme, ThemeContext } from '../Providers/ThemeProvider'

type UseThemeResult = {
	theme: Theme
	toggleTheme: () => void
}

export default function useTheme(): UseThemeResult {
	const {theme, setTheme} = useContext(ThemeContext)

	return {
		theme,
		toggleTheme: setTheme
	}

}