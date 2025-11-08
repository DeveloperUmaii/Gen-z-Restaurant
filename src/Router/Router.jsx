import { createBrowserRouter } from 'react-router-dom'
import LayOut from '../LayOut/LayOut'
import ErrorPage from '../Components/ErrorPage'
import Home from '../Pages/Home'
import OurMenu from '../Pages/OurMenu'
import DashBoard from '../Pages/DashBoard'
import OurShop from '../Pages/OurShop'
import ContactUs from '../Pages/ContactUs'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/SignUp/SignUp'
import Private from '../Pages/PrivateRoute/Private'
import Profile from '../Pages/ProfilePage/Profile'
import DashboardDrawer from '../LayOut/DashboardDrawer'
import Cart from '../Pages/DashBoard/Cart/Cart'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayOut />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'contact', element: <ContactUs /> },
      { path: '/dashbord', element: <Private><DashBoard  /></Private>},
      { path: 'ourmenu', element: <OurMenu /> },
      { path: 'ourshop/:category', element: <OurShop /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
      { path: 'profile', element: <Private><Profile /></Private> },
    ],
  },

  // ✅ Dashboard layout route
  {
    path: '/dashboardDrawer',
    element: <DashboardDrawer />, // Drawer as layout
    children: [
      { index: true, element: <DashboardDrawer /> },
      { path: 'cart', element: <Cart></Cart> },
      { path: 'manageitems', element: <p>Manage Items Page</p> },
      { path: 'managebookings', element: <p>Manage Bookings Page</p> },
      { path: 'users', element: <p>All Users Page</p> },
    ],
  },
])

export default router
