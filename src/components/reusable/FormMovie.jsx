import React from "react";
import { Form } from "react-bootstrap";

export default function FormMovie({ change, addMovie }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control
          onChange={change}
          type="text"
          placeholder="Titre du film"
          name="title"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          onChange={change}
          as="textarea"
          rows={3}
          placeholder="Description du film..."
          name="description"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          onChange={change}
          type="text"
          placeholder="Image du film"
          name="img"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          onChange={change}
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
