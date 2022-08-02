export type TPopupReducerState = {
    active: boolean
}

export enum TPopupReducerActionType {
    SET_ACTIVE = "SET_ACTIVE",
}

type TSetActiveAction = {
    type: TPopupReducerActionType.SET_ACTIVE,
    payload: boolean
}

export type TPopupReducerAction = TSetActiveAction