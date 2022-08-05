import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import offsetsReducer from "./offsetsReducer";
import popupReducer from "./popupReducer";
import bodyScrollbarReducer from "./bodyScrollbarReducer";

const rootReducer = combineReducers({
    offsets: offsetsReducer,
    popup: popupReducer,
    bodyScrollbar: bodyScrollbarReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;