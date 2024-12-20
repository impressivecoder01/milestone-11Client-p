import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut, 
  updateProfile
} from "firebase/auth";
import auth from "../Firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signOutUser = () => {
    setLoading(true);
    return signOut (auth)
  }

  const socialLogin = () => {
    return signInWithPopup(auth, provider)
  }

  const updateUserProfile = (updatedData) => {
    setLoading(true)
    return updateProfile(auth.currentUser, updatedData)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    singInUser,
    signOutUser,
    updateUserProfile,
    socialLogin
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
