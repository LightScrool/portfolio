import React, {FC} from 'react';
import "../styles/AboutTextBlock.scss";

interface AboutTextBlockProps {
    title: string
    text: string
}

const AboutTextBlock: FC<AboutTextBlockProps> = ({title, text}) => {
    return (
        <div className="AboutTextBlock">
            <h1 className="AboutTextBlock__title">
                {title}
            </h1>
            <div className="AboutTextBlock__text">
                {text}
            </div>
        </div>
    );
};

export default AboutTextBlock;