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
import SignUp from '../Pages/SignUp/SignUp'
import Private from '../Pages/PrivateRoute/Private'

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
        element: <Private><DashBoard  /></Private>
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

      {
        path: '/signup',
        element: <SignUp />
      },

    ],
  },
])

export default router;