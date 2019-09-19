import React, { useState } from "react";
import { TextField, Fab, Grid } from "@material-ui/core";

const ChatField = ({ onSubmit }) => {
    const [message, setMessage] = useState("");

    const onChange = event => {
        setMessage(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        onSubmit(message);
        setMessage("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs>
                    <TextField
                        fullWidth
                        label="Message"
                        placeholder="Type your message..."
                        variant="outlined"
                        name="message"
                        type="text"
                        value={message}
                        onChange={onChange}
                    />
                </Grid>
                <Grid item>
                    <Fab type="submit">--></Fab>
                </Grid>
            </Grid>
        </form>
    );
};

export default ChatField;
