import React, { useContext } from "react";
import ListMovie from "../reusable/ListMovie";
import { UserContext } from "../../context/UserContext";
import Popup from "../reusable/Popup";
import Reviews from "../reusable/Reviews";

export default function Accueil() {
  const { isLogged } = useContext(UserContext);
  return (
    <div>
      {isLogged() && <Popup />}

      <hr className="my-4" />

      <ListMovie />
      <hr className="my-4" />
      <Reviews />
    </div>
  );
}
