import React from "react";
import { connect } from "react-redux";
import { Grid, Box, IconButton, Tooltip, Button } from "@material-ui/core";
import EditorTabPanels from "./EditorTabPanels";
import { onTabCreate, onTabChange } from "../../store/actions/tab.action";
import { StyledTabs, StyledTab } from "../../components/StyledTabs";
import AddIcon from "../../components/AddIcon";

const value = `// Start typing your first program

function main(message) {
    Bot.reply(message)
}
`;

const EditorTabs = ({
    $onTabCreate,
    $onTabChange,
    tabList,
    tabsLength,
    currentTab
}) => {
    const handleTabChange = (_, newValue) => {
        $onTabChange({ currentTab: newValue });
    };

    const addTab = () => {
        $onTabCreate({
            node: {
                label: `Untitled ${tabsLength}`,
                value,
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
                        <Button size="small" variant="contained">
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
    currentTab: tabs.currentTab
});

const mapDispatchToProps = {
    $onTabCreate: onTabCreate,
    $onTabChange: onTabChange
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorTabs);
