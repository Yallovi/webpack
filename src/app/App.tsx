import {FC} from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/routes'



const App: FC = props => {

  return (
  <BrowserRouter>
    <ThemeProvider>
      <AppRouter />
      </ThemeProvider>
  </BrowserRouter>)

}

export default App
