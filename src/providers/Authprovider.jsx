import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import hookAxiosLocal from "../hooks/hookAxiosLocal";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // loading state add kora holo
  const [loading, setLoading] = useState(true); 
  const backEndServerLinkLocal = hookAxiosLocal();

  const registrationUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googlelogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const profileUpdate = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        // ১. সার্ভার থেকে টোকেন নেওয়া & Store kora
        const userDetails = { email: currentUser.email };
        backEndServerLinkLocal.post('/jwt', userDetails)
        .then((res) => {
          if (res.data.token) {
            // ২. লোকাল স্টোরেজে টোকেন রাখা
            localStorage.setItem("access-token", res.data.token);
            // console.log("Token Received and Saved:", res.data.token);
            setLoading(false); // token pawar por loading false
          }
        });
      } else {
        // ৩. লগআউট করলে লোকাল স্টোরেজ থেকে টোকেন মুছে ফেলা
        localStorage.removeItem("access-token");
        setLoading(false); // user na thakle loading false
      }

      // console.log(currentUser);
      // console.log("log out use Effect");
    });
    return () => {
      unSubscribe();
    };
  }, [backEndServerLinkLocal]);

  const contextInfo = {
    registrationUser,
    logInUser,
    user,
    setUser,
    loading, // loading return kora holo
    googlelogIn,
    logOut,
    profileUpdate,
  };

  return (
    <div>
      <AuthContext.Provider value={contextInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;