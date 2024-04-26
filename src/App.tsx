import {FC} from 'react'
import { BrowserRouter } from 'react-router-dom'

import MainRouter from './pages'
import ThemeProvider from './Providers/ThemeProvider'


const App: FC = props => {

  return (
  <BrowserRouter>
    <ThemeProvider>
      <MainRouter />
      </ThemeProvider>
  </BrowserRouter>)

}

export default App
