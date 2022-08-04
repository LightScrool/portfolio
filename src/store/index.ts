import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import offsetsReducer from "./offsetsReducer";
import popupReducer from "./popupReducer";

const rootReducer = combineReducers({
    offsets: offsetsReducer,
    popup: popupReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;