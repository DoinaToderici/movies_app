import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { db } from "../../firebaseConfig"; // update with your path to firestore config
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import FormMovie from "./FormMovie";
import { Link } from "react-router-dom";

export default function ListMovie() {
  const { update, setUpdate, isLogged } = useContext(UserContext);
  const [listMovie, setListMovie] = useState([]);

  // les states for update
  const [idLocal, setIdLocal] = useState();
  const [movieLocal, setMovieLocal] = useState([]);

  // GET ALL MOVIES
  useEffect(() => {
    const getMovie = async () => {
      const movieSnapshot = await getDocs(collection(db, "movies"));
      const movieList = movieSnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setListMovie(movieList);
    };
    getMovie();
  }, [update]);

  // DELETE MOVIE
  const deleteMovie = async (movie) => {
    const movieRef = doc(db, "movies", movie.id);
    await deleteDoc(movieRef);
    setUpdate(!update);
  };

  // UPDATE MOVIE
  function showUpdateForm(item) {
    setIdLocal(item.id);
    setMovieLocal(item);
  }

  function resetValueForm(e) {
    const cloneMovieLocal = structuredClone(movieLocal);
    cloneMovieLocal[e.target.name] = e.target.value;
    setMovieLocal(cloneMovieLocal);
  }

  const setUpdatedMovie = async (e) => {
    e.preventDefault();
    const movieRef = doc(db, "movies", idLocal);
    await updateDoc(movieRef, movieLocal);
    setUpdate(!update);
    setIdLocal(0);
  };

  function truncateText(str) {
    return str.length > 100 ? str.substring(0, 100) + "..." : str;
  }

  return (
    <div className="row">
      {listMovie &&
        listMovie.map((item, key) => {
          return (
            <div className="col-4 mb-4" key={key}>
              {item.id === idLocal ? (
                <FormMovie change={resetValueForm} addMovie={setUpdatedMovie} />
              ) : (
                <div className="border border-4 text-center p-3 rounded h-100 d-flex flex-column justify-content-between">
                  <div>
                    <img
                      src={item.img}
                      className="w-50 mb-3"
                      alt={`Image de ${item.title}`}
                    />
                    <h2 className="text-warning">{item.title}</h2>
                    <span className="badge bg-warning mb-3">
                      {item.country}
                    </span>
                    <p className="mb-0">
                      {truncateText(item.description)}{" "}
                      <Link to={item.id} className="small text-warning mb-3">
                        Voir plus
                      </Link>
                    </p>
                  </div>

                  {isLogged() && (
                    <div className="d-flex justify-content-center">
                      <button
                        onClick={() => {
                          showUpdateForm(item);
                        }}
                        className="btn btn-warning py-1 px-2 me-3"
                      >
                        Modify
                      </button>
                      <button
                        onClick={() => {
                          deleteMovie(item);
                        }}
                        className="btn btn-danger py-1 px-2"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}
