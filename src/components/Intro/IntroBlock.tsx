import React, {FC} from 'react';
import "../../styles/Intro/IntroBlock.scss";
import Media from "../Media";
import ContactButton from "../ContactButton";
import {useTranslation} from "react-i18next";

const IntroBlock: FC = () => {
    const {t} = useTranslation();

    return (
        <div className="IntroBlock">
            <div className="IntroBlock__title">
                <h2>{t("intro.title.text")}</h2>
                <h1>{t("intro.title.name")}</h1>
            </div>
            <div className="IntroBlock__subtitle">
                <h3>{t("intro.subtitle")}</h3>
            </div>
            <Media className="IntroBlock__media"/>
            <ContactButton className="IntroBlock__button"/>
        </div>
    );
};

export default IntroBlock;