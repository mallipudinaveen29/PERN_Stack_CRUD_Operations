import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams,useNavigate} from 'react-router-dom';
function UpdateUser(){
    const {id}=useParams()
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [mobilenumber,setMobilenumber]=useState()
    const [dateofbirth,setDateofbirth]=useState()
    const navigate=useNavigate()

    useEffect(()=>{
            axios.get('http://localhost:3001/getuser/'+id)
            .then(result=>{
                    console.log(result)
                    setName(result.data[0].name)
                    setEmail(result.data[0].email)
                    setMobilenumber(result.data[0].mobilenumber)
                    setDateofbirth(result.data[0].dataofbirth)
                 })
            .catch(err=>console.log(err))
    },[])

    const Submit=(e)=>{
        navigate('/')
        e.preventDefault();
         axios.put("http://localhost:3001/updateUser/"+id,{name,email,mobilenumber,dateofbirth})
            .then((result)=>{
                console.log(result)                
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
                <h2>Update User </h2>
                <div className='mb-2'>
                    <label htmlFor=''>Name</label>
                    <input type ="text" placeholder="Enter Name" className='form-control'
                    value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Email</label>
                    <input type ="text" placeholder="Enter Email" className='form-control'
                    value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>MobileNumber</label>
                    <input type ="number" placeholder="Enter MobileNumber" className='form-control'
                    value={mobilenumber} onChange={(e)=>setMobilenumber(e.target.value)}/>

                </div>
                <div className='mb-2'>
                    <label htmlFor=''>DateofBirth</label>
                    <input type ="date" placeholder="Date Of Birth" className='form-control'
                    value={dateofbirth} onChange={(e)=>setDateofbirth(e.target.value)}/>
                    
                </div>
                <button className='btn btn-success'>Update</button>
            </form>

        </div>
    
    </div>
    )

}


export default UpdateUser;
