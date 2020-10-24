import {combineReducers, createStore} from "redux";
import workersReducer from "./reducers/workers_reducer";


let reducers = combineReducers({
    workers: workersReducer,
});

let store = createStore(reducers);

export default store;