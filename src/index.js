import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FormContextProvider } from "./context/FormContext";
import { LanguageProvider } from "./context/LanguageContext";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FormContextProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </FormContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
