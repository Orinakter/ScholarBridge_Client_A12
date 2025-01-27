import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const authorizedContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unRegister = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = {
          name: currentUser?.displayName,
          email: currentUser?.email,
          photo: currentUser?.photoURL,
        };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access_token", res.data.token);
          }
        });

        // Use setTimeout properly
        setTimeout(async () => {
          try {
            const res = await axiosPublic.post("/users", userInfo);
          } catch (error) {
            console.error("Error posting user info:", error);
          }
        }, 2000);
      } else {
        localStorage.removeItem("access_token");
      }

      setLoading(false);
    });

    return () => {
      unRegister();
    };
  }, []);

  user;

  const userProfileUpdate = (name, photo) => {
    const userData = {
      displayName: name,
      photoURL: photo,
    };
    return updateProfile(auth.currentUser, userData);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider).then((res) => {
      console.log(res);
    });
  };
  console.log(user);
  const authInfo = {
    registerUser,
    loginUser,
    user,
    userProfileUpdate,
    logOut,
    loading,
    handleGoogleLogin,
  };
  return (
    <authorizedContext.Provider value={authInfo}>
      {children}
    </authorizedContext.Provider>
  );
};

export default AuthProvider;
