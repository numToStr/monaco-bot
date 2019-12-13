import React from "react";
import { useSelector } from "react-redux";
import EditorPanel from "./EditorPanel";

const EditorPanels = () => {
    const state = useSelector(store => ({
        currentTab: store.tabs.currentTab,
        panels: store.tabs.nodes,
    }));

    return state.panels.map((panel, $i) => (
        <EditorPanel
            hidden={panel.index !== state.currentTab}
            key={$i}
            panel={panel}
        />
    ));
};

export default EditorPanels;
