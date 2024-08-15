import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false)
    
    // user register
    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user profile
    const updateUserProfile = (name, photo, email) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName : name,
            email : email,
            photoURL: photo
        })
        .then(()=>{
            console.log("your account create successfully");
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }

    // login
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    // logout
    const logOut = () => {
        return signOut(auth)
    } 

    // user state checking
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[reload])
    
    const authInfo = {
        register,
        user,
        loading,
        login,
        logOut,
        setReload,
        updateUserProfile
    }
    return (<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>);
};


AuthProvider.propTypes = {
    children: PropTypes.node
}


export default AuthProvider
