import { FC, Suspense, lazy } from 'react'
import { useRoutes, Routes } from 'react-router-dom'

import '../styles/index.scss'
import useTheme from '../hooks/useTheme'
import { classNames } from '../helpers/classNames/classNames'

const Counter = lazy(() => import("../components/Counter"));
const MainPage = lazy(() => import("./MainPage"))

interface IMainRouter {}

const MainRouter: FC<IMainRouter> = props => {
	
	const routes = useRoutes([
    {
      path: "/",
      element: <MainPage />
    },
    {
      path: "counter",
      element: <Counter />,
    },
  ]);

  const {theme, toggleTheme} = useTheme()
	return (
    <Suspense fallback={'Loading...'}>
      <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>toggleTheme</button>
        {routes}
      </div>
    </Suspense>
    )
}

export default MainRouter