import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/index";
import axios from "axios";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { Auth0Provider } from '@auth0/auth0-react';

/** setup axios */
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] = `Bearer ${
  import.meta.env.VITE_SOME_KEY
}`;


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    domain={import.meta.env.VITE_DOMAIN_KEY}
    clientId={import.meta.env.VITE_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      </Auth0Provider>,  
  </React.StrictMode>
);
