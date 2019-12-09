import React, { memo } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import safeEval from "safe-eval";
import FormikTextField from "../../components/FormikTextField";
import { onMessageSuccess } from "../../store/actions/message.action";
import { ChatBot } from "../../ChatBot";

const ChatField = ({ $onMessage, currentCode }) => {
    const Bot = new ChatBot($onMessage);

    const onSubmit = ({ message }, { resetForm }) => {
        if (!message) {
            return;
        }

        try {
            const script = `
                (${currentCode})('${message}');
            `;

            safeEval(script, {
                Bot
            });
            $onMessage({
                message,
                createdBy: "user"
            });
            resetForm();
        } catch (error) {
            throw error;
        }
    };

    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={{ message: "" }}
            render={() => (
                <Form>
                    <Field
                        name="message"
                        placeholder="Type your message here..."
                        component={FormikTextField}
                        autoFocus={true}
                    />
                </Form>
            )}
        />
    );
};

const mapStateToProps = ({ tabs }) => ({
    currentCode: tabs.currentCode
});

const mapDispatchToProps = {
    $onMessage: onMessageSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(ChatField));
