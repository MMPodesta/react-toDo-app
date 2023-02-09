import { signInWithGoogle } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { GoogleButton } from "react-google-button"


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
        <div className="flex flex-col items-center p-2 mt-5">
            <h1 className="text-3xl font-semibold"> Home Page</h1>
            {localStorage.getItem("name")? (
                <h2 className="text-lg mt-3">Already logged in.</h2>
            ):(
                <GoogleButton onClick={login} className="mt-20"></GoogleButton>
            )}
        </div> 
    );
};