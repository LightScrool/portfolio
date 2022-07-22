import React, {FC} from 'react';
import "../styles/SectionTitle.scss";

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
    return (
        <h1 className={dark ? `SectionTitle dark ${className}` : `SectionTitle ${className}`}>
            {text}
        </h1>
    );
};

export default SectionTitle;