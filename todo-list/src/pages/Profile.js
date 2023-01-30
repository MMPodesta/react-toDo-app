import { Greeting } from "../components/Greeting";

export const Profile = () =>{
    return(
        <div>
            <h1>Profile Page</h1>
            <Greeting name={localStorage.getItem("name")}/>
        </div>
    );
};