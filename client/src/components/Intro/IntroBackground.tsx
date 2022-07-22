import React from 'react';
import "../../styles/Intro/IntroBackground.scss";
import MySvg from "../../assests/MySvg";
import {TMySvgId} from "../../types";

const IntroBackground = () => {
    return (
        <div className="IntroBackground">
            <MySvg
                className="IntroBackground__circle1"
                Id={TMySvgId.circle}
                stroke={{
                    width: 14,
                    color: "#fff",
                    opacity: 0.1
                }}
            />
            <MySvg
                className="IntroBackground__circle2"
                Id={TMySvgId.circle}
                stroke={{
                    width: 17,
                    color: "#fff",
                    opacity: 0.1
                }}
            />
            <MySvg
                className="IntroBackground__wave"
                Id={TMySvgId.wave}
                fill={{color: "#fff", opacity: 0.4}}
            />
            <MySvg
                className="IntroBackground__dots"
                Id={TMySvgId.dots}
                fill={{color: "#fff", opacity: 0.2}}
            />
        </div>
    );
};

export default IntroBackground;