import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Tabs, Tab, Button, Grid } from "@material-ui/core";
import EditorTabPanels from "./EditorTabPanels";
import { onTabCreate, onTabChange } from "../../store/actions/tab.action";

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
                value: `// Tab ${tabsLength}\n// Start typing your first program`,
                index: tabsLength
            },
            currentTab: tabsLength
        });
    };

    const tabs = tabList.map(({ label }, index) => (
        <Tab key={index} label={label} />
    ));

    return (
        <Fragment>
            <Grid container alignItems="center">
                <Grid item xs>
                    <Tabs
                        value={currentTab}
                        onChange={handleTabChange}
                        aria-label="simple tabs example"
                    >
                        {tabs}
                    </Tabs>
                </Grid>
                <Grid item>
                    <Button size="small" onClick={addTab}>
                        +
                    </Button>
                </Grid>
            </Grid>
            <EditorTabPanels currentTab={currentTab} panels={tabList} />
        </Fragment>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditorTabs);
