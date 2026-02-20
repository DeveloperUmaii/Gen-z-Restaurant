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
import AdminRoute from '../Pages/AdminRoute/AdminRoute'
import AddItem from '../Pages/DashBoard/AddItems/AddItem'
import ManageItems from '../Pages/DashBoard/ManageItems/ManageItems'
import UpdateItem from '../Pages/DashBoard/UpdateMenuItem/UpdateItem'
import Payment from '../Pages/DashBoard/Payment/Payment'
import PaymentHistory from '../Pages/DashBoard/PaymentHistory/PaymentHistory'
import AdminHome from '../Pages/DashBoard/AdminHome/AdminHome'
import UserHome from '../Pages/DashBoard/UserHome/UserHome'
import AddReview from '../Pages/DashBoard/AddReview/AddReview'

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
    element:  <Private> <DashboardDrawer /> </Private>, // Drawer as layout
    children: [
      // User Pannlel
      { index: true, element: <DashboardDrawer /> },
      { path: 'reservation', element: <p>Manage Items Page</p> },
      { path: 'userhome', element: <UserHome /> },
      { path: 'PaymentHistory', element: <PaymentHistory /> },
      { path: 'cart', element: <Cart></Cart> },
      { path: 'payment', element: <Payment /> },
      { path: 'addreview', element: <AddReview /> },
      { path: 'mybooking', element: <p>my Booking</p> },
      // Admin Pannel
      { path: 'adminhome', element: <AdminHome /> },
      // { path: 'adminhome', element: <AdminRoute> <AllUsers /> </AdminRoute> },
      { path: 'allusers', element: <AdminRoute> <AllUsers /> </AdminRoute> },
      { path: 'additem', element: <AdminRoute> <AddItem /> </AdminRoute> },
      { path: 'manageitems', element: <AdminRoute> <ManageItems /> </AdminRoute> },
                                                        // { path: 'manageitems', element:  <ManageItems /> },dashboardDrawer/cart
      { path: 'updateitem/:id', element: <AdminRoute> <UpdateItem /> </AdminRoute>,
                                                        // { path: 'updateitem/:id', element:  <UpdateItem /> ,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`) 
      },
    ],
  },
])

export default router
