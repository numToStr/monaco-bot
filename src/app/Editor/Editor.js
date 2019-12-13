import React from "react";
import EditorTabs from "./EditorTabs";
import EditorPanels from "./EditorPanels";
import Box from "@material-ui/core/Box";

const Editor = () => {
    return (
        <Box display="flex" flexDirection="column" height="100%" width="100%">
            <EditorTabs />
            <EditorPanels />
        </Box>
    );
};

export default Editor;
