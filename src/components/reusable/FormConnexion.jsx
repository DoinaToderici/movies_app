import React from "react";
import Input from "./Input";

export default function FormConnexion({ onSubmit, inputsProps }) {
  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      {inputsProps.map(({ label, id }) => {
        return (
          <Input
            key={id}
            label={label}
            id={id}
            name={id}
            type={id}
            autoComplete={id}
            required
          />
        );
      })}

      <div>
        <button
          type="submit"
          className="flex w-50 mx-auto justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}
