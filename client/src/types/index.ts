import store from "../store";
import {ReactNode} from "react";

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
    href: string
}

export type TSiteItem = {
    name: string,
    href?: string
}

export type TWorksItem = {
    offHoverSvg: ReactNode,
    onHoverSvg: ReactNode,
    href: string,
    text: string,
}