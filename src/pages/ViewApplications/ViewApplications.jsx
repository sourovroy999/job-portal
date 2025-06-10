import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const applications=useLoaderData()

    const handleStatusUpdate=(e,id)=>{
        console.log(e.target.value, id);
        
        const data={
            status:e.target.value


        }
        fetch(`http://localhost:3000/job-applications/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
             if(data.modifiedCount){
                            Swal.fire({
                         position: "top-end",
                        icon: "success",
                         title: "Status has been updated",
                        showConfirmButton: false,
                         timer: 1500
                            });
                        
                        }
            
        })
        
    }

    return (
        <div>
            <h2   className='text-3xl text-center'>Applications for this job :{applications.length}</h2>
            
            <div className="overflow-x-auto mx-auto max-w-5xl">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Applicants email</th>
        <th>URLs</th>
        <th>Status</th>
        <th>Update Status</th>
      </tr>
    </thead>
    <tbody>

     
   {
    applications.map((applicants, index)=>    <tr key={applicants._id}>
        <th>{index+1}</th>
        <td>{applicants.applicant_email
}</td>
        <td>
          <p>LinkedIn: <a className='hover:text-blue-400'  target='_blank'  href={`${applicants.linkedin}`} rel="noopenner noreferrer"> {applicants.linkedin} </a> </p>
        <p>
           GitHub: <a className='hover:text-blue-400' target='_blank'  href={`${applicants.github}`} rel="noopenner noreferrer"> {applicants.github} </a>

        </p>
        <p>
           Resume: <a className='hover:text-blue-400' target='_blank'  href={`${applicants.resume}`} rel="noopenner noreferrer"> {applicants.resume} </a>

        </p>




        </td>

        <td>

            <select
            onChange={(e)=> handleStatusUpdate(e,applicants._id)}
             defaultValue={applicants.status || 'change status'} className="select select-sm">
  <option disabled={true}>Change status</option>
  <option>Under review</option>
  <option>Set Interview</option>
  <option>Hired</option>
  <option>Rejected</option>
</select>
        
        </td>
      </tr> )
   }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ViewApplications;