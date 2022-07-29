import React, {FC} from 'react';
import "../../styles/Header/LanguagesButton.scss";
import MySvg from "../../assests/MySvg";
import {useTranslation} from "react-i18next";
import {TMySvgId} from "../../types";
import SvgWithHover from "../SvgWithHover";

const LanguagesButton: FC = () => {
    const {i18n} = useTranslation();

    const onClick: () => void = () => {
        if (i18n.language === 'ru')
            i18n.changeLanguage('en')
        else
            i18n.changeLanguage('ru')
    }

    return (
        <SvgWithHover
            className="LanguagesButton"
            offHoverSvg={<MySvg Id={TMySvgId.languagesFill} fill={{color: "#fff", opacity: 1}}/>}
            onHoverSvg={<MySvg Id={TMySvgId.languagesStroke} fill={{color: "#fff", opacity: 1}}/>}
            onClick={onClick}
        />
    );
};

export default LanguagesButton;