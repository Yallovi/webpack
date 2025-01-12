import {FC} from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/routes'
import { Navbar } from 'widgets/Navbar'
import { classNames } from 'shared/lib/classNames'



const App: FC = props => {
const {theme} = useTheme()
  return (
  
      <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <AppRouter />
        </div>
      )

}

export default App
