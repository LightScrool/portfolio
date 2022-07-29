import React, {FC, useRef} from 'react';
import "../../styles/Intro/Intro.scss";
import Container from "../Container";
import IntroBlock from "./IntroBlock";
import IntroPhoto from "./IntroPhoto";
import IntroBackground from "./IntroBackground";
import MySvg from "../../assests/MySvg";
import {TMySvgId} from "../../types";
import useSetOffset from "../../hooks/useSetOffset";
import {TOffsetsReducerActionType} from "../../types/offsets";

const Intro: FC = () => {
    const offsetCheckoutBlock = useRef<HTMLDivElement>(null);
    useSetOffset(offsetCheckoutBlock, TOffsetsReducerActionType.SET_HOME);

    return (
        <section className="Intro" ref={offsetCheckoutBlock}>
            <Container>
                <div className="Intro__inner">
                    <IntroBlock/>
                    <IntroPhoto/>
                    <MySvg
                        className="Intro__arrows"
                        Id={TMySvgId.arrows}
                        fill={{color: "#fff", opacity: 0.65}}
                    />
                </div>
                <IntroBackground/>
            </Container>
        </section>
    );
};

export default Intro;