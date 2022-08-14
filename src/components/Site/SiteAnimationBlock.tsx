import React, {FC, useRef} from 'react';
import "../../styles/Site/SiteAnimationBlock.scss";
import MySvg from "../../assests/MySvg";
import {TMySvgId, TSiteItem} from "../../types";
import {COLORS, MEDIA_QUERIES} from "../../styles/variables";
import SiteTextBlock from "./SiteTextBlock";
import useScrollPercentAnimation from "../../hooks/useScrollPercentAnimation";
import {HYPER_REFERENCES} from "../../data";
import ShowOnMatchMedia from "../ShowOnMatchMedia";
import useMediaQuery from "../../hooks/useMediaQuery";

const SiteAnimationBlock: FC = () => {
    const items: TSiteItem[] = [
        {name: "React"},
        {name: "SVG"},
        {name: "SASS"},
        {name: "Figma", href: HYPER_REFERENCES.Figma},
        {name: "Git", href: HYPER_REFERENCES.GitHubProject},
        {name: "i18next"},
        {name: "TypeScript"},
    ];
    const REVOLUTIONS_QUANTITY = 1.5;
    const [APPEARANCE_START, APPEARANCE_END] = [0.15, 0.65];
    const appearanceStep = (APPEARANCE_END - APPEARANCE_START) / (items.length - 1);

    const animationBlock = useRef<HTMLDivElement>(null);
    const animationPercent = useScrollPercentAnimation(animationBlock);

    const halfSection = useMediaQuery(MEDIA_QUERIES.halfSiteSection);

    return (
        <div className="SiteAnimationBlock" ref={animationBlock}>
            <div className="SiteAnimationBlock__sticky">
                <ShowOnMatchMedia mediaQuery={MEDIA_QUERIES.remakeSiteSection} inversion={true}>
                    <div className="SiteAnimationBlock__picture">
                        <MySvg
                            style={{transform: `rotate(${animationPercent * REVOLUTIONS_QUANTITY * 360}deg)`}}
                            Id={TMySvgId.react}
                            fill={{color: COLORS.blue, opacity: 1}}
                        />
                    </div>
                </ShowOnMatchMedia>
                {
                    // TODO: other component, appearance step for halfSection
                    items.map((item, index) => {
                    if (halfSection && (index === 1 || index === 2)) return <></>;
                    return (
                        <SiteTextBlock
                            key={index}
                            index={index}
                            show={animationPercent > APPEARANCE_START + appearanceStep * index}
                            data={item}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SiteAnimationBlock;