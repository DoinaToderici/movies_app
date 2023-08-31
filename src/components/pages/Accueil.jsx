import React, { useContext } from "react";
import ListMovie from "../reusable/ListMovie";
import { UserContext } from "../../context/UserContext";
import AddNewMovie from "../reusable/AddNewMovie";

export default function Accueil() {
  const { isLogged } = useContext(UserContext);
  return (
    <div>
      {isLogged() && <AddNewMovie />}
      <ListMovie />
    </div>
  );
}
