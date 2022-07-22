import React, {FC} from 'react';
import "../../styles/Header/LanguagesButton.scss";
import SVG, {SVGIds} from "../../assests/SVG";
import {useTranslation} from "react-i18next";

const LanguagesButton: FC = () => {
    const {i18n} = useTranslation();

    const onClick: () => void = () => {
        if (i18n.language === 'ru')
            i18n.changeLanguage('en')
        else
            i18n.changeLanguage('ru')
    }

    return (
        <a onClick={onClick} className="LanguagesButton">
            <SVG Id={SVGIds.languages}/>
        </a>
    );
};

export default LanguagesButton;