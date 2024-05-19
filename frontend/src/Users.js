import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import axios from "axios"
import  Footer from './Footer'
import Header from './Header';
function Users(){
    const [users,setUsers]=useState([{
        // name:"Naveen",email:"mallipudinaveen1729@gmail.com",mobilenumber:7396998202,dateofbirth:"16-May-2024"
    }])


    useEffect(()=>{
        axios.get("http://localhost:3001")
        .then((result)=>{
            setUsers(result.data)
        })
        .catch((err)=>console.log(err))
        

    },[])

    const Delete=(id)=>{
       
        axios.delete("http://localhost:3001/deleteUser/"+id)
            .then((result)=>{
               console.log(result)
               window.location.reload()
            })
            .catch((err)=>{
            console.log(err)
        })

       
        
    }

    return (
       
        <div className='bg-info justify-content-center align-items-center'>
            
            <Header/>
            
         <div className='mx-auto top-50 w-100 bg-white rounded p-3' id="firstcomp" >
                <Link to="/create" className="btn btn-success">Add +</Link>
                <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>MobileNumber</th>
                        <th>DateofBirth</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                       return    <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.mobilenumber}</td>
                                <td>{user.dataofbirth}</td>
                                <td>
                                <Link to={`/update/${user.email}`} className="btn btn-success">Update</Link>
                                    <button className="btn btn-danger" onClick={(e)=>Delete(user.email)} >Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            </div>
            <div>
               <Footer/>
            </div>

            
        </div>
    

)}
export default Users;
