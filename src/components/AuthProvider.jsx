import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);




  const createUuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const userLogOut = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log("user successfull login", currentUser)
      setUser(currentUser)
    })

    return () => {
      unSubscribe()
    }
  }, [])


  const authInfo = {
    user,
    createUuser,
    loginUser,
    userLogOut,

  };

  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;
