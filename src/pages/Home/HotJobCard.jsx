
import { FaDollarSign, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const HotJobCard = ({job}) => {

    // Destructuring the keys
const {
  applicationDeadline,
  category,
  company,
  company_logo,
  description,
  hr_email,
  hr_name,
  jobType,
  location,
  requirements,
  responsibilities,
  salaryRange: { min, max, currency },
  status,
  title,
  _id
} = job;

console.log(company);


    return (
        <div className="card bg-base-100 shadow-sm">
 <div className="flex gap-2 m-2">
     <figure>
    <img className="w-16" 
      src={company_logo}
      alt="Shoes" />
  </figure>
  <div>
    <h4>{company}</h4>
    <p className="flex items-center gap-1"><FaLocationDot /> {location}</p>
  </div>
 </div>

 
  <div className="card-body">
    <h2 className="card-title">{title} <div className="badge badge-secondary">NEW</div></h2>
    
    <p>{description}</p>

    <div className="flex gap-2 flex-wrap ">
        {
            requirements.map((skill,index)=><p key={index} className="border hover:text-purple-600  rounded-md text-center">{skill}</p>)
        }
    </div>

    <div className="card-actions justify-end items-center mt-4">
        <p className="flex items-center">Salery: {min}-{max} <FaDollarSign/>{currency}</p>

        <Link to={`/jobs/${_id}`}>
      <button className="btn btn-primary">Apply</button>
        
        </Link>
    </div>
  </div>
</div>
    );
};

export default HotJobCard;