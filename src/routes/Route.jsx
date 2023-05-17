import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Admin from "../Pages/Admin/Admin";
import Donation from "../Pages/Donation/Donation";
import Events from "../Pages/Events/Events";
import Blog from "../Pages/Blog/Blog";
import RegisterVolunteer from "../Pages/RegisterVolunteer/RegisterVolunteer";
import PrivateRoute from "./PrivateRoute";
import AddEvent from "../Pages/AddEvent/AddEvent";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/', 
            element: <Home/>,
        },
        {
            path: '/donation', 
            element: <Donation/>,
        },
        {
            path: '/volunteer/:id', 
            element: <PrivateRoute><RegisterVolunteer/></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/volunteer/${params.id}`)
        },
        {
            path: '/events', 
            element: <PrivateRoute><Events/></PrivateRoute>,
        },
        {
            path: '/blog', 
            element: <Blog/>,
        },
        {
            path: '/signUp', 
            element: <SignUp/>,
        },
        {
            path: '/login', 
            element: <Login/>,
        },
        {
            path: '/admin', 
            element: <PrivateRoute><Admin/></PrivateRoute>,
        },
        {
            path: '/addEvent', 
            element: <PrivateRoute><AddEvent/></PrivateRoute>,
        },
      ]
    },
  ]);

export default router;