import { createBrowserRouter } from 'react-router-dom';
import BadURL from '../pages/404';
import Start from '../pages/start';

import Root from '../layout/RootLayout';
import Quiz from '../pages/quiz';

export const router = createBrowserRouter([
    {
        path: "/", 
        element: <Root />,
        errorElement: <BadURL/>,
        children: [
            {
                index: true,
                element: <Start/>
            },
            {
                path:"quiz",
                element: <Quiz/>
            }
        ]

    }
])