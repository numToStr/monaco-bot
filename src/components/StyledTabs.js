import React from "react";
import { withStyles, Tab, Tabs } from "@material-ui/core";

export const StyledTabs = withStyles(({ palette }) => ({
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
    }
}))(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

export const StyledTab = withStyles(({ spacing, typography }) => ({
    root: {
        minWidth: "auto",
        textTransform: "none",
        fontWeight: typography.fontWeightRegular,
        fontSize: typography.pxToRem(14),
        marginRight: spacing(1)
    }
}))(props => <Tab disableRipple {...props} />);
