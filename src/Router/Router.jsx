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
import AllUsers from '../Pages/DashBoard/AllUsers/AllUsers'

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
    // element: <Private> <DashboardDrawer /> </Private>, // Drawer as layout
    element: <DashboardDrawer />, // Drawer as layout
    children: [
      { index: true, element: <DashboardDrawer /> },
      { path: 'reservation', element: <p>Manage Items Page</p> },
      { path: 'paymenthistory', element: <p>Manage Bookings Page</p> },
      { path: 'cart', element: <Cart></Cart> },
      { path: 'addreview', element: <p>Add Review</p> },
      { path: 'mybooking', element: <p>my Booking</p> },
      // Admin Pannel
      { path: 'allusers', element: <AllUsers /> },
    ],
  },
])

export default router
