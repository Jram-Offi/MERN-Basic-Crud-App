import React from 'react'
import { Link } from 'react-router-dom'

export default function Viewstud() {
    return (
        <div className='container mt-5'>
            <Link className="btn btn-primary" to="/">Home</Link>
            <div className='row mt-5'>
                <div className='col-md-6'>
                    <ul class="list-group">
                        <li className="list-group-item active" aria-current="true">Student Details</li>
                        <li className="list-group-item">Student Name : {localStorage.getItem('name')}</li>
                        <li className="list-group-item">Student Address : {localStorage.getItem('address')}</li>
                        <li className="list-group-item">Student Subject : {localStorage.getItem('subject')}</li>
                        <li className="list-group-item">Student Mobile : {localStorage.getItem('mobile')}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
