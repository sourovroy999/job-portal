
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const job=useLoaderData()
    
    const {title,company,applicationDeadline}=job;
    
    return (
        <div className='text-center card max-w-md mx-auto space-y-3 my-32'>
            <h2 className='text-3xl font-bold'>Job details for {title}</h2>
            <h2>Apply for : {company}</h2>
            <p>Deadline: {applicationDeadline}</p>

            <button className='btn my-5 w-[120px] mx-auto btn-success'>Apply Now</button>
        </div>
    );
};

export default JobDetails;