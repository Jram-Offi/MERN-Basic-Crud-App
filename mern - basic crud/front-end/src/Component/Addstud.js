import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Addstud() {

    const [inputval, setInputval] = useState({
        name: "",
        address: "",
        subject: "",
        mobile: ""
    });
    const setData = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setInputval((preval) => {
            return {
                ...preval, [name]: value
            }
        })
    }
    const navigate = useNavigate();
    
    const addStudData = async(e)=>{
        e.preventDefault();
        const {name,address,subject,mobile} = inputval;
        const res = await fetch("http://localhost:5000/addstud",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,address,subject,mobile
            })
        });
        const data = await res.json();
        console.log(data);

        if(res.status === 422 || !data){
            alert("Error");
        }else{
            setInputval(data);
            alert("Data Added Successfully");
            navigate('/');
        }
    }

    return (
        <div className='container mt-5'>

            <form className='mx-auto w-50 shadow p-4'>
                <h1 className='mt-2'>Fill-up Details</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" class="form-label">Student Name : </label>
                    <input type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='name' onChange={setData} value={inputval.name} />
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleInputEmail1" class="form-label">Student Address : </label>
                    <input type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='address' onChange={setData} value={inputval.address} />
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleInputEmail1" class="form-label">Student Subject : </label>
                    <input type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='subject' onChange={setData} value={inputval.subject} />
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleInputEmail1" class="form-label">Student Mobile : </label>
                    <input type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='mobile' onChange={setData} value={inputval.mobile} />
                </div>
                <button className='btn btn-primary w-100' onClick={addStudData}>Add</button>
            </form>
        </div>
    )
}
