import { createBrowserRouter } from 'react-router-dom'
import LayOut from '../LayOut/LayOut'
import ErrorPage from '../Components/ErrorPage'
import Home from '../Pages/Home'
import Contact from '../Pages/HomeComponents/Contact'
import OurMenu from '../Pages/OurMenu'
import { Helmet } from 'react-helmet-async'

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

      {
        path: '/contact',
        element: <Helmet><Contact /></Helmet> 
      },
      
      {
        path: '/dashbord',
        element: <Contact />
      },
      {
        path: '/ourmenu',
        element: <OurMenu />
      },
      {
        path: '/ourshop',
        element: <Contact />
      },
      {
        path: '/signout',
        element: <Contact />
      },

    ],
  },
])

export default router;