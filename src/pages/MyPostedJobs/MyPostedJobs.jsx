import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { Link } from 'react-router';

const MyPostedJobs = () => {

    const[jobs,setJobs]=useState([])

    const {user}=UseAuth()

    useEffect(()=>{
        fetch(`https://job-portal-server-seven-umber.vercel.app/jobs?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setJobs(data))

    },[user.email])

    return (
        <div>
            <h2 className='text-3xl text-center my-4'>my posted jobs : {jobs.length}</h2>

            <div className="overflow-x-auto max-w-4xl my-6 mx-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job Title</th>
        <th>Deadline</th>
        <th>Application Count</th>

        <th>HR Email</th>
        <th>Applications</th>
      </tr>
    </thead>
    <tbody>
{
    jobs.map((job,index)=>   <tr key={index}>
        <th>{index+1}</th>
        <td>{job.title}</td>
        <td>{job.applicationDeadline}</td>
        <td>{job.applicationCount}</td>
        <td>{job.hr_email}</td>
        <td>
            <Link to={`/viewApplications/${job._id}`}>
            <button className='btn btn-link'>View Applications</button>
            </Link>
        </td>
      </tr>
      )
}

   
    </tbody>
  </table>
</div>

        </div>
    );
};

export default MyPostedJobs;