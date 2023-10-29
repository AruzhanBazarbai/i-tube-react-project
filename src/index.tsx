import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";
import { serviceWorkerRegistration } from './utils';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

serviceWorkerRegistration.register();
reportWebVitals();
