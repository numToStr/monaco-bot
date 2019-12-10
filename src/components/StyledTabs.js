import React from "react";
import { withStyles, Tab, Tabs } from "@material-ui/core";

export const StyledTabs = withStyles(({ palette, typography }) => ({
    indicator: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
        "& > div": {
            width: "60%",
            backgroundColor: palette.text.primary
        }
    },
    scroller: {
        overflow: "auto !important"
    },
    root: {
        minHeight: typography.pxToRem(40)
    }
}))(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

export const StyledTab = withStyles(({ typography }) => ({
    root: {
        minWidth: "auto",
        textTransform: "none",
        fontWeight: typography.fontWeightRegular,
        fontSize: typography.pxToRem(10),
        minHeight: typography.pxToRem(40)
    }
}))(props => <Tab disableRipple {...props} />);
