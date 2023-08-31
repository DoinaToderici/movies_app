import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";

export default function Movie() {
  const { id } = useParams();
  const [singleMovie, setSingleMovie] = useState();

  useEffect(() => {
    const getMovie = async () => {
      const movieSnapshot = await getDoc(doc(db, "movies", id));
      if (movieSnapshot.exists()) {
        return setSingleMovie(movieSnapshot.data());
      } else {
        console.log("movie doesn't exist");
      }
    };
    getMovie();
  }, []);

  return (
    <>
      {singleMovie && (
        <div className="row">
          <div className="col-6">
            <div>
              <img
                src={singleMovie.img}
                className="w-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-6">
            <div>
              <h1 className="mb-3">{singleMovie.title}</h1>
              <span className="badge bg-warning mb-5">
                {singleMovie.country}
              </span>
              <p>{singleMovie.description}</p>
              <Link to="/" className="text-warning">
                Retour sur la page d'accueil
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
