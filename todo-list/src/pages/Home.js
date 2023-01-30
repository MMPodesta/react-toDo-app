import { signInWithGoogle } from "../Firebase";

export const Home = () =>{
    return(
        <div>
            <h1> Home Page</h1>
            <button onClick={signInWithGoogle}> Sign In With Google</button>
        </div> 
    );
};