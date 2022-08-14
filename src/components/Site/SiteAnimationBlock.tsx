import React, {FC, useRef} from 'react';
import "../../styles/Site/SiteAnimationBlock.scss";
import MySvg from "../../assests/MySvg";
import {TMySvgId, TSiteItem} from "../../types";
import {COLORS, MEDIA_QUERIES} from "../../styles/variables";
import SiteTextBlock from "./SiteTextBlock";
import useScrollPercentAnimation from "../../hooks/useScrollPercentAnimation";
import {HYPER_REFERENCES} from "../../data";
import ShowOnMatchMedia from "../ShowOnMatchMedia";

const SiteAnimationBlock: FC = () => {
    const items: TSiteItem[] = [
        {name: "React"},
        {name: "Figma", href: HYPER_REFERENCES.Figma},
        {name: "SASS"},
        {name: "SVG"},
        {name: "Git", href: HYPER_REFERENCES.GitHubProject},
        {name: "i18next"},
        {name: "TypeScript"},
    ];
    const REVOLUTIONS_QUANTITY = 1.5;
    const [APPEARANCE_START, APPEARANCE_END] = [0.15, 0.65];
    const appearanceStep = (APPEARANCE_END - APPEARANCE_START) / (items.length - 1);

    const animationBlock = useRef<HTMLDivElement>(null);
    const animationPercent = useScrollPercentAnimation(animationBlock);

    return (
        <div className="SiteAnimationBlock" ref={animationBlock}>
            <div className="SiteAnimationBlock__sticky">
                <ShowOnMatchMedia mediaQuery={MEDIA_QUERIES.remakeSiteSectionAnimation} inversion={true}>
                    <div className="SiteAnimationBlock__picture">
                        <MySvg
                            style={{transform: `rotate(${animationPercent * REVOLUTIONS_QUANTITY * 360}deg)`}}
                            Id={TMySvgId.react}
                            fill={{color: COLORS.blue, opacity: 1}}
                        />
                    </div>
                </ShowOnMatchMedia>
                {items.map((item, index) => (
                    <SiteTextBlock
                        key={index}
                        index={index}
                        show={animationPercent > APPEARANCE_START + appearanceStep * index}
                        data={item}
                    />
                ))}
            </div>
        </div>
    );
};

export default SiteAnimationBlock;