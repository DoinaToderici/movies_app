import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

export default function Movie() {
  const { id } = useParams();
  const [singleMovie, setSingleMovie] = useState();

  useEffect(() => {
    const getMovie = async () => {
      const movieSnapshot = await getDoc(doc(db, "movies", id));

      if (movieSnapshot.exists()) {
        setSingleMovie(movieSnapshot.data());
      } else {
        console.log("movie doesn't exist");
      }
    };
    getMovie();
  }, []);

  return (
    <>
      {singleMovie && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <div>
              <img
                src={singleMovie.img}
                className="w-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-2xl mb-4 text-orange-700">
                {singleMovie.title}
              </h1>
              <span className="badge bg-warning mb-3">
                {singleMovie.country}
              </span>
              <p>{singleMovie.description}</p>
              <Link
                to="/"
                className="d-flex items-center mt-3 text-md hover:cursor-pointer text-gray-300 underline"
              >
                <HiOutlineArrowNarrowLeft className="mr-2" />
                Retour sur la page d'accueil
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
