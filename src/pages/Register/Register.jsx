import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import registerLottieData from '../../assets/lottie/register.json'
import AuthContext from '../../context/AuthContext/AuthContext';
import toast from 'react-hot-toast';

const Register = () => {

  const{createUser}=useContext(AuthContext)


    const[passworderror,setpassworderror]=useState('')

    const handleRegister=e=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
         console.log(email,password);
         
         //password validation

         const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

         const validation=regex.test(password)

         console.log(validation)

         if(!validation){
            setpassworderror(
                <>
                  Password must contain:<br />
         • At least 6 characters<br />
         • At least one uppercase letter (A–Z)<br />
         • At least one number (0–9)
                </>

            )
            return
         }

         createUser(email,password)
         .then(result=>{
          console.log(result.user);
          toast.success('Register Successfull')
          
         })
         .catch(error=>{
          toast.error(error.message)
          
         })
         
         
         
         
    }

    return (
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <div className="text-center md:w-96 lg:text-left ">

      <Lottie  animationData={registerLottieData}></Lottie>
    </div>


    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-5xl font-bold m-8 text-center">Register now!</h1>

      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          
          {
            passworderror && <p className='text-red-500'>{passworderror}</p> 
          }
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>

    </div>
  </div>
</div>
    );
};

export default Register;