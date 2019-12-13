import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { onTabChange } from "../../store/actions/tab.action";
import { StyledTabs, StyledTab } from "../../components/StyledTabs";
import EditorAddSync from "./EditorAddSync";

const EditorTabs = () => {
    const dispatch = useDispatch();
    const state = useSelector(store => ({
        tabList: store.tabs.nodes,
        currentTab: store.tabs.currentTab,
    }));

    const handleTabChange = (_, newValue) => {
        dispatch(onTabChange({ currentTab: newValue }));
    };

    const tabs = state.tabList.map(({ label }, index) => (
        <StyledTab key={index} label={label} />
    ));

    return (
        <Grid container alignItems="center">
            {/* <Box width="100%" overflow="auto" clone> */}
            <Grid item>
                <StyledTabs
                    value={state.currentTab}
                    onChange={handleTabChange}
                    aria-label="Editor Tabs"
                >
                    {tabs}
                </StyledTabs>
            </Grid>
            {/* </Box> */}
            <Grid item xs>
                <EditorAddSync />
            </Grid>
        </Grid>
    );
};

export default EditorTabs;
