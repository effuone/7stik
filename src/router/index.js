import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Error from '../pages/Error'
import { Navigate } from "react-router-dom";

export const privateRoutes = [
    {path: '/about', element: <About/>, exact: false},
    {path: '/posts', element: <Posts/>, exact: true},
    {path: '/posts/:id', element: <PostIdPage/>, exact: true},
]
export const publicRoutes = [
    {path: '/login', element: <Login/>, exact: true},
    {path: null, element: <Error/>, exact:false}
]