import React, {FC, useRef} from 'react';
import "../../styles/Site/SiteAnimationBlock.scss";
import MySvg from "../../assests/MySvg";
import {TMySvgId, TSiteItem} from "../../types";
import {COLORS} from "../../styles/variables";
import SiteTextBlock from "./SiteTextBlock";
import useScrollPercentAnimation from "../../hooks/useScrollPercentAnimation";
import {HYPER_REFERENCES} from "../../data";

const SiteAnimationBlock: FC = () => {
    const revolutionsQuantity = 1.5;
    const animationBlock = useRef<HTMLDivElement>(null);
    const animationPercent = useScrollPercentAnimation(animationBlock);

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
            <div className="SiteAnimationBlock" ref={animationBlock}>
                <div className="SiteAnimationBlock__sticky">
                    <div className="SiteAnimationBlock__picture">
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
                            show={animationPercent > 0.2 + 0.08 * index}
                            data={item}
                        />
                    ))}
                </div>
            </div>
    );
};

export default SiteAnimationBlock;