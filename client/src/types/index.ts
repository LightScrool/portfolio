import store from "../store";

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
    codeSignalStroke
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