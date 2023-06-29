import React, { useContext } from "react";
import ListMovie from "../reusable/ListMovie";
import { LoginContext } from "../../context/LoginContext";
import AddNewMovie from "../reusable/AddNewMovie";

export default function Accueil() {
  const { isLogged } = useContext(LoginContext);
  return (
    <div>
      {isLogged() && <AddNewMovie />}
      <ListMovie />
    </div>
  );
}
