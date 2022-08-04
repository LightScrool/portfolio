import React, {FC} from 'react';
import MySvg from '../../assests/MySvg';
import {TMySvgId} from "../../types";
import "../../styles/Intro/IntroPhoto.scss";
import ImageInsideVector from "../ImageInsideVector";
import photo from "../../assests/pictures/my-photo-1.jpg";

const IntroPhoto: FC = () => {
    return (
        <div className="IntroPhoto">
            <ImageInsideVector
                className="IntroPhoto__picture"
                imageURL={photo}
                maskVector={
                    <MySvg Id={TMySvgId.maskFrame1} fill={{color: "#fff", opacity: 1}}/>
                }
                viewBox="0 0 100 94"
            />
            <MySvg
                className="IntroPhoto__border"
                Id={TMySvgId.maskFrame1}
                stroke={{
                    color: "#fff",
                    opacity: 0.8,
                    width: "1",
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