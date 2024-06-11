import React, { useEffect } from 'react'
import Empservice from '../service/EmpService'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditEmp = () => {

    const [emp,setEmp]=useState({
        id:"",
        firstName:"",
        lastName:"",
        email:"",
        address:"",
        salary:""
     })
  
     const handelChange=(e)=>{
      const value=e.target.value;
      setEmp({
        ...emp,[e.target.name]: value
      })
     }
     const [msg,setMsg]=useState("");
  
     const id=useParams();
     console.log(id.id);
     const na=useNavigate();

     useEffect(()=>{
        Empservice.getEmpById(id.id).then((res)=>{
            console.log(res);
            setEmp(res.data);
        }).catch((err)=>{
            console.log(err);
        });
     },[]);

     const upEmp=(e)=>{
        e.preventDefault();
       Empservice.updateEmp(emp).then((res)=>{
        na("/");
       })
     }

  return (
    <div className="container">
    <div className="row">
        <div className="col-md-6 offset-mc-3">
            <div className="card">
                <div className="card-header text-center fs-3">Add Emp</div>
                {
                 msg &&
                 <p className='text-center'>{msg}</p>
                }
                <div className="card-body">
                   <form onSubmit={(e)=>upEmp(e)}>
                     <div className="mb-5">
                        <label htmlFor="">Enter First Name</label>
                        <input type="text" className='form-control' name='first_name' value={emp.firstName} onChange={(e)=>handelChange(e)}/>
                     </div>
                     <div className="mb-5">
                        <label htmlFor="">Enter Last Name</label>
                        <input type="text" className='form-control' name='last_name' value={emp.lastName} onChange={(e)=>handelChange(e)}/>
                     </div>
                     <div className="mb-5">
                        <label htmlFor="">Email</label>
                        <input type="text" className='form-control' name='email' value={emp.email} onChange={(e)=>handelChange(e)}/>
                     </div>
                     <div className="mb-5">
                        <label htmlFor="">Address</label>
                        <input type="text" className='form-control' name='address' value={emp.address} onChange={(e)=>handelChange(e)}/>
                     </div>
                     <div className="mb-5">
                        <label htmlFor="">Salary</label>
                        <input type="text" className='form-control' name="salary" value={emp.salary} onChange={(e)=>handelChange(e)}/>
                     </div>
                     <div className="text-center">
                        <button className='btn btn-primary'>Submit</button>
                        <input type="text" className='btn btn-sm btn-danger' value="reset"/>
                     </div>
                   </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default EditEmp
