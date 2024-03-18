import "./index.css";
import App from "./App";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { GlobalContextProvider } from "./context/GlobalContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </StrictMode>
);
