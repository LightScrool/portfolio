import React, {FC, ReactNode} from 'react';
import "../styles/SvgWithHover.scss";
import {combineClassNames} from "../utils";

interface SvgWithHoverProps {
    className?: string,
    offHoverSvg: ReactNode,
    onHoverSvg: ReactNode,
    onClick?: (event?: React.MouseEvent) => void,
    href?: string,
    target?: string,
    rel?: string
}

/*
* Using different svg's on hover, because transition doesn't work on
* svg fill. Also note, that sometimes we can't use different props
* of MySvg, cause of required stroke-position inside or outside, not center
* */
const SvgWithHover: FC<SvgWithHoverProps> = (
    {
        className = "",
        offHoverSvg,
        onHoverSvg,
        onClick,
        href,
        target,
        rel
    }) => {

    const enable = window.matchMedia("(hover: hover)").matches;

    return (
        enable
        ?
        <a
            className={combineClassNames("SvgWithHover", className)}
            onClick={onClick}
            href={href}
            target={target}
            rel={rel}
        >
            <div className="SvgWithHover__off-hover">
                {offHoverSvg}
            </div>
            <div className="SvgWithHover__on-hover">
                {onHoverSvg}
            </div>
        </a>
        :
        <a
            className={combineClassNames("SvgWithHover", className)}
            onClick={onClick}
            href={href}
            target={target}
            rel={rel}
        >
            {offHoverSvg}
        </a>
    );
};

export default SvgWithHover;