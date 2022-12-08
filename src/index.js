import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "../src/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

//here we need to import Provider and wrap the app component in order to let the react know it now works in redux environment
// one of the provider props is store, so we need to pass it as a prop called {store} and also import it
