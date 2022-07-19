import React from 'react';
import "../../styles/Intro/IntroBackground.scss";
import SVG, {SVGIds} from "../../assests/SVG";

const IntroBackground = () => {
    return (
        <div className="IntroBackground">
            <SVG
                className="IntroBackground__circle1"
                Id={SVGIds.circle}
                fill="none"
                stroke={{
                    width: 14,
                    color: "#fff",
                    opacity: 0.1
                }}
            />
            <SVG
                className="IntroBackground__circle2"
                Id={SVGIds.circle}
                fill="none"
                stroke={{
                    width: 17,
                    color: "#fff",
                    opacity: 0.1
                }}
            />
            <SVG
                className="IntroBackground__wave"
                Id={SVGIds.wave}
            />
            <SVG
                className="IntroBackground__dots"
                Id={SVGIds.dots}
            />
        </div>
    );
};

export default IntroBackground;