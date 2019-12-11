import React, { useCallback } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import MessageItem from "./MessageItem";

const MessageList = () => {
    const msgList = useSelector(store => store.messages.nodes);

    const list = useCallback(() => {
        if (!msgList.length) {
            return (
                <Box
                    mt={5}
                    mx={10}
                    p={2}
                    borderRadius="borderRadius"
                    bgcolor="background.paper"
                >
                    <Typography align="center">
                        Type a message to start the conversation
                    </Typography>
                </Box>
            );
        }

        return msgList.map((node, index) => (
            <MessageItem key={index} node={node} />
        ));
    }, [msgList]);

    return (
        <Box height="100%" px={1} my={2} overflow="auto">
            {list()}
        </Box>
    );
};

export default MessageList;
