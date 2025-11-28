import users from "./User";
import SingleUser from "./SingleUser";
import { useState } from "react";

const AllUser=()=>{
    const[emp,setEmp]=useState([]);
    const[showemp,setShowemp]=useState(false);

    const addEmp=()=>{
        setEmp(users);
        setShowemp(true);
    }
    return(
        <>
        <div>
            <h1>Employees Data</h1>
            {!showemp && (
                <button onClick={addEmp}>Add Emp</button>
            )}

            {showemp &&(
                <table border={1} cellPadding={10} cellSpacing={8}>
                <tbody>
                    {emp.map(e=>(
                        <SingleUser key={e.id} user={e} deleteUser={deleteUser}/>
                    ))}
                </tbody>
                </table>
            ) }
        </div>
        </>
    )
}

export default AllUser;