import React, {FC, ReactNode} from 'react';
import "../../styles/Header/Navigation.scss";
import NavigationItem from "./NavigationItem";
import {useTranslation} from "react-i18next";
import LanguagesButton from "./LanguagesButton";

const Navigation: FC = () => {
    const {t} = useTranslation();

    const items: Array<ReactNode> = [
        t('navigation.home'),
        t('navigation.about'),
        t('navigation.works'),
    ]

    return (
        <div className="Navigation">
            {items.map(text => (
                <NavigationItem>
                    {text}
                </NavigationItem>
            ))}
            <LanguagesButton/>
        </div>
    );
};

export default Navigation;