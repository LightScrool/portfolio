import React, {FC} from 'react';
import "../styles/Intro.scss";
import Container from "./Container";
import IntroBlock from "./IntroBlock";
import IntroPhoto from "./IntroPhoto";

const Intro: FC = () => {
    return (
        <section className="Intro">
            <Container>
                <div className="Intro__inner">
                    <IntroBlock/>
                    <IntroPhoto/>
                </div>
            </Container>
        </section>
    );
};

export default Intro;