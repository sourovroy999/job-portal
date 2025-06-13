
import React from 'react';
import { useParams } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const JobApply = () => {

    const{id}=useParams()
    // console.log(id);

    const {user}=UseAuth()

    const navigate=useNavigate()


    const submitJobApplication=e=>{
        e.preventDefault()

        const form=e.target;
        const linkedin=form.linkedin.value;
        const github=form.github.value;
        const resume=form.resume.value;

        // console.log(linkedin,github,resume);
        const jobApplication={
            job_id: id,
            applicant_email:user.email,
            linkedin,
            github,
            resume,
            // category,

        }

        fetch('https://job-portal-server-seven-umber.vercel.app/job-applications',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(jobApplication)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                console.log(data);
                
              Swal.fire({
                  icon: "success",
                  title: "applied successfully",
                  showConfirmButton: false,
                  timer: 1500,
                  position: "top-end",
             }); 
            
             navigate('/myApplications')

            }
        })


    }
    

    return (
      
   
    <div className="card mb-20 mt-6 mx-auto bg-base-100 w-full max-w-3xl p-5 shadow-2xl">
      <h1 className="text-5xl font-bold my-10">Apply now and good luck!</h1>


      <form onSubmit={submitJobApplication} className="  ">
        <fieldset className="fieldset ">
          <label className="label">LinkedIn URL</label>
          <input name='linkedin' type="url" className="input w-full" placeholder="LinkedIn URL" />


          <label className="label">GitHub URL</label>
          <input name='github' type="url" className="input w-full" placeholder="GitHub URL" />

          <label className="label">Resume URL</label>
          <input name='resume' type="url" className="input w-full" placeholder="Resume URL" />
          
          <button className="btn btn-neutral mt-4">Apply</button>
        </fieldset>
      </form>

    </div>
  
    );
};

export default JobApply;