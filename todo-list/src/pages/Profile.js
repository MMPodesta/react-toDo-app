import { Greeting } from "../components/Greeting";
import { useState, useEffect } from "react";
import { db } from "../Firebase";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
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

    const deleteTask = async (item) =>{
        const userItem = doc(db, "users", item); 
        await deleteDoc(userItem);
        getUsers();
    }

    //called ever page render
    useEffect(() => {
        getUsers();

    }, [])

    return(
        <div className="flex flex-col items-center p-2 mt-5">
            <h1 className="text-3xl font-semibold">Profile Page</h1>
            <Greeting name={localStorage.getItem("name")}/>
            <p>Add, check and delete your tasks below.</p>
            <div className="flex gap-3 mt-5">
                <input className="outline outline-2"
                placeholder="Item..." 
                onChange={(event) => {
                    setNewItem(event.target.value);
                    }}
                />
                <button className="bg-blue-500 text-white font-bold py-2 px-4 
                rounded-full hover:bg-blue-700" onClick={createItem}> Create Task
                </button>
            </div>
            <div className="mt-10">
                {tasks.map((user) => {
                    return( 
                        <div className="flex gap-3">
                            <h3 className="text-2xl">Task: {user.item}</h3>
                            <button className="bg-red-500 text-white font-bold py-2 px-4 hover:bg-red-700" onClick={() => {deleteTask(user.id)}}> Delete Task </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};