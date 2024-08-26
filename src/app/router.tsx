import { FC, Suspense, lazy } from 'react'
import { useRoutes, Routes } from 'react-router-dom'
import useTheme from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames'

import 'app/styles/index.scss'

const MainPage = lazy(() => import("../pages/main/ui/MainPage"))

interface IRouter {}

const Router: FC<IRouter> = props => {
	
	const routes = useRoutes([
    {
      path: "/",
      element: <MainPage />
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

export default Router