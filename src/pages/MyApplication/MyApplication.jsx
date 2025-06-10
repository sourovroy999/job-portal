import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import Swal from 'sweetalert2';

const MyApplication = () => {

    const {user}=UseAuth()
    const [jobs,setJobs]=useState([])

    // console.log(jobs);
    
    useEffect(()=>{
        fetch(`http://localhost:3000/job-application?email=${user.email}`)
    
        .then(res=>res.json())
        .then(data=>{
            setJobs(data)
        })
    
    },[user.email])


    const handledelete=(email, _id)=>{
        console.log(email);



        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

    fetch(`http://localhost:3000/job-application?email=${email}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
    
       if(data.deletedCount > 0){
        const remaining=jobs.filter(job=>job._id !== _id)
        // const remaining=jobs.filter(job=>job.applicant_email !== user.email)
        console.log(remaining);
        setJobs(remaining)

           Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
        
       }


        
    })

 
  }
});
        

    }

    return (
        <div className='py-40'>
            <h2 className="text-3xl text-center">My Applications: {jobs.length}</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>


      {/* row 1 */}
      {
        jobs.map(job=> <tr key={job._id}>
            
            
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={job.company_logo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{job.title}</div>
              <div className="text-sm opacity-50">{job.location}</div>
            </div>
          </div>
        </td>
        <td>
          {job.category}
          <br />
          <span className="badge badge-ghost badge-sm">{job.jobType}</span>
        </td>
        <td>{job.applicant_emnail
}</td>
        <th>
          <button onClick={()=>handledelete(job.applicant_email, job._id)} className="btn btn-error  btn-xs">Delete</button>
        </th>
      </tr>)
      }
     
    </tbody>
    
  </table>
</div>

        </div>
    );
};

export default MyApplication;