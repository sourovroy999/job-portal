import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.init';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';

const AuthProvider = ({children}) => {

    const[user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)

    }

    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleProvider=new GoogleAuthProvider()

    const googleSignIn=()=>{
      return signInWithPopup(auth, googleProvider)
      
    }

    const SignOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log('state captured', currentUser);

            if(currentUser?.email){
                const user={email: currentUser.email}

                axios.post('http://localhost:3000/jwt', user, {withCredentials: true})
                .then(res=>{
                    
                    console.log('login token',res.data)
                 setLoading(false)
                    
                }
                )
            }
            else{
                axios.post('http://localhost:3000/logout', {},{
                    withCredentials:true
                })
                .then(res=>{console.log('log out', res.data)
                    setLoading(false)
                }
                )
            }
            
        })

        return ()=>{
            unSubscribe()

        }
    })

    const authInfo={
        user,
        loading,
        createUser,
        signInUser,
        SignOutUser,
        googleSignIn
        


    }
    
    return (
     <AuthContext.Provider value={authInfo}>
        {children}
        <Toaster/>
     </AuthContext.Provider>
    );
};

export default AuthProvider;

