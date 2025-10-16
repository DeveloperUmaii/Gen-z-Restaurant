
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
//  
    const [user, setUser] = useState(null)

    const registrationUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    const googlelogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
       return signOut(auth)
    }

    const contextInfo = {
        registrationUser,
        logInUser,
        user,
        setUser,
        googlelogIn,
        logOut,

    }

    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                console.log(currentUser);
            } else {
                     setUser(currentUser);
                     console.log('log out use Effect')
            }
                });
                return () => {
                    unSubscribe()
                }
    }, [])

    return (
            <div>
            <AuthContext.Provider value={contextInfo}>
                {children}
            </AuthContext.Provider>
            </div>
    );
};

export default AuthProvider;