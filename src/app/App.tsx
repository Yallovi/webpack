import {FC} from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/routes'
import { Navbar } from 'widgets/Navbar'
import { classNames } from 'shared/lib/classNames'
import {Sidebar} from 'widgets/Sidebar'


const App: FC = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className='content-page'>
                <Sidebar/>
                <AppRouter />
            </div>
        </div>
    )

}

export default App
