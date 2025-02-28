
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import ContactUs from "../Pages/Contact/ContactUs";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/contact',
          element: <ContactUs></ContactUs>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        // normal users routes
        {
          path: 'userHome',
          element: <UserHome></UserHome>
        },
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },

        // Admin routes
        {
          path: 'adminHome',
          element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
        },
        {
          path: 'addItems',
          element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
        },
        {
          path: 'manageItems',
          element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>,
          loader: ({params}) => fetch(`https://restaurant-boss-server-eight.vercel.app/menu/${params.id}`)
        },
        {
          path: 'allUsers',
          element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
        }
      ]
    }
  ]);