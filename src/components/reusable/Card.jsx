import React, { useContext } from "react";
import { Link } from "react-router-dom";
import notAvailable from "../../../public/not_available.jpeg";
import { UserContext } from "../../context/UserContext";
import { truncateText } from "../../helpers";

export default function Card({ item, onDelete, updateForm }) {
  const { isLogged } = useContext(UserContext);

  return (
    <div className="h-full shadow-xl rounded-md text-center p-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-slate-50 duration-50 ">
      <div>
        <img
          src={item.img ? item.img : notAvailable}
          className="w-auto  max-h-[200px] mx-auto mb-3 shadow-md rounded-md"
          alt={`Image de ${item.title}`}
        />
        <h2 className="mb-3 text-orange-500 text-xl">{item.title}</h2>
        {item.country && (
          <span className="mb-3 text-sm inline-block bg-orange-100 px-2 py-1 text-orange-400 rounded-full">
            {item.country}
          </span>
        )}

        <p className="mb-3 text-gray-500">
          {item.description && truncateText(item.description, 100)}
          {/* {item.description && item.description.length > 100 && ( */}
          <>
            <Link
              to={item.id}
              className="mb-3 text-xxs hover:cursor-pointer text-gray-300 underline"
            >
              Voir plus
            </Link>
          </>
          {/* )} */}
        </p>
      </div>

      {isLogged && (
        <div className="d-flex justify-content-center">
          <button
            onClick={() => {
              updateForm(item);
            }}
            className="mr-2 px-2 py-1 bg-yellow-500 text-white border-yellow-500 rounded-md text-sm shadow-sm  hover:-translate-y-1 hover:scale-102 hover:bg-yellow-600 duration-200"
          >
            Modify
          </button>
          <button
            onClick={() => {
              onDelete(item);
            }}
            className="px-2 py-1 bg-red-500 text-white border-red-500 rounded-md text-sm shadow-sm  hover:-translate-y-1 hover:scale-102 hovfer:bg-red-600 duration-200"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
