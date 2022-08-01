import React, {FC} from 'react';
import "../../styles/Site/SiteTextBlock.scss";
import {Transition} from "react-transition-group";
import {TIMING} from "../../styles/variables";

interface SiteTextBlockProps {
    title: string,
    text: string,
    index: number,
    show: boolean
}

const SiteTextBlock: FC<SiteTextBlockProps> = (
    {
        title,
        text,
        index,
        show
    }) => {

    return (
        <Transition
            in={show}
            timeout={{
                enter: 20 + index*50, // Too small value is cause bug, when item appears instantly
                exit: TIMING.slow,
            }}
            unmountOnExit={true}
        >
            {state => (
                <div className={`SiteTextBlock ${state}`} id={`SiteTextBlock${index + 1}`}>
                    <div className="SiteTextBlock__title">
                        {title}
                    </div>
                    <div className="SiteTextBlock__line"/>
                    <div className="SiteTextBlock__text">
                        {text}
                    </div>
                </div>
            )}
        </Transition>
    );
};

export default SiteTextBlock;