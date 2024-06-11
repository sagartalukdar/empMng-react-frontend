import React, { useEffect, useState } from 'react'
import Empservice from '../service/EmpService'
import { Link } from 'react-router-dom';
const Home = () => {
    const[emplist,setEmplist]=useState([]);

    const init=()=>{
      Empservice.getAllEmp().then((res)=>{
        setEmplist(res.data);
    }).catch((err)=>{
        console.log(err);
    })
    }

    useEffect(()=>{
       init()
    },[]);

  const deleteEmp=(id)=>{
    Empservice.deleteEmp(id).then((res)=>{
      init();
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <table class="table">
    <thead>
    
      <tr>
        <th scope="col">#</th>
        <th scope="col">First name</th>
        <th scope="col">Last name</th>
        <th scope="col">email</th>
        <th scope="col">address</th>
        <th scope="col">salary</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
    {emplist.map((e,num)=>(
        <tr>
        <th scope="row">{num++}</th>
        <td>{e.firstName}</td>
        <td>{e.lastame}</td>
        <td>{e.email}</td>
        <td>{e.address}</td>
        <td>{e.salary}</td>
        <td>
         <Link className='btn btn-sm btn-success' to={"editEmp/"+e.id} >edit</Link>
         <a onClick={()=>deleteEmp(e.id)} className='btn btn-sm btn-danger'>Delete</a>
        </td>
      </tr>    
    ))}
      
     
    </tbody>
  </table>
  )
}

export default Home
