import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ModalContextProvider from "./Context/modalContext.jsx";
import NotesContextProvider from "./Context/NotesContext.jsx";
import MobileViewContextProvider from "./Context/MobileViewContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MobileViewContextProvider>
      <ModalContextProvider>
        <NotesContextProvider>
          <App />
        </NotesContextProvider>
      </ModalContextProvider>
    </MobileViewContextProvider>
  </StrictMode>
);
