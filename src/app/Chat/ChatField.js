import React, { memo } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import FormikTextField from "../../components/FormikTextField";
import { onMessageSuccess } from "../../store/actions/message.action";

const ChatField = ({ $onMessage }) => {
    const onSubmit = ({ message }, { resetForm }) => {
        if (!message) {
            return;
        }

        $onMessage({
            message,
            createdBy: "user"
        });
        resetForm();
    };

    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={{ message: "" }}
            render={() => (
                <Form>
                    <Field
                        name="message"
                        label="Message"
                        placeholder="Type your message here..."
                        component={FormikTextField}
                        autoFocus={true}
                    />
                </Form>
            )}
        />
    );
};

const mapDispatchToProps = {
    $onMessage: onMessageSuccess
};

export default connect(
    null,
    mapDispatchToProps
)(memo(ChatField));
