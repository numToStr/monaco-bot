import React from "react";
import Editor from "./Editor";

const EditorTabPanels = ({ currentTab, panels = [] }) => {
    return panels.map((panel, $i) => (
        <Editor hidden={panel.index !== currentTab} key={$i} panel={panel} />
    ));
};

export default EditorTabPanels;
