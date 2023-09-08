import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { db } from "../../firebaseConfig"; // update with your path to firestore config
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import FormMovie from "./FormMovie";

import Card from "./Card";

export default function ListMovie() {
  const { update, setUpdate, user } = useContext(UserContext);
  // state get movies
  const [listAllMovie, setListAllMovie] = useState([]);
  const [moviesPerSession, setMoviesPerSession] = useState([]);
  const listMovies = user ? moviesPerSession : listAllMovie;
  // les states for update
  const [idLocal, setIdLocal] = useState();
  const [movieLocal, setMovieLocal] = useState([]);

  // GET  MOVIES PER SESSION
  useEffect(() => {
    if (user) {
      const getMoviePerSession = async () => {
        const q = query(
          collection(db, "movies"),
          where("userId", "==", user.uid)
        );
        const querySnapshot = await getDocs(q);
        let movies = [];
        querySnapshot.forEach((doc) => {
          movies.push({ ...doc.data(), docId: doc.id });
        });
        setMoviesPerSession(movies);
      };
      getMoviePerSession();
    }
  }, [update, user]);

  // GET ALL MOVIES
  useEffect(() => {
    const getAllMovies = async () => {
      const movieSnapshot = await getDocs(collection(db, "movies"));
      const movieList = movieSnapshot.docs.map((doc) => {
        return { ...doc.data(), docId: doc.id };
      });
      await setListAllMovie(movieList);
    };

    getAllMovies();
  }, [update]);

  // DELETE MOVIE
  const deleteMovie = async (movie) => {
    const movieRef = doc(db, "movies", movie.docId);
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
      {listMovies &&
        listMovies.map((item, key) => {
          return (
            <div className="min-h-full" key={key}>
              {idLocal === item.id ? (
                <FormMovie change={resetValueForm} addMovie={setUpdatedMovie} />
              ) : (
                <Card
                  item={item}
                  onDelete={deleteMovie}
                  updateForm={showUpdateForm}
                />
              )}
            </div>
          );
        })}
    </div>
  );
}
