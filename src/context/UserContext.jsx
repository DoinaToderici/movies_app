import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

export const UserContext = createContext();

export const UserContextProvider = function ({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [update, setUpdate] = useState(true);

  const handleAuthentifcation = (data) =>
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const userDB = userCredential.user;
        setUser(userDB);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });

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

  function handleLogout() {
    setUser({});
    localStorage.clear();
    navigate("/login");
  }

  const dataContext = {
    user,
    setUser,
    isLogged,
    handleLogout,
    update,
    setUpdate,
    handleAuthentifcation,
  };

  return (
    <UserContext.Provider value={dataContext}>{children}</UserContext.Provider>
  );
};
