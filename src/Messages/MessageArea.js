import React from "react";
import { Box } from "@material-ui/core";
import ChatField from "../components/ChatField";
import MessageList from "./MessageList";

const MessageArea = ({ messageList, onSubmit }) => {
    return (
        <Box
            height="100%"
            p={2}
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
        >
            <MessageList list={messageList} />
            <ChatField onSubmit={onSubmit} />
        </Box>
    );
};

export default MessageArea;
