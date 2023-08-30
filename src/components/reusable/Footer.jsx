import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  function goToLegal() {
    navigate("/legal");
  }
  return (
    <div className="bg-dark p-3">
      <p
        className="small text-white text-center mx-auto my-0"
        onClick={goToLegal}
      >
        Mentions légales
      </p>
    </div>
  );
}
