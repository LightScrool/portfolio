import React, {FC} from 'react';
import SVG, {SVGIds} from '../assests/SVG';
import "../styles/IntroPhoto.scss";
import ImageInsideVector from "./ImageInsideVector";
import photo from "../assests/pictures/my-photo-1.jpg";

const IntroPhoto: FC = () => {
    return (
        <div className="IntroPhoto">
            <ImageInsideVector
                className="IntroPhoto__picture"
                imageURL={photo}
                maskVector={
                    <SVG Id={SVGIds.maskFrame1}/>
                }
                viewBox="0 0 100 94"
            />
            <SVG
                className="IntroPhoto__border"
                Id={SVGIds.maskFrame1}
                fill="none"
                stroke={{
                    color: "#fff",
                    opacity: "0.8",
                    width: "1",
                }}
            />
            <SVG
                className="IntroPhoto__wave"
                Id={SVGIds.wave}
            />
        </div>
    );
};

export default IntroPhoto;