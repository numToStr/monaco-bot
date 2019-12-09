import React from "react";
import { connect } from "react-redux";
import { Grid, Box, IconButton, Tooltip, Button } from "@material-ui/core";
import EditorTabPanels from "./EditorTabPanels";
import {
    onTabCreate,
    onTabChange,
    onSyncCode
} from "../../store/actions/tab.action";
import { StyledTabs, StyledTab } from "../../components/StyledTabs";
import AddIcon from "../../components/AddIcon";
import { editorDefaultValue } from "../../constants";

const EditorTabs = ({
    $onTabCreate,
    $onTabChange,
    $onSyncCode,
    tabList,
    tabsLength,
    currentTab,
    syncDisabled
}) => {
    const handleTabChange = (_, newValue) => {
        $onTabChange({ currentTab: newValue });
    };

    const addTab = () => {
        $onTabCreate({
            node: {
                label: `Untitled ${tabsLength}`,
                value: editorDefaultValue,
                index: tabsLength
            },
            currentTab: tabsLength
        });
    };

    const tabs = tabList.map(({ label }, index) => (
        <StyledTab key={index} label={label} />
    ));

    return (
        <Box display="flex" flexDirection="column" height="100%">
            <Grid container alignItems="center">
                {/* <Box width="100%" overflow="auto" clone> */}
                <Grid item>
                    <StyledTabs
                        value={currentTab}
                        onChange={handleTabChange}
                        aria-label="Editor Tabs"
                    >
                        {tabs}
                    </StyledTabs>
                </Grid>
                {/* </Box> */}
                <Grid item xs>
                    <Box display="flex" justifyContent="space-between">
                        <Tooltip title="New Tab">
                            <IconButton size="small" onClick={addTab}>
                                <AddIcon />
                            </IconButton>
                        </Tooltip>
                        <Button
                            size="small"
                            variant="contained"
                            onClick={$onSyncCode}
                            disabled={syncDisabled}
                        >
                            Sync
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            <EditorTabPanels currentTab={currentTab} panels={tabList} />
        </Box>
    );
};

const mapStateToProps = ({ tabs }) => ({
    tabList: tabs.nodes,
    tabsLength: tabs.nodes.length,
    currentTab: tabs.currentTab,
    syncDisabled: tabs.syncDisabled
});

const mapDispatchToProps = {
    $onTabCreate: onTabCreate,
    $onTabChange: onTabChange,
    $onSyncCode: onSyncCode
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorTabs);
