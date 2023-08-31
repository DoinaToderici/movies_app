import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/reusable/Footer";
import Menu from "./components/reusable/Menu";
import "../src/assets/App.css";
import { UserContextProvider } from "./context/UserContext";
function App() {
  return (
    <UserContextProvider>
      <div className="page">
        <Menu />
        <div className="container py-4">
          <Outlet />
        </div>
        <Footer />
      </div>
    </UserContextProvider>
  );
}

export default App;
