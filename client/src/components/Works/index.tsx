import React, {FC} from 'react';
import "../../styles/Works/Works.scss";
import Container from "../Container";
import SectionTitle from "../SectionTitle";
import {useTranslation} from "react-i18next";
import MySvg from "../../assests/MySvg";
import {TMySvgId, TWorksItem} from "../../types";
import SvgWithHover from "../SvgWithHover";

const Works: FC = () => {
    const {t} = useTranslation();

    const items: TWorksItem[] =  [
        {
            offHoverSvg: <MySvg Id={TMySvgId.gitHubFill}/>,
            onHoverSvg: <MySvg Id={TMySvgId.gitHubStroke}/>,
            href: "https://github.com/LightScrool",
            text: t("works.gitHub")
        },
        {
            offHoverSvg: <MySvg Id={TMySvgId.codeSignalFill}/>,
            onHoverSvg: <MySvg Id={TMySvgId.codeSignalStroke}/>,
            href: "https://app.codesignal.com/profile/lightscrool",
            text: t("works.codeSignal")
        },
    ]

    return (
        <section className="Works">
            <Container>
                <SectionTitle className="Works__title" text={t("works.title")}/>
                <div className="Works__body">
                    {items.map((item, index) => (
                        // These elements are static, so it is ok to use index as key here
                        <div className="Works-item" key={index}>
                            <SvgWithHover
                                className="Works-item__picture"
                                offHoverSvg={item.offHoverSvg}
                                onHoverSvg={item.onHoverSvg}
                                href={item.href}
                                target="_blank"
                            />
                            <div className="Works-item__text">{item.text}</div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Works;