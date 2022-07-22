import React from 'react';
import "../../styles/About/About.scss";
import Container from "../Container";
import MySvg from "../../assests/MySvg";
import {TMySvgId} from "../../types";
import AboutTextBlock from "./AboutTextBlock";
import ImageInsideVector from "../ImageInsideVector";
import photo from "../../assests/pictures/my-photo-2.jpg"
import {useTranslation} from "react-i18next";

const About = () => {
    const {t} = useTranslation();

    return (
        <section className="About">
            <Container>
                <div className="About__inner">
                    <ImageInsideVector
                        className="About__photo"
                        imageURL={photo}
                        maskVector={<MySvg Id={TMySvgId.maskFrame2}/>}
                        viewBox="0 0 100 82"
                        imageTransform={"scale(1.45) translate(-12, -9.3)"}
                    />

                    <div className="About__text-blocks">
                        <AboutTextBlock
                            title={t('about.briefly.title')}
                            text={t('about.briefly.text')}
                        />
                        <AboutTextBlock
                            title={t('about.education.title')}
                            text={t('about.education.text')}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;