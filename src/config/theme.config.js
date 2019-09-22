import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import grey from "@material-ui/core/colors/grey";
// import red from "@material-ui/core/colors/purple";

export default createMuiTheme({
    palette: {
        primary: grey,
        secondary: grey
    },
    typography: {
        fontFamily: [
            "Roboto Mono",
            "monospace",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(",")
    }
});
