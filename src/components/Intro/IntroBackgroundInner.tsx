import React, {FC} from 'react';
import "../../styles/Intro/IntroBackgroundInner.scss";
import MySvg from "../../assests/MySvg";
import {TMySvgId} from "../../types";

const IntroBackgroundInner: FC = () => {
    return (
        <div className="IntroBackgroundInner">
            <MySvg
                className="IntroBackgroundInner__circle"
                Id={TMySvgId.circle}
                stroke={{
                    width: 17,
                    color: "#fff",
                    opacity: 0.1
                }}
            />
            <MySvg
                className="IntroBackgroundInner__wave"
                Id={TMySvgId.wave}
                fill={{color: "#fff", opacity: 0.4}}
            />
        </div>
    );
};

export default IntroBackgroundInner;