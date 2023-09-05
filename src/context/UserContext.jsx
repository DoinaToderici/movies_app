import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [update, setUpdate] = useState(true);

  const handleRegistration = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const userDB = userCredential.user;
        setUser(userDB);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleLogin = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        const userDB = userCredential.user;
        setUser(userDB);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleLogOut = () => {
    setUser({});
    localStorage.clear();
    navigate("/conection");
  };

  function isLogged() {
    return user && Object.keys(user).length > 0;
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

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
