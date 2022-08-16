import React, {FC, useEffect, useRef, useState} from 'react';
import "../../styles/Site/Site.scss";
import Container from "../Container";
import SectionTitle from "../SectionTitle";
import {useTranslation} from "react-i18next";
import {TOffsetsReducerActionType} from "../../types/offsets";
import useSetOffset from "../../hooks/useSetOffset";
import SiteAnimationBlock from "./SiteAnimationBlock";
import {COLORS} from "../../styles/variables";

const Site: FC = () => {
    const {t} = useTranslation();

    const offsetCheckoutBlock = useRef<HTMLDivElement>(null);
    useSetOffset(offsetCheckoutBlock, TOffsetsReducerActionType.SET_WORKS);

    const [apple, setApple] = useState<boolean>(false);
    useEffect(() => {
        setApple(navigator.userAgent.toLowerCase().search(/(ipad|iphone|mac os|macintosh)/) !== -1)
    }, [])

    return (
        <section
            className="Site"
            ref={offsetCheckoutBlock}
            style={apple ? {background: COLORS.lightBlack} : {}}
        >
            <Container>
                <div className="Site__inner">
                    <SectionTitle
                        className="Site__title"
                        text={t("site.title")}
                        dark={true}
                    />
                    <SiteAnimationBlock/>
                </div>
            </Container>
        </section>
    );
};

export default Site;