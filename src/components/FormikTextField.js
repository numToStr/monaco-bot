import React from "react";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";

const FormikTextField = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) => {
    const error = errors[field.name];
    return (
        <Box
            bgcolor="background.paper"
            borderRadius="borderRadius"
            py={2}
            px={3}
        >
            <InputBase
                variant="outlined"
                error={touched && error ? true : false}
                helpertext={touched && error ? `- ${error}` : null}
                fullWidth
                {...field}
                {...props}
            />
        </Box>
    );
};

export default FormikTextField;
