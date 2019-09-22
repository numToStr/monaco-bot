import React from "react";
import { Grid, Box } from "@material-ui/core";
import EditorTabs from "./app/Editors/EditorTabs";
import ChatField from "./app/Chat/ChatField";
import MessageList from "./app/Message/MessageList";

const App = () => {
    return (
        <Box p={3} height="100%">
            <Box height="100%" clone>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <EditorTabs />
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            height="100%"
                            display="flex"
                            flexDirection="column"
                        >
                            <MessageList />
                            <ChatField />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default App;
