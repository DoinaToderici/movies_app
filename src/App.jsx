import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/reusable/Footer";
import Menu from "./components/reusable/Menu";
import "../src/assets/App.css";
import { LoginContextProvider } from "./context/LoginContext";
function App() {
  return (
    <LoginContextProvider >
      <div className="page">
      <Menu />
      <div className="container py-4">
        <Outlet />
      </div>
      <Footer />
      </div>
    </LoginContextProvider>
  );
}

export default App;
