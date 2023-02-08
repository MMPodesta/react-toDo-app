import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";

export const Nav = () =>{
    const navigate = useNavigate();
    const user = localStorage.getItem("name");

    const logOut = () =>{
        localStorage.clear();
        auth.signOut();
        navigate("/");
    };

    return(
            <div className="flex justify-between p-9">
                <div>
                    <h1 className="text-xl">ToDo List</h1>
                </div>
                
                <div className="text-lg ">
                    <Link to="/" className="hover:shadow-sm"> Home </Link>
                    <Link to="/profile" className="hover:shadow-sm"> Profile </Link> 
                    <button onClick={logOut}>Sign Out</button>
                </div>
                
                     
            </div>
    );
};