import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "./config/theme.config";
import configureStore from "./store/index.store";
import { MessagesProvider } from "./MessageContext";
import App from "./App";

const store = configureStore();

const Root = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <MessagesProvider>
                    <CssBaseline />
                    <App />
                </MessagesProvider>
            </ThemeProvider>
        </Provider>
    );
};

export default Root;
