import React, {FC} from 'react';
import "../styles/SectionTitle.scss";

interface SectionTitleProps {
    text: string,
    dark?: boolean
}

const SectionTitle: FC<SectionTitleProps> = ({text, dark=false}) => {
    return (
        <h1 className={dark ? "SectionTitle dark": "SectionTitle"}>
            {text}
        </h1>
    );
};

export default SectionTitle;