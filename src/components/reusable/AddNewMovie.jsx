import React, { useContext, useState } from "react";
import { db } from "../../firebaseConfig"; // update with your path to firestore config
import { collection, addDoc, doc } from "firebase/firestore";
import { UserContext } from "../../context/UserContext";
import FormMovie from "./FormMovie";
const EMPTY_DATA_FORM = { title: "", description: "", country: "", img: "" };

export default function AddNewMovie() {
  const { update, setUpdate, user } = useContext(UserContext);
  const [newMovie, setNewMovie] = useState(EMPTY_DATA_FORM);

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const addMovie = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "movies"), {
      ...newMovie,
      userId: user.uid,
    });

    setNewMovie(EMPTY_DATA_FORM);
    // valuesAllInputs = EMPTY_DATA_FORM;
    setUpdate(!update);
  };

  return (
    <>
      <div className="my-5 col-8 mx-auto">
        <FormMovie
          setMovieToDB={addMovie}
          valuesAllInputs={newMovie}
          changeDataMovie={handleChange}
          textFormButton="Add new movie"
        />
      </div>
    </>
  );
}
