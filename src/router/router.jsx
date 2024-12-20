import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Navbar from "../pages/shared/Navbar";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn";

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