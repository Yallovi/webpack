import {Story} from '../types/index'
import { BrowserRouter } from 'react-router-dom'


export const RouterDecorator = (Story: Story) => {
    return (
        <BrowserRouter>
            <Story/>
        </BrowserRouter>
    )
}