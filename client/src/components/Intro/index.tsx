import React, {FC} from 'react';
import "../../styles/Intro/Intro.scss";
import Container from "../Container";
import IntroBlock from "./IntroBlock";
import IntroPhoto from "./IntroPhoto";
import IntroBackground from "./IntroBackground";
import MySvg from "../../assests/MySvg";
import {TMySvgId} from "../../types";

const Intro: FC = () => {
    return (
        <section className="Intro">
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