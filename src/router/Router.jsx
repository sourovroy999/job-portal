import {
  createBrowserRouter,

} from "react-router";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/signin/SignIn";
import JobDetails from "../pages/Jobdetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplication from "../pages/MyApplication/MyApplication";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";

 

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut/>,
    errorElement:<h2>Route not found</h2>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/jobs/:id',
        element:<PrivateRoute>
          <JobDetails/>
        </PrivateRoute>,
        loader:({params})=>fetch(`https://job-portal-server-seven-umber.vercel.app/jobs/${params.id}`)
      },
      {
        path:'/jobApply/:id',
        element:<PrivateRoute>
          <JobApply/>
        </PrivateRoute>
      },
      {
        path:'/myApplications',
        element:<PrivateRoute>
          <MyApplication/>
        </PrivateRoute>


      },
      {
        path:'addJob',
        element:<PrivateRoute>
          <AddJob> </AddJob>
        </PrivateRoute>
      },
      {
        path:'myPostedJobs',
        element:<PrivateRoute>
          <MyPostedJobs/>
        </PrivateRoute>
      }
      ,
      {
        path:'viewApplications/:job_id',
        element:<PrivateRoute>
          <ViewApplications/>
        </PrivateRoute>,
        loader:({params})=>fetch(`https://job-portal-server-seven-umber.vercel.app/job-applications/jobs/${params.job_id}`)

      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/signIn',
        element:<SignIn/>
      }
    ]
  },
]);

export default router