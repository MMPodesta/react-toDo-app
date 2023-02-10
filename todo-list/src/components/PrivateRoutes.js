import { Outlet, Navigate } from "react-router-dom"

export const PrivateRoutes = () => {
    
    return(
        // this makes an 404 error when refreshing private page 
        localStorage.getItem("name") ? <Outlet/> : <Navigate to='/'/>
    );
};