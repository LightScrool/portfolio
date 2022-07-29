import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import offsetsReducer from "./offsetsReducer";

const rootReducer = combineReducers({
    offsets: offsetsReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;