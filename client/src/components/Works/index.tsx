import React, {FC} from 'react';
import "../../styles/Works/Works.scss";
import Container from "../Container";
import SectionTitle from "../SectionTitle";
import {useTranslation} from "react-i18next";
import MySvg from "../../assests/MySvg";
import {TMySvgId} from "../../types";

const Works: FC = () => {
    const {t} = useTranslation();

    return (
        <section className="Works">
            <Container>
                <SectionTitle className="Works__title" text={t("works.title")}/>
                <div className="Works__body">
                    <div className="Works-item">
                        <MySvg className="Works-item__picture" Id={TMySvgId.gitHub} fill={{color: "#333", opacity: 1}}/>
                        <div className="Works-item__text">{t("works.gitHub")}</div>
                    </div>
                    <div className="Works-item">
                        <MySvg className="Works-item__picture" Id={TMySvgId.codeSignal} fill={{color: "#333", opacity: 1}}/>
                        <div className="Works-item__text">{t("works.codeSignal")}</div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Works;