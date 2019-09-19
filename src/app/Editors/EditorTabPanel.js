import React from "react";
import { Typography } from "@material-ui/core";

const EditorTabPanel = ({ index, currentTab }) => {
    return index === currentTab && <Typography>Tab Number {index}</Typography>;
};

export default EditorTabPanel;
