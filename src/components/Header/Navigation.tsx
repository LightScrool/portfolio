import React, {FC, useEffect, useMemo, useState} from 'react';
import "../../styles/Header/Navigation.scss";
import LanguagesButton from "./LanguagesButton";
import {TNavItem} from "../../types";
import useTypedSelector from "../../hooks/useTypedSelector";
import {useTranslation} from "react-i18next";
import {createWindowEventListeners} from "../../utils";

const Navigation: FC = () => {
    const {t} = useTranslation();
    const offsets = useTypedSelector(state => state.offsets);
    const items = useMemo<TNavItem[]>(() => [
        {
            name: "home",
            offset: offsets.home,
            text: t('navigation.home'),
        },
        {
            name: "about",
            offset: offsets.about,
            text: t('navigation.about'),
        },
        {
            name: "works",
            offset: offsets.works,
            text: t('navigation.works'),
        },
    ], [offsets, t])

    const [activeItem, setActiveItem] = useState<string>("");
    useEffect(() => {
        function onScrollOrResize() {
            let newActiveName = ""
            for (const item of items) {
                if (window.scrollY >= item.offset- 1) newActiveName = item.name;
            }
            setActiveItem(newActiveName);
        }

        return createWindowEventListeners(onScrollOrResize, ['scroll', 'resize']);
    }, [items])

    function onClick(offset: number) {
        return function (event: React.MouseEvent) {
            event.preventDefault();
            window.scrollTo(0, offset)
        }
    }

    return (
        <div className="Navigation">
            {items.map(item => (
                <a
                    key={item.name}
                    className={`Navigation__item${activeItem === item.name ? " _active" : ""}`}
                    href="/#"
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