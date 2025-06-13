import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router";

const axiosInstance=axios.create({
    baseURL:'http://localhost:3000',
    withCredentials:true
})

const UseAxiosSecure = () => {

    const {SignOutUser}=UseAuth()
    const navigate=useNavigate()

    useEffect(()=>{
        axiosInstance.interceptors.response.use(response=>{
            return response;
        },error=>{
            console.log('error caught in interceptor', error);

            if(error.status === 401 || error.status === 403){
                console.log('need to log out the user');
                SignOutUser()
                .then(()=>{
                    console.log('logged out user');
                    navigate('/signIn')
                    
                })
                .catch(error=> console.log(error))
                
            }


            return Promise.reject(error)
            
        })
        
    },[SignOutUser, navigate])

    return axiosInstance;
};

export default UseAxiosSecure;