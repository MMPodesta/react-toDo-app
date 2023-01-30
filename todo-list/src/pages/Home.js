import { signInWithGoogle } from "../Firebase";
import { useNavigate } from "react-router-dom";

export const Home = () =>{
    const navigate = useNavigate();
    
    const login = () =>{
        signInWithGoogle().then((result) => {
            const name = result.user.displayName;
            localStorage.setItem("name", name);
            navigate('/profile');
        })
        .catch((error) => {
            console.log(error);
        });
        
    }

    return(
        <div>
            <h1> Home Page</h1>
            <button onClick={login}> Sign In With Google</button>
        </div> 
    );
};