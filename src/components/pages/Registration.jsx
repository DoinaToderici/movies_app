import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import FormConnexion from "../reusable/FormConnexion";

export default function Registration() {
  const { navigate, handleRegistration } = useContext(UserContext);
  const inputsPropsRegistration = [
    {
      label: "Name",
      id: "name",
    },
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
    handleRegistration(data);
    localStorage.setItem(
      "user",
      JSON.stringify({ name: data.name, id: data.id })
    );
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <FormConnexion
        onSubmit={handleSubmit}
        inputsProps={inputsPropsRegistration}
      />
      <div className="mt-3">
        <p to="/conection/login">
          Avez vous déjà un compte ?{" "}
          <span
            className="underline"
            onClick={() => navigate("/conection/login")}
          >
            Connextez-vous 🤗 !
          </span>
        </p>
      </div>
    </div>
  );
}