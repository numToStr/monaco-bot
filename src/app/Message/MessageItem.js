import React, { memo } from "react";
import { Box, Typography, Avatar } from "@material-ui/core";

const MessageItem = ({ node }) => {
    const isUser = node.createdBy === "user";

    return (
        <Box
            display="flex"
            justifyContent={isUser ? "flex-end" : "flex-start"}
            my={2}
        >
            {!isUser && <Avatar>B</Avatar>}
            <Box
                bgcolor={isUser ? "primary.dark" : "primary.main"}
                color="white"
                borderRadius="borderRadius"
                py={1}
                px={2}
                mx={2}
            >
                <Typography>{node.message}</Typography>
            </Box>
            {isUser && <Avatar>U</Avatar>}
        </Box>
    );
};

export default memo(MessageItem);
