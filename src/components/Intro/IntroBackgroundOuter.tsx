import React from 'react';
import "../../styles/Intro/IntroBackgroundOuter.scss";
import MySvg from "../../assests/MySvg";
import {TMySvgId} from "../../types";

const IntroBackgroundOuter = () => {
    return (
        <div className="IntroBackgroundOuter">
            <MySvg
                className="IntroBackgroundOuter__circle"
                Id={TMySvgId.circle}
                stroke={{
                    width: 14,
                    color: "#fff",
                    opacity: 0.1
                }}
            />
            <MySvg
                className="IntroBackgroundOuter__dots"
                Id={TMySvgId.dots}
                fill={{color: "#fff", opacity: 0.2}}
            />
        </div>
    );
};

export default IntroBackgroundOuter;