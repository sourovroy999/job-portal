
import Lottie from 'lottie-react';
import loginlottie from '../../assets/lottie/loginLottie.json'
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router';

const SignIn = () => {

    const {signInUser}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()

    const from=location.state || "/"
    // const from=location.state?.from?.pathname || "/"


    const handleSignIn=(e)=>{
            e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
         console.log(email,password);
         
         signInUser(email,password)
         .then(result=>{
            console.log(result.user);
            toast.success('Log in Successfuly')
            navigate(from, {replace:true})
         })
         .catch(error=>{
            toast.error(error.message)
         })

    }

    return (
         <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <div className="text-center md:w-96 lg:text-left ">

      <Lottie  animationData={loginlottie}></Lottie>
    </div>


    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-5xl font-bold m-8 text-center">Sign In now!</h1>

      <form onSubmit={handleSignIn} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          
         
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Log In</button>
        </fieldset>
      </form>

    </div>
  </div>
</div>
    );
};

export default SignIn;