import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, updateProfile } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)



const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider()
    const GitProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }


    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, GitProvider)
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)


    }
    const logout = () => {
        setLoading(true)
        signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }


    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        logout,
        login,
        googleLogin,
        setUser,
        githubLogin


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>

    )
};

export default AuthProvider;