import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { MessagesProvider } from "./MessageContext";
import { CssBaseline } from "@material-ui/core";

ReactDOM.render(
    <MessagesProvider>
        <CssBaseline />
        <App />
    </MessagesProvider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
