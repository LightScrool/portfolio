import React, {FC} from 'react';
import "../../styles/Header/LanguagesButton.scss";
import MySvg from "../../assests/MySvg";
import {useTranslation} from "react-i18next";
import {TMySvgId} from "../../types";

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
            <MySvg Id={TMySvgId.languages} fill={{color: "#fff", opacity: 1}}/>
        </a>
    );
};

export default LanguagesButton;