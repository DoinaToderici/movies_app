import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";

export default function Reviews() {
  const [reviews, setReviews] = useState();
  const [error, setError] = useState();
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const baseURL = "https://jsonplaceholder.typicode.com/comments";

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <>
      {reviews &&
        reviews.slice(0, 5).map((item, key) => {
          return (
            <Accordion open={open === item.id} key={key}>
              <AccordionHeader
                onClick={() => handleOpen(item.id)}
                className="drop-shadow-lg"
              >
                <p>
                  <b>{item.name}</b>
                </p>
              </AccordionHeader>
              <AccordionBody>
                <p> {item.body}...</p>
                <br />
                <span>{item.email}</span>
              </AccordionBody>
            </Accordion>
          );
        })}
    </>
  );
}
