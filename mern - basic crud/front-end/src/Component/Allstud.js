import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Allstud() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/studs`)
            .then((response) => response.json())
            .then(data => setAPIData(data))
    }, [])
    const handleData = (student) => {
        const { name, address, subject, mobile } = student;
        localStorage.setItem('id', student._id);
        localStorage.setItem('name', name);
        localStorage.setItem('address', address);
        localStorage.setItem('subject', subject);
        localStorage.setItem('mobile', mobile);
    };
    
    const deleteStudent = async (id) => {
        console.log('Deleting student with ID:', id); // Log the ID

        await axios.delete(`http://localhost:5000/deletestud/${id}`);
        // console.log('Student deleted:', response.data);
        alert("Student Deleted Successfully");

        // Update the state to reflect the deletion
        setAPIData(APIData.filter(student => student._id !== id));
    };
    

    return (
        <div className='container mt-5'>
            <div className='mt-3' align="left">
                <Link className='btn btn-success' to="/addstud">Add Student</Link>
            </div>
            <table class="table mt-3 text-center">
                <thead>
                    <tr className='bg-success'>
                        {/* <th scope="col">ID</th> */}
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {APIData.map(data =>
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.address}</td>
                            <td>{data.subject}</td>
                            <td>{data.mobile}</td>
                            <td>
                                <Link className='btn btn-primary me-3' to={`/viewstud/${data._id}`} onClick={() => handleData(data)}>view</Link>
                                <Link className='btn btn-danger me-3' onClick={() => deleteStudent(data._id)}>Delete</Link>
                                <Link className='btn btn-warning me-3' to={`/editstud/${data._id}`} onClick={() => handleData(data)}>Edit</Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
