import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate } from 'react-router-dom';

function CreateUser(){
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [mobilenumber,setMobilenumber]=useState()
    const [dateofbirth,setDateofbirth]=useState()
    const navigate=useNavigate()


    const Submit=(e)=>{
        navigate('/')
        e.preventDefault();
         axios.post("http://localhost:3001/createUser",{name,email,mobilenumber,dateofbirth})
            .then(()=>{
                navigate('/')
            })
            .catch((err)=>{
            console.log(err)
        })

        // return {()=>{navigate('/')}
        
    }

    return (

        
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Submit}>
                    <h2>Add User </h2>
                    <div className='mb-2'>
                        <label htmlFor=''>Name</label>
                        <input type ="text" placeholder="Enter Name" className='form-control'
                        onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input type ="text" placeholder="Enter Email" className='form-control'
                        onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>MobileNumber</label>
                        <input type ="number" placeholder="Enter MobileNumber" className='form-control'
                    onChange={(e)=>setMobilenumber(e.target.value)}/>

                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>DateofBirth</label>
                        <input type ="date" placeholder="Enter MobileNumber" className='form-control'
                        onChange={(e)=>setDateofbirth(e.target.value)}/>
                        
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>

            </div>
        
        </div>
    )
}

export default CreateUser;

