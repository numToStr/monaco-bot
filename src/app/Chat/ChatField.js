import React, { memo } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import safeEval from "safe-eval";
import FormikTextField from "../../components/FormikTextField";
import { onMessageSuccess } from "../../store/actions/message.action";
import { ChatBot } from "../../ChatBot";

const ChatField = ({ $onMessage, currentTab }) => {
    const Bot = new ChatBot($onMessage);

    const onSubmit = ({ message }, { resetForm }) => {
        if (!message) {
            return;
        }

        try {
            const script = `
                (${currentTab.value})('${message}');
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

const mapStateToProps = ({ tabs }) => ({
    currentTab: tabs.nodes.find(tab => tab.index === tabs.currentTab)
});

const mapDispatchToProps = {
    $onMessage: onMessageSuccess
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(memo(ChatField));
