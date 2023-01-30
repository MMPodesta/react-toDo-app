import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Nav = () =>{
    const navigate = useNavigate();

    const logOut = () =>{
        localStorage.clear();
        navigate("/");
    };

    return(
        <div>
            <h1>ToDo List</h1>
            <h2>
                <Link to="/"> Home </Link>
                <Link to="/profile"> Profile </Link> 
                <button onClick={logOut}>Sign Out</button>
            </h2>      
        </div>
    );
};