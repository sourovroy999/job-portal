import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.init';
import { Toaster } from 'react-hot-toast';

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

    const SignOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log('state captured', currentUser);
            
            setLoading(false)
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
        SignOutUser
        


    }
    
    return (
     <AuthContext.Provider value={authInfo}>
        {children}
        <Toaster/>
     </AuthContext.Provider>
    );
};

export default AuthProvider;

