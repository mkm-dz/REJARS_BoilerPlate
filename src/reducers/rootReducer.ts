import { combineReducers } from "redux";
import { appReducer } from "../reducers/appReducer";

/**
 * We are combining reducers in here, remember, STATE IS FORMED BY REDUCERS. Each reducer represents a piece of the
 * cake (the cake is the state in this case)
 */
export const rootReducer = combineReducers({
    appState: appReducer
});