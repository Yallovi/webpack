import { StrictMode } from 'react'
import * as ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";



ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App/>
  </StrictMode>
);