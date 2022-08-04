import React, {FC, useRef} from 'react';
import "../../styles/Site/Site.scss";
import Container from "../Container";
import SectionTitle from "../SectionTitle";
import {useTranslation} from "react-i18next";
import MySvg from "../../assests/MySvg";
import {TMySvgId, TSiteItem} from "../../types";
import useScrollPercentAnimation from "../../hooks/useScrollPercentAnimation";
import SiteTextBlock from "./SiteTextBlock";
import {TOffsetsReducerActionType} from "../../types/offsets";
import useSetOffset from "../../hooks/useSetOffset";
import {COLORS} from "../../styles/variables";
import {HYPER_REFERENCES} from "../../data";

const Site: FC = () => {
    const offsetCheckoutBlock = useRef<HTMLDivElement>(null);
    useSetOffset(offsetCheckoutBlock, TOffsetsReducerActionType.SET_WORKS);

    const revolutionsQuantity = 1.5;
    const animationBlock = offsetCheckoutBlock;
    const animationPercent = useScrollPercentAnimation(animationBlock);

    const {t} = useTranslation();

    const items: TSiteItem[] = [
        {name: "React"},
        {name: "Figma", href: HYPER_REFERENCES.Figma},
        {name: "SASS"},
        {name: "SVG"},
        {name: "Git", href: HYPER_REFERENCES.GitHubProject},
        {name: "i18next"},
        {name: "TypeScript"},
    ];

    return (
        <section className="Site" ref={animationBlock}>
            <Container>
                <SectionTitle
                    className="Site__title"
                    text={t("site.title")}
                    dark={true}
                />
                <div className="Site__sticky">
                    <div className="Site__picture">
                        <MySvg
                            style={{transform: `rotate(${animationPercent * revolutionsQuantity * 360}deg)`}}
                            Id={TMySvgId.react}
                            fill={{color: COLORS.blue, opacity: 1}}
                        />
                    </div>
                    {items.map((item, index) => (
                        <SiteTextBlock
                            key={index}
                            index={index}
                            show={animationPercent > 0.35 + 0.05*index}
                            data={item}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Site;