import React, {FC, useRef} from 'react';
import "../../styles/Intro/Intro.scss";
import Container from "../Container";
import IntroBlock from "./IntroBlock";
import IntroPhoto from "./IntroPhoto";
import IntroBackgroundOuter from "./IntroBackgroundOuter";
import IntroBackgroundInner from "./IntroBackgroundInner";
import MySvg from "../../assests/MySvg";
import {TMySvgId} from "../../types";
import useSetOffset from "../../hooks/useSetOffset";
import {TOffsetsReducerActionType} from "../../types/offsets";
import useTypedSelector from "../../hooks/useTypedSelector";
import useScrollTo from "../../hooks/useScrollTo";
import {MEDIA_QUERIES} from "../../styles/variables";
import ShowOnMatchMedia from "../ShowOnMatchMedia";

const Intro: FC = () => {
    const offsetCheckoutBlock = useRef<HTMLDivElement>(null);
    useSetOffset(offsetCheckoutBlock, TOffsetsReducerActionType.SET_HOME);

    const offset = useTypedSelector(state => state.offsets.about);
    const scrollTo = useScrollTo();
    const onClick = () => {
        scrollTo(offset);
    }

    const hidePhotoMediaQuery = `${MEDIA_QUERIES.portrait} and ${MEDIA_QUERIES.container}`
    const hideBGOuterMediaQuery = MEDIA_QUERIES.hideIntroOuter

    return (
        <section className="Intro" ref={offsetCheckoutBlock}>
            <Container>
                <div className="Intro__inner">
                    <IntroBlock/>
                    <ShowOnMatchMedia mediaQuery={hidePhotoMediaQuery} inversion={true}>
                        <IntroPhoto/>
                    </ShowOnMatchMedia>
                    <MySvg
                        className="Intro__arrows"
                        onClick={onClick}
                        Id={TMySvgId.arrows}
                        fill={{color: "#fff", opacity: 0.65}}
                    />
                </div>
                <ShowOnMatchMedia mediaQuery={hideBGOuterMediaQuery} inversion={true}>
                    <IntroBackgroundOuter/>
                </ShowOnMatchMedia>
            </Container>
            <IntroBackgroundInner/>
        </section>
    );
};

export default Intro;