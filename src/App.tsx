import {FC} from 'react'
import {Counter} from "./components/Counter";
import './index.scss'

const App: FC = props => {
  const {} = props

  return <div className={'app'}>
    App
    <Counter />
  </div>

}

export default App
