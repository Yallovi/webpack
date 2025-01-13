import { FC, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import useTheme from 'app/providers/ThemeProvider/lib/useTheme'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

import 'app/styles/index.scss'



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
        <div className='page-wrapper'>{routes}</div>
    </Suspense>
    )
}

export default AppRouter