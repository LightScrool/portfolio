export type TOffsetsReducerState = {
    home: number
    about: number
    works: number
}

export enum TOffsetsReducerActionType {
    SET_HOME = "SET_HOME",
    SET_ABOUT = "SET_ABOUT",
    SET_WORKS = "SET_WORKS",
}

type TSetHomeAction = {
    type: TOffsetsReducerActionType.SET_HOME,
    payload: number
}

type TSetAboutAction = {
    type: TOffsetsReducerActionType.SET_ABOUT,
    payload: number
}

type TSetWorksAction = {
    type: TOffsetsReducerActionType.SET_WORKS,
    payload: number
}

export type TOffsetsReducerAction = TSetHomeAction | TSetAboutAction | TSetWorksAction