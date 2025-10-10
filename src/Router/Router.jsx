import { createBrowserRouter } from 'react-router-dom'
import LayOut from '../LayOut/LayOut'
import ErrorPage from '../Components/ErrorPage'
import Home from '../Pages/Home'
import Contact from '../Pages/HomeComponents/Contact'
import OurMenu from '../Pages/OurMenu'
import DashBoard from '../Pages/DashBoard'
import OurShop from '../Pages/OurShop'
import ContactUs from '../Pages/ContactUs'
import Login from '../Pages/Login/Login'

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
        element: <ContactUs />
      },
      
      {
        path: '/dashbord',
        element: <DashBoard  />
      },
      {
        path: '/ourmenu',
        element: <OurMenu />
      },
      {
        path: 'ourshop/:category',
        element: <OurShop />
      },

      {
        path: '/login',
        element: <Login />
      },

    ],
  },
])

export default router;