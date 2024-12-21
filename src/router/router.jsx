import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Navbar from "../pages/shared/Navbar";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails";
import Private from "../pages/Private/Private";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h1>Router not found.</h1>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/jobs/:id',
          element: <Private><JobDetails></JobDetails></Private>,
          loader: ({params}) => fetch(`http://localhost:5000/works/${params.id}`)
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/login',
          element: <SignIn></SignIn>
        },
      ]
    },
  ]);

  export default router;