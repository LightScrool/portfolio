import React, {FC} from 'react';
import "../../styles/Site/SiteTextBlock.scss";

interface SiteTextBlockProps {
    title: string,
    text: string,
    index: number
}

const SiteTextBlock: FC<SiteTextBlockProps> = (
    {
        title,
        text,
        index
    }) => {

    return (
        <div className="SiteTextBlock" id={`SiteTextBlock${index + 1}`}>
            <div className="SiteTextBlock__title">
                {title}
            </div>
            <div className="SiteTextBlock__text">
                {text}
            </div>
        </div>
    );
};

export default SiteTextBlock;