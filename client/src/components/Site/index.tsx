import React, {FC, useRef} from 'react';
import "../../styles/Site/Site.scss";
import Container from "../Container";
import SectionTitle from "../SectionTitle";
import {useTranslation} from "react-i18next";
import MySvg from "../../assests/MySvg";
import {TMySvgId} from "../../types";
import useScrollPercentAnimation from "../../hooks/useScrollPercentAnimation";
import SiteTextBlock from "./SiteTextBlock";

const Site: FC = () => {
    const revolutionsQuantity = 1.5;
    const animationBlock = useRef<HTMLDivElement>(null); // The block inside which the percentage of animations is calculated
    const animationPercent = useScrollPercentAnimation(animationBlock);

    const {t} = useTranslation();
    type TItem = { title: string, text: string }
    const items: TItem[] = t("site.items", {returnObjects: true});

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
                            fill={{color: "#4AD8F8", opacity: 1}}
                        />
                    </div>
                    {items.map((item, index) => (
                        <SiteTextBlock key={index} index={index} title={item.title} text={item.text}/>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Site;