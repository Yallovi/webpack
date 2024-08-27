import { FC, Suspense, lazy } from 'react'
import { useRoutes, Routes } from 'react-router-dom'
import useTheme from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames'

import 'app/styles/index.scss'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

// const MainPage = lazy(() => import("../pages/main/ui/MainPage"))


const AppRouter: FC = () => {

	const routes = useRoutes(Object.values(routeConfig).map(({element, path}) => {
    return  {
      path: path,
      element: element
    }
}));

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

export default AppRouter