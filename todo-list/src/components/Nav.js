import { Link } from "react-router-dom";

export const Nav = () =>{
    return(
        <div>
            <h1>ToDo List</h1>
            <Link to="/"> Home </Link>
            <Link to="/profile"> Profile </Link> 
        </div>
    );
};