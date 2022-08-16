import React, {FC} from 'react';
import "../../styles/Header/LanguagesButton.scss";
import MySvg from "../../assests/MySvg";
import {useTranslation} from "react-i18next";
import {TMySvgId} from "../../types";
import SvgWithHover from "../SvgWithHover";
import {combineClassNames} from "../../utils";

interface LanguagesButtonProps {
    className?: string
}

const LanguagesButton: FC<LanguagesButtonProps> = ({className}) => {
    const {i18n} = useTranslation();

    const onClick: () => void = () => {
        const language = (i18n.language === 'ru') ? 'en' : 'ru';
        i18n.changeLanguage(language).then(() => {
                window.dispatchEvent(new Event("resize"));
            }
        )
    }

    return (
        <SvgWithHover
            className={combineClassNames(className, "LanguagesButton")}
            offHoverSvg={<MySvg Id={TMySvgId.languagesFill} fill={{color: "#fff", opacity: 1}}/>}
            onHoverSvg={<MySvg Id={TMySvgId.languagesStroke} fill={{color: "#fff", opacity: 1}}/>}
            onClick={onClick}
        />
    );
};

export default LanguagesButton;