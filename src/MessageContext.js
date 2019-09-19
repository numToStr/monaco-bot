import React, { createContext, useContext, useReducer } from "react";

const MessagesContext = createContext(null);
const MessagesDispatch = createContext(null);

const initialMessages = [];

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "create":
            return [...state, payload];
        default:
            return initialMessages;
    }
};

export const MessagesProvider = ({ children }) => {
    const [messages, dispatch] = useReducer(reducer, initialMessages);

    return (
        <MessagesContext.Provider value={{ values: messages }}>
            <MessagesDispatch.Provider value={dispatch}>
                {children}
            </MessagesDispatch.Provider>
        </MessagesContext.Provider>
    );
};

export const useMessageDispatch = () => {
    const context = useContext(MessagesDispatch);

    if (!context) {
        throw new Error(
            "useMessageDispatch must be used within a ThemeDispatchProvider"
        );
    }

    return context;
};

export const useMessageContext = () => {
    const context = useContext(MessagesContext);

    if (!context) {
        throw new Error(
            "useMessageContext must be used within a ThemeContextProvider"
        );
    }

    return context;
};
