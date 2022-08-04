import {TPopupReducerAction, TPopupReducerActionType, TPopupReducerState} from "../types/popup";

const initialState: TPopupReducerState = {
    active: false
}

const popupReducer = (
    state: TPopupReducerState = initialState,
    action: TPopupReducerAction
) => {

    switch (action.type) {
        case TPopupReducerActionType.SET_ACTIVE:
            return {...state, active: action.payload}
        default:
            return state
    }
}

export default popupReducer;