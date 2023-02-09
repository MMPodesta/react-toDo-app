import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { ImExit } from "react-icons/im";


export const Nav = () =>{
    const navigate = useNavigate();
    const user = localStorage.getItem("name");

    const logOut = () =>{
        localStorage.clear();
        auth.signOut();
        navigate("/");
    };

    return(
            <div className="flex justify-between text-xl p-9">
                <div>
                    <h1>ToDo List</h1>
                </div>
                 
                {localStorage.getItem("name") ? (
                    <div className="flex gap-3">
                        <Link to="/"> Home </Link>
                        <Link to="/profile"> Profile </Link>
                        <ImExit className="text-xl cursor-pointer" onClick={logOut}/>
                    </div>) 
                : (
                    <div className="text-lg flex">
                        <Link to="/"> Home </Link>
                    </div>
                )}        
            </div>        
    );
};