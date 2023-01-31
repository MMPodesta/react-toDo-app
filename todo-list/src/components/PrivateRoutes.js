import { Outlet, Navigate } from "react-router-dom"
import { auth } from "../Firebase";

export const PrivateRoutes = () => {
    
    return(
        localStorage.getItem("name") ? <Outlet/> : <Navigate to='/'/>
    );
};