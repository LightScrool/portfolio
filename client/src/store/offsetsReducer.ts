import {TOffsetsReducerAction, TOffsetsReducerActionType, TOffsetsReducerState} from "../types/offsets";

const initialState: TOffsetsReducerState = {
    home: 0,
    about: 0,
    works: 0
}

const offsetsReducer = (
    state: TOffsetsReducerState = initialState,
    action: TOffsetsReducerAction
): TOffsetsReducerState => {

    switch (action.type) {
        case TOffsetsReducerActionType.SET_HOME:
            return {...state, home: action.payload};
        case TOffsetsReducerActionType.SET_ABOUT:
            return {...state, about: action.payload};
        case TOffsetsReducerActionType.SET_WORKS:
            return {...state, works: action.payload};
        default:
            return state
    }
}

export default offsetsReducer;