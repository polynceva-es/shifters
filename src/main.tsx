import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { store } from "./services/store.tsx";

import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
