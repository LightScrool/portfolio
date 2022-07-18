import React, {FC} from 'react';
import "../styles/Intro.scss";
import Container from "./Container";

const Intro: FC = () => {
    return (
        <section className="Intro">
            <Container>
                <div className="Intro__inner">
                    Intro
                </div>
            </Container>
        </section>
    );
};

export default Intro;