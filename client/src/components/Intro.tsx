import React, {FC} from 'react';
import "../styles/Intro.scss";
import Container from "./Container";
import IntroBlock from "./IntroBlock";
import IntroPhoto from "./IntroPhoto";
import IntroBackground from "./IntroBackground";
import SVG, {SVGIds} from "../assests/SVG";

const Intro: FC = () => {
    return (
        <section className="Intro">
            <Container>
                <div className="Intro__inner">
                    <IntroBlock/>
                    <IntroPhoto/>
                    <SVG
                        className="Intro__arrows"
                        Id={SVGIds.arrows}
                    />
                </div>
                <IntroBackground/>
            </Container>
        </section>
    );
};

export default Intro;