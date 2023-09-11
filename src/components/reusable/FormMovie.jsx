import React from "react";
import { Form } from "react-bootstrap";
import Input from "./Input";

export default function FormMovie({
  setMovieToDB,
  valuesAllInputs,
  changeDataMovie,
  textFormButton,
}) {
  const inputsPropsFormMovie = [
    {
      type: "text",
      placeholder: "Title movie",
      name: "title",
    },
    {
      type: "textarea",
      placeholder: "Description movie...",
      name: "description",
    },

    {
      type: "text",
      placeholder: "Image movie...",
      name: "img",
    },
    {
      type: "text",
      placeholder: "Country movie...",
      name: "country",
    },
  ];

  return (
    <Form onSubmit={setMovieToDB}>
      {inputsPropsFormMovie.map(({ type, placeholder, name }, key) => {
        return (
          <Form.Group
            key={key}
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Input
              onChange={changeDataMovie}
              value={valuesAllInputs[name]}
              type={type}
              placeholder={placeholder}
              name={name}
            />
          </Form.Group>
        );
      })}
      <button className="py-2 px-3 bg-yellow-500 text-white border-yellow-500 rounded-md text-md shadow-sm  hover:-translate-y-1 hover:scale-102 hover:bg-yellow-600 duration-200">
        {textFormButton}
      </button>
    </Form>
  );
}
