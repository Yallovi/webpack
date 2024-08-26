import {FC} from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import Router from './router'



const App: FC = props => {

  return (
  <BrowserRouter>
    <ThemeProvider>
      <Router />
      </ThemeProvider>
  </BrowserRouter>)

}

export default App
