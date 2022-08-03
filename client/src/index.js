import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./components/";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </GlobalStyles>
    </React.StrictMode>
);
