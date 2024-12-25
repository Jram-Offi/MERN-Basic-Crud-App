import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useEffect } from 'react';
import axios from 'axios';

export default function Editstud() {

    const [id] = useState(localStorage.getItem('id'));
    const [name, setName] = useState(localStorage.getItem('name'));
    const [address, setAddress] = useState(localStorage.getItem('address'));
    const [subject, setSubject] = useState(localStorage.getItem('subject'));
    const [mobile, setMobile] = useState(localStorage.getItem('mobile'));

    const navigate = useNavigate(); // Hook to programmatically navigate

    const updateStudData = (e) => {
        e.preventDefault(); // Prevent default form submission

        axios.put(`http://localhost:5000/updatestud/${id}`, {
            name,
            address,
            subject,
            mobile
        })
        .then((response) => {
            // console.log('Student updated:', response.data);
            alert("Student updated Successfully");
            // Optionally clear localStorage or navigate to another page
            localStorage.removeItem('id');
            localStorage.removeItem('name');
            localStorage.removeItem('address');
            localStorage.removeItem('subject');
            localStorage.removeItem('mobile');
            navigate('/'); // Navigate to home page or another page
        })
        
    }
    

    return (
        <div className='container mt-5'>

            <form className='mx-auto w-50 shadow p-4'>
                <h1 className='mt-2'>Edit Details</h1>
                <div class="mb-3">
                    <label htmlFor="exampleInputEmail1" class="form-label">Student Name : </label>
                    <input type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleInputEmail1" class="form-label">Student Address : </label>
                    <input type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='address' value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleInputEmail1" class="form-label">Student Subject : </label>
                    <input type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleInputEmail1" class="form-label">Student Mobile : </label>
                    <input type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                </div>
                <button className='btn btn-primary w-100' onClick={updateStudData}>Update</button>
            </form>
        </div>
    )
}
