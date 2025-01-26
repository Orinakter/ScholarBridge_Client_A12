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
import Payment from "../Pages/Payment/Payment";
import AllAppliedScholarship from "../Pages/Dashboard/AllAppliedScholarship";
import ManageScholarShip from "../Pages/Dashboard/ManageScholarShip";
import ReApply from "../Pages/Dashboard/ReApply";
import EditScholarShip from "../Pages/Dashboard/EditScholarShip";
import Details from "../Pages/Dashboard/Details";
import AddReview from "../Pages/Dashboard/AddReview";
import ManageReview from "../Pages/Dashboard/ManageReview";
import UpdateApply from "../Pages/Dashboard/UpdateApply";
import PrivateRoute from "./PrivateRoute";
import Loader from './../Components/Loader';
import ApplicationUserDetails from "../Pages/Dashboard/ApplicationUserDetails";
import AllReviews from "../Pages/Dashboard/AllReviews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },

      {
        path: "join-conversation",
        element: <JoinConversation />,
      },
      {
        path: "/scholarship-details/:id",
        element: <PrivateRoute>
          <ScholarshipDetails />
        </PrivateRoute>,
      },
      {
        path: "scholarship-details/:id/payment",
        element: <Payment />,
      },
      {
        path: "all-scholarship-page",
        element: <AllScholarship></AllScholarship>,
        loader : ()=>fetch(`http://localhost:5000/pages`)

      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute>
      <DashboardLayout />
    </PrivateRoute>,
    children: [
      //  User panel
      {
        path: "my-profile",
        element: <MyProfile />,
      },
      {
        path: "my-application",
        element: <MyApplication></MyApplication>,
      },
      {
        path: 'update-apply/:id',
        element: <UpdateApply/>
      },
      {
        path: "my-reviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "add-scholarship",
        element: <AddScholarship></AddScholarship>,
      },
      {
        path: "update-apply/:id",
        element: <ReApply />,
      },
      {
        path: "manage-review",
        element: <ManageReview/>
      },
      // Admin Panle
      {
        path: "manage-user",
        element: <ManageUser />,
      },
      {
        path: "edit-scholarship/:id",
        element: <EditScholarShip />,
      },
      {
        path: "details/:id",
        element: <Details />,
      },
      {
        path: "add-review/:id",
        element: <AddReview />,
      },
      // Moderator
      {
        path: "all-applied-scholarship",
        element:<PrivateRoute>
           <AllAppliedScholarship />
        </PrivateRoute>
      },
      {
        path: "all-reviews",
        element: <AllReviews></AllReviews>,
      },
      {
        path: "manage-scholarship",
        element: <PrivateRoute>
          <ManageScholarShip />
        </PrivateRoute>,
      },
      {
        path: "my-application/apllicationUserDetails/:id",
        element: <ApplicationUserDetails></ApplicationUserDetails>,
      },
    ],
  },
]);
