import React, {FC} from 'react';
import "../../styles/Header/Navigation.scss";
import LanguagesButton from "./LanguagesButton";
import {TNavItem} from "../../types";
import useTypedSelector from "../../hooks/useTypedSelector";
import {useTranslation} from "react-i18next";

const Navigation: FC = () => {
    const {t} = useTranslation();
    const offsets = useTypedSelector(state => state.offsets);

    const items: TNavItem[] = [
        {
            name: "home",
            offset: offsets.home,
            text: t('navigation.home')
        },
        {
            name: "about",
            offset: offsets.about,
            text: t('navigation.about')
        },
        {
            name: "works",
            offset: offsets.works,
            text: t('navigation.works')
        },
    ]

    function onClick(offset: number) {
        return function () {
            window.scrollTo(0, offset)
        }
    }

    return (
        <div className="Navigation">
            {items.map(item => (
                <a
                    key={item.name}
                    className="Navigation__item"
                    onClick={onClick(item.offset)}
                >
                    {item.text}
                </a>
            ))}
            <LanguagesButton/>
        </div>
    );
};

export default Navigation;