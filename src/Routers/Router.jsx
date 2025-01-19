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
import AddScholarship from "../Pages/Dashboard/AddScholarship";
import JoinConversation from "../Pages/JoinConversation";
import ScholarshipDetails from "../Pages/ScholarshipDetails";
import ManageUser from "../Pages/Dashboard/ManageUser";

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
      },
      {
        path: 'join-conversation',
        element: <JoinConversation/>
      },
      {
        path: 'scholarship-details/:id',
        element: <ScholarshipDetails/>
      }
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout/>,
    children:[
      //  User panel
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
      {
        path: 'add-scholarship',
        element: <AddScholarship></AddScholarship>
      },
      // Admin Panle
      {
        path: 'manage-user',
        element: <ManageUser/>
      }

      


    ]
  }
]);
