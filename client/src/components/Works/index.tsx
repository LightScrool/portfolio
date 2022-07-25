import React, {FC} from 'react';
import "../../styles/Works/Works.scss";
import Container from "../Container";
import SectionTitle from "../SectionTitle";
import {useTranslation} from "react-i18next";
import MySvg from "../../assests/MySvg";
import {TMySvgId} from "../../types";
import ClickableSvg from "../ClickableSvg";

const Works: FC = () => {
    const {t} = useTranslation();

    return (
        <section className="Works">
            <Container>
                <SectionTitle className="Works__title" text={t("works.title")}/>
                <div className="Works__body">
                    <div className="Works-item">
                        <ClickableSvg
                            className="Works-item__picture"
                            offHoverSvg={<MySvg Id={TMySvgId.gitHubFill}/>}
                            onHoverSvg={<MySvg Id={TMySvgId.gitHubStroke}/>}
                            onClick={() => console.log("GitHub click")}
                        />
                        <div className="Works-item__text">{t("works.gitHub")}</div>
                    </div>
                    <div className="Works-item">
                        <ClickableSvg
                            className="Works-item__picture"
                            offHoverSvg={<MySvg Id={TMySvgId.codeSignalFill}/>}
                            onHoverSvg={<MySvg Id={TMySvgId.codeSignalStroke}/>}
                            onClick={() => console.log("CodeSignal click")}
                        />
                        <div className="Works-item__text">{t("works.codeSignal")}</div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Works;