import {TBodyScrollbarReducerAction, TBodyScrollbarReducerActionType, TBodyScrollbarReducerState} from "../types/bodyScrollbar";

const initialState: TBodyScrollbarReducerState = {
    currentScroll: 0,
    scrollTo: () => {}
}

const bodyScrollbarReducer = (
    state: TBodyScrollbarReducerState = initialState,
    action: TBodyScrollbarReducerAction
) => {

    switch (action.type) {
        case TBodyScrollbarReducerActionType.SET_CURRENT_SCROLL:
            return {...state, currentScroll: action.payload}
        case TBodyScrollbarReducerActionType.SET_SCROLL_TO:
            return {...state, scrollTo: action.payload}
        default:
            return state
    }
}

export default bodyScrollbarReducer;