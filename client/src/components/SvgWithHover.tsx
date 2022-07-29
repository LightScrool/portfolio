import React, {FC, ReactNode} from 'react';
import "../styles/SvgWithHover.scss";

interface SvgWithHoverProps {
    className?: string,
    offHoverSvg: ReactNode,
    onHoverSvg: ReactNode,
    onClick?: (event?: React.MouseEvent) => void,
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
        onClick
    }) => {
    return (
        <a className={`SvgWithHover ${className}`} onClick={onClick}>
            <div className="SvgWithHover__off-hover">
                {offHoverSvg}
            </div>
            <div className="SvgWithHover__on-hover">
                {onHoverSvg}
            </div>
        </a>
    );
};

export default SvgWithHover;