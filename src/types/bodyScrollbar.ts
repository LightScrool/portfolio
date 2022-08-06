import {Scrollbars} from "react-custom-scrollbars-2";

export type TBodyScrollbarReducerState = Scrollbars | null;

export enum TBodyScrollbarReducerActionType {
    SET_SCROLLBAR = "SET_SCROLLBAR"
}

type TSetScrollbarAction = {
    type: TBodyScrollbarReducerActionType.SET_SCROLLBAR,
    payload: Scrollbars
}

export type TBodyScrollbarReducerAction = TSetScrollbarAction