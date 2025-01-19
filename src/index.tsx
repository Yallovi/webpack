import { StrictMode, Suspense } from 'react'
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

import App from "./app/App";

import './shared/config/i18n/i18n'



ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <Suspense fallback="">
                        <App/>
                    </Suspense>
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StrictMode>
);