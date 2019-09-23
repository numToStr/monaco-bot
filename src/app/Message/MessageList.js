import React from "react";
import { Box, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import MessageItem from "./MessageItem";

const MessageList = ({ messageList = [] }) => {
    let list = (
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

    if (messageList.length) {
        list = messageList.map((node, index) => (
            <MessageItem key={index} node={node} />
        ));
    }

    return (
        <Box height="100%" px={1} my={2} overflow="auto">
            {list}
        </Box>
    );
};

const mapStateToProps = ({ messages }) => ({
    messageList: messages.nodes
});

export default connect(mapStateToProps)(MessageList);
