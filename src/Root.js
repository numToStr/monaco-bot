import React from "react";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./config/theme.config";
import configureStore from "./store/index.store";
import App from "./App";

const store = configureStore();

const HotApp = hot(module)(App);

const Root = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <HotApp />
            </ThemeProvider>
        </Provider>
    );
};

export default Root;
