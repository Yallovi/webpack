import { FC, Suspense, lazy } from 'react'
import { useRoutes, Routes } from 'react-router-dom'

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

	return <Suspense fallback={'Loading...'}>{routes}</Suspense>
}

export default MainRouter