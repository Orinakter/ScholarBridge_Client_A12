import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import DashboardLayout from "../layouts/DashboardLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import AllScholarship from "../Pages/AllScholarship";
import MyProfile from "../Pages/Dashboard/MyProfile";
import MyApplication from "../Pages/Dashboard/MyApplication";
import MyReviews from "../Pages/Dashboard/MyReviews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'all-scholarship',
        element: <AllScholarship/>
      }
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout/>,
    children:[
      //  User panl
      {
        path: 'my-profile',
        element: <MyProfile/>
      },
      {
        path: 'my-application',
        element: <MyApplication></MyApplication>
      },
      {
        path: 'my-reviews',
        element: <MyReviews></MyReviews>
      },
      


    ]
  }
]);
