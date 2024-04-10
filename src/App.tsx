import {FC} from 'react'
import { BrowserRouter } from 'react-router-dom'

import MainRouter from './pages'

const App: FC = props => {

  return (
  <BrowserRouter>
      <MainRouter />
  </BrowserRouter>)

}

export default App
