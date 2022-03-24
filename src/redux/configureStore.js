import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Staffs } from "./staffs";
import { Depts } from "./department";
import { Salary } from "./salary";

export const ConfigureStore = () => {
    const store = createStore (
        combineReducers({
            staffs: Staffs,
            depts: Depts,
            salary: Salary
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}
