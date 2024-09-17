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
    const useWindowDimensions = () => {
        const [windowDimensions, setWindowDimensions] = useState({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        useEffect(() => {
            const handleResize = () => {
                setWindowDimensions({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return windowDimensions;
    };
    const deviceWidth = useWindowDimensions()


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
        githubLogin,
        deviceWidth


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>

    )
};

export default AuthProvider;