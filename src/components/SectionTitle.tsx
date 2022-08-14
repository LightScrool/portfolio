import React, {FC} from 'react';
import "../styles/SectionTitle.scss";
import {combineClassNames} from "../utils";

interface SectionTitleProps {
    text: string,
    dark?: boolean,
    className?: string
}

const SectionTitle: FC<SectionTitleProps> = (
    {
        text,
        dark = false,
        className = ""
    }) => {
    const darkClassName = dark ? "dark" : "";

    return (
        <h1 className={combineClassNames("SectionTitle", darkClassName, className)}>
            {text}
        </h1>
    );
};

export default SectionTitle;