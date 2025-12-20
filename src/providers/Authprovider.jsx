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
  //
  const [user, setUser] = useState(null);
  const backEndServerLinkLocal = hookAxiosLocal()

  const registrationUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googlelogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const profileUpdate = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  //.then(() => {
  //   // Profile updated!
  //   // ...
  // }).catch((error) => {
  //   // An error occurred
  //   // ...
  // });
  const contextInfo = {
    registrationUser,
    logInUser,
    user,
    setUser,
    googlelogIn,
    logOut,
    profileUpdate,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // ১. সার্ভার থেকে টোকেন নেওয়া & Store kora
        const userDetails = { email: currentUser.email };
        backEndServerLinkLocal.post('/jwt', userDetails)
        .then((res) => {
          if (res.data.token) {
            // ২. লোকাল স্টোরেজে টোকেন রাখা
            localStorage.setItem("access-token", res.data.token);
            console.log("Token Received and Saved:", res.data.token);
          }
        });
      } else {
        // ৩. লগআউট করলে লোকাল স্টোরেজ থেকে টোকেন মুছে ফেলা
        localStorage.removeItem("access-token");
      }
      // if (currentUser) {
      //   //Gnpm run devet Token & Store
      // } else {
      //   //Remove Token:if token store in client side _Local storage, caching, in memory
      // }

      console.log(currentUser);
      console.log("log out use Effect");
    });
    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <div>
      <AuthContext.Provider value={contextInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
