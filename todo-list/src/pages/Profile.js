import { Greeting } from "../components/Greeting";
import { useState, useEffect } from "react";
import { db } from "../Firebase";
import { collection, getDocs, addDoc, deleteDoc } from "firebase/firestore";
import { async } from "@firebase/util";

export const Profile = () =>{
    const [newItem, setNewItem] = useState("");
    
    //task hold list of tasks
    const [tasks, setTasks] = useState([])
    const userCollectionRef = collection(db, "users");

    const getUsers = async () =>{
        const data = await getDocs(userCollectionRef);
        setTasks(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    
    //add item and update
    const createItem = async () =>{
        await addDoc(userCollectionRef, { item: newItem });
        getUsers();
    }

    const deleteTask = async () =>{
        
    }

    //called ever page render
    useEffect(() => {
        getUsers();

    }, [])

    return(
        <div>
            <h1>Profile Page</h1>
            <Greeting name={localStorage.getItem("name")}/>
            <input 
            placeholder="Item..." 
            onChange={(event) => {
                setNewItem(event.target.value);
                }}
            />

            <button onClick={createItem}> Create Task</button>
            {tasks.map((user) => {
                return( 
                    <div>
                        <h1>Item: {user.item}</h1>
                        <button>Delete Task</button>
                    </div>
                );
            })}
        </div>
    );
};