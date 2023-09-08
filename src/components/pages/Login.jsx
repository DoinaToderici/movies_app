import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import FormConnexion from "../reusable/FormConnexion";

export default function Login() {
  const { navigate, handleLogin } = useContext(UserContext);
  const inputsPropsLogin = [
    {
      label: "Email",
      id: "email",
    },
    {
      label: "Password",
      id: "password",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    handleLogin(data);
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm shadow-xl rounded-sm	bg-orange-50 p-6">
      <FormConnexion onSubmit={handleSubmit} inputsProps={inputsPropsLogin} />
      <div className="mt-3 text-center">
        <p>Vous dn'avez pas de compte ? </p>
        <p
          className="underline"
          onClick={() => navigate("/conection/registration")}
        >
          Inregistrez-vous 🤗 !
        </p>
      </div>
    </div>
  );
}
