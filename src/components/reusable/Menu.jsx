import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function Menu() {
  const { isLogged, handleLogOut } = useContext(UserContext);
  return (
    <div
      className="bg-warning py-3"
      style={{
        position: "sticky",
        top: "0",
        width: "100vw",
      }}
    >
      <nav className="navbar navbar-expand container navbar-dark px-3">
        <ul className="navbar-nav">
          <li className="nav-item me-3">
            <Link to="/" className="text-white">
              Accueil
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link to="/about" className="text-white">
              Qui sommes-nous
            </Link>
          </li>
          {isLogged() ? (
            <li className="nav-item">
              <Link
                className="text-white"
                onClick={() => {
                  handleLogOut();
                }}
              >
                Deconnexion
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="/conection/registration" className="text-white">
                Conection
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
