import React, { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../../config";
import { useNavigate } from "react-router-dom";

export default function Connexion() {
  const { login } = useContext(LoginContext);
  const navigation = useNavigate();

  const googleHandler = async () => {
    provider.setCustomParameters({ prompt: "select_account" });
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        login(user);
        navigation("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div className="text-center">
      <h1>Bonjour 🤗</h1>
      <h3>Connectez-vous</h3>
      <button
        className="btn btn-success col-3 mx-auto mt-4"
        onClick={googleHandler}
      >
        Connexion
      </button>
    </div>
  );
}
