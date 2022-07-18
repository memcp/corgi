import React from "react";
import ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";
import { store } from "./redux/store";


const root = ReactDOMClient.createRoot(document.querySelector("#root"));
root.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Provider>
);