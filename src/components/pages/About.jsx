import React from "react";
import ReactPlayer from "react-player";

export default function About() {
  return (
    <div>
      <h1 className="text-red-600 underline">
        <b>Qui sommes-nous ?</b>
      </h1>
      <div className="row">
        <div className="col-6">
          <div>
            <ReactPlayer
              style={{ maxWidth: "100%" }}
              url={"https://youtu.be/Ywq9FUrLeUo?t=112"}
              controls={true}
            />
          </div>
        </div>
        <div className=" col-6">
          <h2> BONJOUR, ET BIENVENUE !</h2>
          <p>
            Offrir aux cinéphiles une source pratique et rapide d'informations
            sur le cinéma, tout en facilitant l'accès aux salles, c'est la
            mission d'AlloCiné. AlloCiné peut être joint 24h/24 en quelques
            secondes par téléphone au 0.892.892.892 *, sur Internet
            (www.allocine.fr) ou votre smartphone et votre tablette. Pour toutes
            autres questions ou remarques consultez la rubrique contact. * 0,34
            euros la minute
          </p>
        </div>
      </div>
    </div>
  );
}
