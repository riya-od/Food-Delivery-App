import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CardBody from "./components/CardBody";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
