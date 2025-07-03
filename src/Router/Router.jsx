import { createBrowserRouter } from 'react-router-dom'
import LayOut from '../LayOut/LayOut'
import ErrorPage from '../Components/ErrorPage'
import Home from '../Pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayOut />,
    errorElement: <ErrorPage /> ,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
])

export default router;