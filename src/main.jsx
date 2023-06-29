import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import About from "./components/pages/About.jsx";
import Accueil from "./components/pages/Accueil.jsx";
import Connexion from "./components/pages/Connexion.jsx";
import Legal from "./components/pages/Legal.jsx";
import Movie from "./components/pages/Movie.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path=":id" element={<Movie />} />
        <Route path="/login" element={<Connexion />} />
        <Route path="/legal" element={<Legal />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
