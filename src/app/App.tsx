import {FC} from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/routes'
import { Navbar } from 'widgets/Navbar'
import { classNames } from 'shared/lib/classNames'



const App: FC = props => {
const {theme, toggleTheme} = useTheme()
  return (
  
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <AppRouter />
        <button onClick={toggleTheme}>toggleTheme</button>
        </div>
      )

}

export default App
