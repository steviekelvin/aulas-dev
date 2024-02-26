import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/imports.scss";
import "./styles/variables.scss";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import TemaComponent from "./components/tema/index.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <TemaComponent>
    <App/>
  </TemaComponent>
);
