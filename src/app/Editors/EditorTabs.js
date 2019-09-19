import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Tabs, Tab, Button, Grid } from "@material-ui/core";
import EditorTabPanel from "./EditorTabPanel";
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
                value: `Value ${tabsLength}`,
                index: tabsLength
            },
            currentTab: tabsLength
        });
    };

    const tabs = tabList.map(({ label }, index) => (
        <Tab key={index} label={label} />
    ));

    const tabPanels = tabList.map(({ index }) => (
        <EditorTabPanel key={index} currentTab={currentTab} index={index} />
    ));

    return (
        <Fragment>
            <Grid container alignItems="center">
                <Grid item>
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
            {tabPanels}
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
