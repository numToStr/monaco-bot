import React from "react";
import { Box } from "@material-ui/core";
import { connect } from "react-redux";
import MessageItem from "./MessageItem";

const MessageList = ({ messageList }) => {
    const list = messageList.map((node, index) => (
        <MessageItem key={index} node={node} />
    ));

    return <Box flexGrow={1}>{list}</Box>;
};

const mapStateToProps = ({ messages }) => ({
    messageList: messages.nodes
});

export default connect(mapStateToProps)(MessageList);
