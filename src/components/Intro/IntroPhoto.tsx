import React, {FC} from 'react';
import "../../styles/Intro/IntroPhoto.scss";
import MySvg from '../../assests/MySvg';
import {TMySvgId} from "../../types";
import ImageInsideVector from "../ImageInsideVector";
import photo from "../../assests/pictures/my-photo-1.jpg";

const IntroPhoto: FC = () => {
    const svgId = TMySvgId.maskFrame1;
    const viewBox = "0 0 100 94";

    return (
        <div className="IntroPhoto">
            <svg
                className="IntroPhoto__size-box"
                viewBox={viewBox}
            />
            <ImageInsideVector
                className="IntroPhoto__picture"
                imageURL={photo}
                maskVector={
                    <MySvg Id={svgId} fill={{color: "#fff", opacity: 1}}/>
                }
                viewBox={viewBox}
            />
            <MySvg
                className="IntroPhoto__border"
                Id={svgId}
                stroke={{
                    color: "#fff",
                    opacity: 0.8,
                    width: 1,
                }}
            />
            <MySvg
                className="IntroPhoto__wave"
                Id={TMySvgId.wave}
                fill={{color: "#fff", opacity: 0.4}}
            />
        </div>
    );
};

export default IntroPhoto;