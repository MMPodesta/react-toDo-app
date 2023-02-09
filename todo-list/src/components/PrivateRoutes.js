import { Outlet, Navigate } from "react-router-dom"

export const PrivateRoutes = () => {
    
    return(
        localStorage.getItem("name") ? <Outlet/> : <Navigate to='/'/>
    );
};