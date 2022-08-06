import {TBodyScrollbarReducerAction, TBodyScrollbarReducerActionType, TBodyScrollbarReducerState} from "../types/bodyScrollbar";

const initialState: TBodyScrollbarReducerState = null

const bodyScrollbarReducer = (
    state: TBodyScrollbarReducerState = initialState,
    action: TBodyScrollbarReducerAction
) => {

    switch (action.type) {
        case TBodyScrollbarReducerActionType.SET_SCROLLBAR:
            return action.payload
        default:
            return state
    }
}

export default bodyScrollbarReducer;