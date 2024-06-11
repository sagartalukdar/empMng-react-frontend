import React, { useState } from 'react'

import Empservice from '../service/EmpService'

const AddEmp = () => {

   const [emp,setEmp]=useState({
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

   const submitEmp=(e)=>{
      e.preventDefault();
      Empservice.saveEmp(emp).then((res)=>{
        setMsg("employee Added");
        setEmp({
         first_name:"",
         last_name:"",
         email:"",
         address:"",
         salary:""
        })
      }).catch((err)=>{
         console.log(err);
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
                       <form onSubmit={(e)=>submitEmp(e)}>
                         <div className="mb-5">
                            <label htmlFor="">Enter First Name</label>
                            <input type="text" className='form-control' name='first_name' value={emp.first_name} onChange={(e)=>handelChange(e)}/>
                         </div>
                         <div className="mb-5">
                            <label htmlFor="">Enter Last Name</label>
                            <input type="text" className='form-control' name='last_name' value={emp.last_name} onChange={(e)=>handelChange(e)}/>
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

export default AddEmp
