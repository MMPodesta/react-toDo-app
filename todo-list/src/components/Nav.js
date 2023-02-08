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
        <section>
            <div>
                <h1>ToDo List</h1>
                <h2>
                    <Link to="/"> Home </Link>
                    <Link to="/profile"> Profile </Link> 
                    <button onClick={logOut}>Sign Out</button>
                </h2>      
            </div>
        </section>
    );
};