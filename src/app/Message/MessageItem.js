import React, { memo } from "react";
import { Box, Typography } from "@material-ui/core";

const MessageItem = ({ node }) => {
    const isUser = node.createdBy === "user";

    return (
        <Box
            display="flex"
            justifyContent={isUser ? "flex-end" : "flex-start"}
            my={2}
        >
            <Box
                bgcolor={isUser ? "primary.dark" : "primary.main"}
                color="white"
                borderRadius="borderRadius"
                py={1}
                px={2}
            >
                <Typography>{node.message}</Typography>
            </Box>
        </Box>
    );
};

export default memo(MessageItem);
