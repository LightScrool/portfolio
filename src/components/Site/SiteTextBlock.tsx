import React, {FC, useRef} from 'react';
import "../../styles/Site/SiteTextBlock.scss";
import {Transition} from "react-transition-group";
import {TIMING} from "../../styles/variables";
import {TSiteItem} from "../../types";
import {Trans, useTranslation} from "react-i18next";
import {combineClassNames} from "../../utils";

interface SiteTextBlockProps {
    data: TSiteItem
    index: number,
    show: boolean,
}

const SiteTextBlock: FC<SiteTextBlockProps> = (
    {
        data,
        index,
        show
    }) => {

    const {t} = useTranslation();
    const nodeRef = useRef<HTMLDivElement>(null);

    return (
        <Transition
            in={show}
            timeout={{
                enter: 20, // Too small value is cause bug, when item appears instantly
                exit: TIMING.slow,
            }}
            unmountOnExit={true}
            nodeRef={nodeRef}
        >
            {state => (
                <div
                    ref={nodeRef}
                    className={combineClassNames("SiteTextBlock", state)}
                    id={`SiteTextBlock${index + 1}`}
                >
                    <div className="SiteTextBlock__title">
                        {t(`site.items.${data.name}.title`)}
                    </div>
                    <div className="SiteTextBlock__line"/>
                    <div className="SiteTextBlock__text">
                        {
                            data.href
                                ?
                                <Trans
                                    components={{
                                        // Can't use <a/> because of eslint
                                        href: <a href={data.href} target="_blank" rel="noreferrer noopener">{""}</a>
                                    }}
                                >
                                    {`site.items.${data.name}.text`}
                                </Trans>
                                :
                                t(`site.items.${data.name}.text`)
                        }
                    </div>
                </div>
            )}
        </Transition>
    );
};

export default SiteTextBlock;