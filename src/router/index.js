import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Error from '../pages/Error'
import Graphs from "../pages/Graphs";
import { Navigate } from "react-router-dom";

export const privateRoutes = [
    {path: '/about', element: <About/>, exact: true},
    {path: '/posts', element: <Posts/>, exact: true},
    {path: '/posts/:id', element: <PostIdPage/>, exact: true},
    {path: '/graphs', element: <Graphs/>, exact: true}
]
export const publicRoutes = [
    // {path: '*', element: <Navigate to={<Error/>}/>, exact: false},
    {path: '/*', element: <Login/>, exact: false}
]