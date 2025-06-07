import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import AuthContext from '../../context/AuthContext/AuthContext';
import toast from 'react-hot-toast';

import jobLogo from '../../assets/logoIcon.png'

const Navbar = () => {

  const {user, SignOutUser}=useContext(AuthContext)

  const handleSignOut=()=>{
    SignOutUser()
    .then(()=>{
      toast.success('sign out sucessfuly')
    })

    .catch(error=>{

      toast.error(error.message)
    })
  }

    const links=<>
    <li> <NavLink to={'/'}>HOME</NavLink></li>
   
    <li><a>Item 1</a></li>
    <li><a>Item 3</a></li>
    
    </>

    return (
        <div className="navbar md:px-28 bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link to={'/'} className="flex  text-xl"><img className='w-8 h-8' src={jobLogo} alt="" /> JobPortal</Link>
  </div>
  <div className="navbar-center content-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>



  <div className="navbar-end gap-1 md:gap-4">

    {
  user?
   <>
    <button onClick={handleSignOut} className='btn' >SignOut</button>
   </>
  
  : <>
  
    <Link className='btn btn-sm md:btn-md' to={'/register'}>Register</Link>
    <Link  to={'/signIn'} className="btn btn-sm md:btn-md">Sign In</Link>
  </>
}
  </div>
</div>
    );
};

export default Navbar;