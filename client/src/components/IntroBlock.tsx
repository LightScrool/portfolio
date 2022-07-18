import React, {FC} from 'react';
import "../styles/IntroBlock.scss";
import Media from "./Media";
import ContactButton from "./ContactButton";

const IntroBlock: FC = () => {
    return (
        <div className="IntroBlock">
            <div className="IntroBlock__title">
                <h2>Привет, я</h2>
                <h1>Артём Якушевский</h1>
            </div>
            <div className="IntroBlock__subtitle">
                <h3>Web & Front-end разработчик</h3>
            </div>
            <Media/>
            <ContactButton/>
        </div>
    );
};

export default IntroBlock;