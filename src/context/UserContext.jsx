import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [update, setUpdate] = useState(true);

  //  ******* USER DATA SESSION ************  //

  // Function connexion
  const conection = async (methodType, data) => {
    try {
      const userCredential = await methodType(auth, data.email, data.password);
      const userDB = userCredential.user;
      setUser(userDB);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  // Function persistente to Login/Registration
  const persistence = (methodType, data) => {
    setPersistence(auth, browserSessionPersistence)
      .then(conection(methodType, data))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };

  const handleRegistration = (data) => {
    persistence(createUserWithEmailAndPassword, data);
  };

  const handleLogin = (data) => {
    persistence(signInWithEmailAndPassword, data);
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        setUser(userAuth);
      }
    });
  }, []);

  const handleLogOut = () => {
    setUser(undefined);
  };

  function isLogged() {
    return user && Object.keys(user).length > 0;
  }

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setUser(foundUser);
  //   }
  // }, []);

  const dataContext = {
    user,
    setUser,
    handleRegistration,
    handleLogin,
    isLogged,
    handleLogOut,
    update,
    setUpdate,
    navigate,
  };

  return (
    <UserContext.Provider value={dataContext}>{children}</UserContext.Provider>
  );
};
