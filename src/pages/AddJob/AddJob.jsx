import React from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import UseAuth from '../../Hooks/UseAuth';

const AddJob = () => {

    const navigate=useNavigate()
    const {user}=UseAuth();
    console.log(user);
    

    const handleAddJob=e=>{
        e.preventDefault();

        const formData=new FormData(e.target)
        // console.log(formData.entries()); 

        const initialData=Object.fromEntries(formData.entries())
        // console.log(initialData);

        const{min, max, currency, ...newJob}=initialData;

        newJob.salaryRange={min,max,currency};
        newJob.requirements=newJob.requirements.split('\n')
        newJob.responsibilities=newJob.responsibilities.split('\n')


        console.log(newJob);
        //send data to server

        fetch('http://localhost:3000/jobs',{
            method:'POST',
            headers:{
                'content-type':'application/json'

            },
            body:JSON.stringify(newJob)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                Swal.fire({
             position: "top-end",
            icon: "success",
             title: "New job added successfully",
            showConfirmButton: false,
             timer: 1500
                });
            navigate('/')
            
            }
            
        })
        
        

    }


    return (
        <div>


            <div className="hero bg-base-200 min-h-screen">

   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-20">

            <h2 className="text-3xl 
            text-center mt-4">Add a new job</h2>

      <form onSubmit={handleAddJob} className="card-body">
        <fieldset className="fieldset">

        {/* job title */}
          <label className="label">Job Title</label>
          <input required name='title' type="text" className="input" placeholder="Job Title" />

        {/*job location */}
          <label className="label">Job Location</label>
          <input required name='location' type="text" className="input" placeholder="Job Title" />

          {/* job type  */}

            <label className="label">Job Type</label>
      <select name='jobType' defaultValue="job type" className="select select-primary ">
       <option disabled={true}>Job Type</option>
        <option>Intern</option>
       <option>Full Time</option>
       <option>Part-Time</option>
     </select>

          {/* job category  */}

            <label className="label">Job Field</label>
      <select name='cetegory' defaultValue="Pick a font" className="select select-primary ">
       <option disabled={true}>Job Field</option>
        <option>Engineering</option>
       <option>Marketing</option>
       <option>Finance</option>
       <option>Teaching</option>
     </select>

     {/* salery range */}
     <p className='mt-3 '>Salary Range</p>
        {/* <div className='flex  '> */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>

        <div>   

          <input required name='min' type="number" className="input" placeholder="Min" />
        </div>


        <div>
            
          <input required name='max' type="number" className="input" placeholder="Max" />
        </div>
          
          <div>
          {/* job category  */}


           
      <select name='currency' defaultValue="Currency" className="select select-primary ">
       <option disabled={true}>Currency</option>
        <option>BDT</option>
       <option>USD</option>
       <option>INR</option>
     </select>
     </div>
        </div>

          {/* job description */}
          
          <fieldset className="fieldset">
  <legend className="fieldset-legend">Job Description</legend>
  <textarea required name='description' className="textarea h-24" placeholder="Job Description"></textarea>
</fieldset>

{/* company name */}

          <label className="label">Company Name</label>
          <input required name='company' type="text" className="input" placeholder="Company Name" />

  {/* job requirements */}
          
          <fieldset className="fieldset">
  <legend className="fieldset-legend">Job requirements</legend>
  <textarea required name='requirements' className="textarea h-24" placeholder="Put each requirements in a new line"></textarea>
</fieldset>

  {/* job Responsibilities */}
          
          <fieldset className="fieldset">
  <legend className="fieldset-legend">Job Responsibilities</legend>
  <textarea required name='responsibilities' className="textarea h-24" placeholder="Put each Responsibilities in a new line"></textarea>
</fieldset>

 {/*HR Email */}
          <label className="label">HR Email</label>
          <input defaultValue={user?.email} required name='hr_email' type="email" className="input" placeholder="HR Email" />

 {/* HR Name */}
          <label className="label">HR Name</label>
          <input defaultValue={user?.displayName} required name='hr_name' type="text" className="input" placeholder="HR Name" />
 {/* Company Logo URL*/}
          <label className="label">Company Logo URL</label>
          <input required name='company_logo' type="url" className="input" placeholder="company logo" />

                {/* application deadline */}
          <label className="label">Application Deadline</label>

          <input required name='applicationDeadline' type="date" className="input" placeholder="Deadline" />



    {/* submit btn */}
          <button className="btn btn-neutral mt-4">Submit</button>
        </fieldset>
      </form>
    </div>
  </div>
</div>
     
    );
};

export default AddJob;