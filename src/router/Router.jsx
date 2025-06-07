import {
  createBrowserRouter,

} from "react-router";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/signin/SignIn";
import JobDetails from "../pages/Jobdetails/JobDetails";
import PrivateRoute from "./PrivateRoute";

 

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
        loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
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