import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Editor from "./Editor/Editor";
import MessageArea from "./Messages/MessageArea";
import { useMessageContext, useMessageDispatch } from "./MessageContext";
import { ChatBot } from "./ChatBot";

const App = () => {
    const [editorCode, setEditorCode] = useState("");
    const messageList = useMessageContext();
    const messageDispatch = useMessageDispatch();

    const Bot = new ChatBot(messageDispatch);

    const onCodeRun = code => {
        setEditorCode(code);
    };

    const onSubmit = message => {
        if (!message || !editorCode) {
            return;
        }

        // eslint-disable-next-line no-new-func
        Function(`
          "use strict";

          return ( ${editorCode} )
        `)()(Bot, message);

        messageDispatch({
            type: "create",
            payload: {
                text: message,
                createdAt: new Date(),
                createdBy: "user"
            }
        });
    };

    return (
        <Grid
            container
            style={{
                height: "100%"
            }}
            spacing={2}
        >
            <Grid
                item
                xs={6}
                style={{
                    position: "relative"
                }}
            >
                <Editor onSubmit={onCodeRun} />
            </Grid>
            <Grid item xs={6}>
                <MessageArea
                    messageList={messageList.values}
                    onSubmit={onSubmit}
                />
            </Grid>
        </Grid>
    );
};

export default App;
