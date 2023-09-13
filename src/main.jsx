import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import LoginProvider from "./contexts/LoginContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <LoginProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LoginProvider>
);
