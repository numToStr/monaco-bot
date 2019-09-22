import React from "react";
import { Grid } from "@material-ui/core";
// import MessageArea from "./Messages/MessageArea";
// import { ChatBot } from "./ChatBot";
import EditorTabs from "./app/Editors/EditorTabs";

const App = () => {
    // const messageList = useMessageContext();
    // const messageDispatch = useMessageDispatch();

    // const Bot = new ChatBot(messageDispatch);
    // const onSubmit = message => {
    //     if (!message || !editorCode) {
    //         return;
    //     }

    //     // eslint-disable-next-line no-new-func
    //     Function(`
    //       "use strict";

    //       return ( ${editorCode} )
    //     `)()(Bot, message);

    //     messageDispatch({
    //         type: "create",
    //         payload: {
    //             text: message,
    //             createdAt: new Date(),
    //             createdBy: "user"
    //         }
    //     });
    // };

    return (
        <Grid
            container
            style={{
                height: "100%"
            }}
            // spacing={2}
        >
            <Grid item xs={6}>
                <EditorTabs />
            </Grid>
            <Grid item xs={6}>
                {/* <MessageArea
                    messageList={messageList.values}
                    onSubmit={onSubmit}
                /> */}
            </Grid>
        </Grid>
    );
};

export default App;
