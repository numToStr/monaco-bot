import React from "react";
import { Typography, Box } from "@material-ui/core";

const MessageList = ({ list = [] }) => {
    const messagesList = list.map(({ text, createdAt, createdBy }, index) => {
        const isUser = createdBy === "user";

        return (
            <Box
                key={index}
                display="flex"
                justifyContent={isUser ? "flex-end" : "flex-start"}
            >
                <Box
                    bgcolor={isUser ? "primary.main" : "secondary.main"}
                    color="white"
                    mb={2}
                    py={1}
                    px={2}
                    borderRadius="borderRadius"
                >
                    <Typography variant="body1">{text}</Typography>
                    <Typography variant="caption">
                        {new Date(createdAt).toLocaleTimeString()}
                    </Typography>
                </Box>
            </Box>
        );
    });

    return <Box>{messagesList}</Box>;
};

export default MessageList;
