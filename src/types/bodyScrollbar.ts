export type TBodyScrollbarReducerState = {
    currentScroll: number,
    scrollTo: (position: number) => void
}

export enum TBodyScrollbarReducerActionType {
    SET_CURRENT_SCROLL = "SET_CURRENT_SCROLL",
    SET_SCROLL_TO = "SET_SCROLL_TO"
}

type TSetCurrentScrollAction = {
    type: TBodyScrollbarReducerActionType.SET_CURRENT_SCROLL,
    payload: number
}

type TSetScrollToAction = {
    type: TBodyScrollbarReducerActionType.SET_SCROLL_TO,
    payload: (position: number) => void
}

export type TBodyScrollbarReducerAction = TSetCurrentScrollAction | TSetScrollToAction