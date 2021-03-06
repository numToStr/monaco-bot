import React from "react";
import { Grid, Box } from "@material-ui/core";
import Editor from "./app/Editor/Editor";
import ChatField from "./app/Chat/ChatField";
import MessageList from "./app/Message/MessageList";
import FullHeight from "./components/FullHeight";

const App = () => {
    return (
        <Box p={3} height="100%">
            <FullHeight>
                <Grid container spacing={2}>
                    <FullHeight>
                        <Grid item xs={6}>
                            <Editor />
                        </Grid>
                    </FullHeight>
                    <FullHeight>
                        <Grid item xs={6}>
                            <Box
                                height="100%"
                                display="flex"
                                flexDirection="column"
                                bgcolor="#222"
                                borderRadius="borderRadius"
                                px={4}
                                pb={4}
                                pt={2}
                            >
                                <MessageList />
                                <ChatField />
                            </Box>
                        </Grid>
                    </FullHeight>
                </Grid>
            </FullHeight>
        </Box>
    );
};

export default App;
