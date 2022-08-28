import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./components/";
import AuthProvider from "./store/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <AuthProvider>
                <App />
            </AuthProvider>
        </GlobalStyles>
    </React.StrictMode>
);
