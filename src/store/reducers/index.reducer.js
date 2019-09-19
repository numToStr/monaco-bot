import { combineReducers } from "redux";

import messages from "./message.reducer";
import tabs from "./tab.reducer";

export default combineReducers({
    messages,
    tabs
});
