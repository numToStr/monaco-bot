import React from "react";
import { Box } from "@material-ui/core";
import { connect } from "react-redux";
import MessageItem from "./MessageItem";

const MessageList = ({ messageList }) => {
    const list = messageList.map((node, index) => (
        <MessageItem key={index} node={node} />
    ));

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
