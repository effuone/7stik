import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Error from "../pages/Error";
import { privateRoutes, publicRoutes } from "../router";
const AppRouter = () => {
    const isAuth = false;
    return(
            <Routes>
                {privateRoutes.map((route, key)=>
                    <Route 
                        exact = {route.exact} 
                        path = {route.path}
                        element={route.element}
                        key= {key}
                    />
                )}
                <Route
                    path="*" element={<Navigate to="/about"/>}
                />
            </Routes>
    )
        
}
export default AppRouter