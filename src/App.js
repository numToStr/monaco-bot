import React from "react";
import { Grid } from "@material-ui/core";
import Editor from "./Editor/Editor";
import Bot from "./Bot/Bot";

const App = () => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <Editor />
            </Grid>
            <Grid item xs={6}>
                <Bot />
            </Grid>
        </Grid>
    );
};

export default App;
