import { StrictMode } from 'react'
import * as ReactDOM from "react-dom/client";

import App from "./app/App";
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'



ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
    <App/>
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);