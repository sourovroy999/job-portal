import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = () => {

    const [jobs, setJobs]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/jobs')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setJobs(data)
        })
    },[])

    return (
        <div>
            <p>{jobs.length}</p>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job=><HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;