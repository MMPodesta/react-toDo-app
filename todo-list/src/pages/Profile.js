import { Greeting } from "../components/Greeting";
import { useState, useEffect } from "react";
import { db } from "../Firebase";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { BsTrash } from "react-icons/bs";
import { SiAddthis } from "react-icons/si";

export const Profile = () =>{
    const [newItem, setNewItem] = useState("");
    
    //task hold list of tasks
    const [tasks, setTasks] = useState([]);
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
        <div className="flex flex-col items-center mt-5">
            <h1 className="text-3xl font-semibold">Profile Page</h1>
            <Greeting name={localStorage.getItem("name")}/>
            <p className="text-lg">Add, check and delete your tasks below.</p>
            <div className="flex mt-5 w-96 justify-between">
                <input maxlength="20" required className=" bg-gray-100 flex-1 py-2 px-4 "
                placeholder="Task..." 
                onChange={(event) => {
                    setNewItem(event.target.value);
                    }}
                />
                <button className="bg-green-500 text-white   py-2  px-4 
                hover:bg-green-700" onClick={newItem.length > 0 && createItem}><SiAddthis/>
                </button>
            </div>
            <div className="mt-10 ">
                {tasks.map((user) => {
                    return( 
                        <div className="flex  mb-3 justify-between w-96  bg-gray-100 text-xl max-h-10 min-h-max">
                            <h3 className="py-2 px-4 overflow-hidden ">{user.item}</h3>
                            <button className="bg-red-500 text-base  text-white font-bold py-2 px-4 hover:bg-red-700" 
                            onClick={() => {deleteTask(user.id)}}><BsTrash/></button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};