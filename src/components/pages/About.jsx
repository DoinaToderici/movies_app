import React from "react";
import ReactPlayer from "react-player";

export default function About() {
  return (
    <div>
      <h1 className="text-2xl mb-6 text-center text-orange-700">
        <b>Qui sommes-nous ?</b>
      </h1>

      <div className="grid grid-col-2 grid-flow-col gap-4">
        <div>
          <div>
            <ReactPlayer
              style={{ maxWidth: "100%" }}
              url={"https://youtu.be/Ywq9FUrLeUo?t=112"}
              controls={true}
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl text-orange-700"> Bonjour et bien venue !</h3>
          <p className="text-orange-400">
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
