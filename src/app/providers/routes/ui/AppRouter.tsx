import { FC, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/PageLoader'

import 'app/styles/index.scss'



const AppRouter: FC = () => {

    const routes = useRoutes(
        Object.values(routeConfig)
            .map(({element, path}) => {
                return  {
                    path: path,
                    element: element
                }
            }));

  
    return (
        <Suspense fallback={<PageLoader />}>
            <div className='page-wrapper'>{routes}</div>
        </Suspense>
    )
}

export default AppRouter