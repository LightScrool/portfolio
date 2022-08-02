import store from "../store";
import {ReactNode} from "react";
import {HYPER_REFERENCES} from "../data";

export enum TSkill {
    layout = "layout",
    javaScript = "javaScript",
    typeScript = "typeScript",
    react = "react",
    nodeJS = "nodeJS",
    git = "git",
    oop = "oop",
    algorithms = "algorithms",
    testing = "testing",
    sql = "sql",
    python = "python",
    dotNet = "dotNet",
}

export enum TMySvgId {
    languagesFill,
    languagesStroke,
    maskFrame1,
    maskFrame2,
    circle,
    wave,
    dots,
    arrows,
    react,
    gitHubFill,
    gitHubStroke,
    codeSignalFill,
    codeSignalStroke,
    cross
}

export type TSvgStroke = {
    width: string | number // TODO: only number
    color: string
    opacity: number
}

export type TSvgFill = {
    color: string
    opacity: number
}

export type TState = ReturnType<typeof store.getState>

export type TNavItem = {
    name: string,
    offset: number,
    text: string,
}

export type TMediaItem = {
    name: string,
    picture: string,
    href: HYPER_REFERENCES
}

export type TSiteItem = {
    name: string,
    href?: HYPER_REFERENCES
}

export type TWorksItem = {
    offHoverSvg: ReactNode,
    onHoverSvg: ReactNode,
    href: HYPER_REFERENCES,
    text: string,
}