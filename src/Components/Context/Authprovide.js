import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/Firebase.config";

export const Authcontext = createContext();
const auth = getAuth(app);

const Authprovide = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  const createuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  const googlesignin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log(currentuser);
      setuser(currentuser);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authinfo = {
    user,
    loading,
    createuser,
    login,
    logout,
    googlesignin,
  };

  return (
    <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
  );
};

export default Authprovide;
