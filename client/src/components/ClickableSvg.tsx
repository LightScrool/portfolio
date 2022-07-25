import React, {FC, ReactNode} from 'react';
import "../styles/ClickableSvg.scss";

interface ClickableSvgProps {
    className?: string,
    offHoverSvg: ReactNode,
    onHoverSvg: ReactNode,
    onClick: (event?: React.MouseEvent) => void,
}

/*
* Using different svg's on hover, because transition doesn't work on
* svg fill. Also note, that sometimes we can't use different props
* of MySvg, cause of required stroke-position inside or outside, not center
* */
const ClickableSvg: FC<ClickableSvgProps> = (
    {
        className = "",
        offHoverSvg,
        onHoverSvg,
        onClick
    }) => {
    return (
        <a className={`ClickableSvg ${className}`} onClick={onClick}>
            <div className="ClickableSvg__off-hover">
                {offHoverSvg}
            </div>
            <div className="ClickableSvg__on-hover">
                {onHoverSvg}
            </div>
        </a>
    );
};

export default ClickableSvg;