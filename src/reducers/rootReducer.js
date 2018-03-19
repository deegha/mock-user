import { combineReducers } from "redux"

import activeUser from "./userReducer"
import usersList from "./listReducer"
import errors from "./errorReducer"
import notifications from "./notificationReducer"

const rootReducer = combineReducers({
    activeUser,
    usersList,
    errors,
    notifications
});

export default rootReducer;
