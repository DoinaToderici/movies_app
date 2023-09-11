import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function Menu() {
  const { isLogged, handleLogOut } = useContext(UserContext);
  return (
    <div
      className="bg-orange-500  py-3"
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
              Home
            </Link>
          </li>
          <li className="nav-item me-3">
            <Link to="/about" className="text-white">
              About
            </Link>
          </li>
          {isLogged() ? (
            <li className="nav-item">
              <Link
                to="/conection/login"
                className="text-white"
                onClick={() => {
                  handleLogOut();
                }}
              >
                Logout
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="/conection/login" className="text-white">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
