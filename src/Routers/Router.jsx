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
import Analytics from "../Pages/Dashboard/Analytics";

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
        element: <PrivateRoute>
          <MyProfile />,
        </PrivateRoute>
      },
      {
        path: "my-application",
        element: <PrivateRoute>
          <MyApplication></MyApplication>,
        </PrivateRoute>
      },
      {
        path: 'update-apply/:id',
        element: <PrivateRoute>
          <UpdateApply/>
        </PrivateRoute>
      },
      {
        path: "my-reviews",
        element:<PrivateRoute>
           <MyReviews></MyReviews>,
        </PrivateRoute>
      },
      {
        path: "add-scholarship",
        element: <PrivateRoute>
          <AddScholarship></AddScholarship>,
        </PrivateRoute>
      },
      {
        path: "update-apply/:id",
        element: <PrivateRoute>
          <ReApply />,
        </PrivateRoute>
      },
      {
        path: "manage-review",
        element: <PrivateRoute>
          <ManageReview/>
        </PrivateRoute>
      },
      // Admin Panle
      {
        path: "manage-user",
        element: <PrivateRoute>
          <ManageUser />,
        </PrivateRoute>
      },
      {
        path: "/dashboard/analytics",
        element:<PrivateRoute>
           <Analytics></Analytics>,
        </PrivateRoute>
      },
      {
        path: "edit-scholarship/:id",
        element: <PrivateRoute>
          <EditScholarShip />,
        </PrivateRoute>
      },
      {
        path: "details/:id",
        element: <PrivateRoute>
          <Details />,
        </PrivateRoute>
      },
      {
        path: "add-review/:id",
        element: <PrivateRoute>
          <AddReview />,
        </PrivateRoute>
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
        element: <PrivateRoute>
          <AllReviews></AllReviews>,
        </PrivateRoute>
      },
      {
        path: "manage-scholarship",
        element: <PrivateRoute>
          <ManageScholarShip />
        </PrivateRoute>,
      },
      {
        path: "my-application/apllicationUserDetails/:id",
        element: <PrivateRoute>
          <ApplicationUserDetails></ApplicationUserDetails>,
        </PrivateRoute>
      },
    ],
  },
]);
