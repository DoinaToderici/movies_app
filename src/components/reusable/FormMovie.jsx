import React from "react";
import { Form } from "react-bootstrap";

export default function FormMovie({
  addMovie,
  valuesAllInputs,
  setMovieLocal,
}) {
  const change = (e) => {
    setMovieLocal({ ...valuesAllInputs, [e.target.name]: e.target.value });
    // (valuesAllInputs[e.target.name] = e.target.value)
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control
          onChange={(e) => change(e)}
          value={valuesAllInputs.title}
          type="text"
          placeholder="Titre du film"
          name="title"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          onChange={(e) => change(e)}
          value={valuesAllInputs.description}
          as="textarea"
          placeholder="Description du film..."
          name="description"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          onChange={(e) => change(e)}
          value={valuesAllInputs.img}
          type="text"
          placeholder="Image du film"
          name="img"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          onChange={(e) => change(e)}
          value={valuesAllInputs.country}
          type="text"
          placeholder="Pays du film"
          name="country"
        />
      </Form.Group>
      <button
        onClick={addMovie}
        className="btn btn-warning d-flex align-items-center text-white"
      >
        Ajouter un nouveau film
      </button>
    </Form>
  );
}
