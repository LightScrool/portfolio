import React, {FC, useMemo, useRef} from 'react';
import "../../styles/Site/SiteAnimationBlock.scss";
import MySvg from "../../assests/MySvg";
import {TMySvgId, TSiteItem} from "../../types";
import {COLORS, MEDIA_QUERIES} from "../../styles/variables";
import SiteTextBlock from "./SiteTextBlock";
import useScrollPercentAnimation from "../../hooks/useScrollPercentAnimation";
import {HYPER_REFERENCES, SITE_SECTION_ANIMATION} from "../../data";
import ShowOnMatchMedia from "../ShowOnMatchMedia";
import useMediaQuery from "../../hooks/useMediaQuery";

const SiteAnimationBlock: FC = () => {
    const halfSection = useMediaQuery(MEDIA_QUERIES.halfSiteSection);
    const items = useMemo<TSiteItem[]>(() => (
        halfSection
            ?
            [
                {id: 1, name: "React"},
                {id: 4, name: "Figma", href: HYPER_REFERENCES.Figma},
                {id: 5, name: "Git", href: HYPER_REFERENCES.GitHubProject},
                {id: 6, name: "i18next"},
                {id: 7, name: "TypeScript"},
            ]
            :
            [
                {id: 1, name: "React"},
                {id: 2, name: "SVG"},
                {id: 3, name: "SASS"},
                {id: 4, name: "Figma", href: HYPER_REFERENCES.Figma},
                {id: 5, name: "Git", href: HYPER_REFERENCES.GitHubProject},
                {id: 6, name: "i18next"},
                {id: 7, name: "TypeScript"},
            ]
    ), [halfSection]);

    const animationBlock = useRef<HTMLDivElement>(null);
    const animationPercent = useScrollPercentAnimation(animationBlock);

    const appearanceStep = useMemo<number>(() => (
        (SITE_SECTION_ANIMATION.appearanceEnd - SITE_SECTION_ANIMATION.appearanceStart) / (items.length - 1)
    ), [items]);
    const revolutionsQuantity = useMemo<number>(() => (
        halfSection
            ?
            SITE_SECTION_ANIMATION.revolutionsQuantityHalf
            :
            SITE_SECTION_ANIMATION.revolutionsQuantityDefault
    ), [halfSection])

    return (
        <div className="SiteAnimationBlock" ref={animationBlock}>
            <div className="SiteAnimationBlock__sticky">
                <ShowOnMatchMedia mediaQuery={MEDIA_QUERIES.remakeSiteSection} inversion={true}>
                    <div className="SiteAnimationBlock__picture">
                        <MySvg
                            style={{transform: `rotate(${animationPercent * revolutionsQuantity * 360}deg)`}}
                            Id={TMySvgId.react}
                            fill={{color: COLORS.blue, opacity: 1}}
                        />
                    </div>
                </ShowOnMatchMedia>
                {items.map((item, index) => (
                    <SiteTextBlock
                        key={item.id}
                        show={animationPercent > SITE_SECTION_ANIMATION.appearanceStart + appearanceStep * index}
                        data={item}
                    />
                ))}
            </div>
        </div>
    );
};

export default SiteAnimationBlock;