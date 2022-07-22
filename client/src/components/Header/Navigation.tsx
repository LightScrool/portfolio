import React, {FC, ReactNode} from 'react';
import "../../styles/Header/Navigation.scss";
import NavigationItem from "./NavigationItem";
import SVG, {SVGIds} from "../../assests/SVG";
import {useTranslation} from "react-i18next";

const Navigation: FC = () => {
    const {t} = useTranslation();

    const items: Array<ReactNode> = [
        t('navigation.home'),
        t('navigation.about'),
        t('navigation.works'),
    ]

    return (
        <ul className="Navigation">
            {items.map(text => (
                <NavigationItem>
                    {text}
                </NavigationItem>
            ))}
            <NavigationItem>
                <SVG Id={SVGIds.languages}/>
            </NavigationItem>
        </ul>
    );
};

export default Navigation;