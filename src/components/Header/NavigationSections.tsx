import React, {FC, useEffect, useMemo, useState} from 'react';
import "../../styles/Header/NavigationSections.scss";
import {useTranslation} from "react-i18next";
import useTypedSelector from "../../hooks/useTypedSelector";
import {TNavItem} from "../../types";
import {combineClassNames, createWindowEventListeners} from "../../utils";
import useScrollTo from "../../hooks/useScrollTo";

interface NavigationSectionsProps {
    className?: string
}

const NavigationSections: FC<NavigationSectionsProps> = ({className}) => {
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

    const bodyScrollbar = useTypedSelector(state => state.bodyScrollbar);
    const [activeItem, setActiveItem] = useState<string>("");

    useEffect(() => {
        function onScrollOrResize() {
            if (!bodyScrollbar) return;

            let newActiveName = ""
            for (const item of items) {
                if (bodyScrollbar.getScrollTop() >= item.offset - 1) newActiveName = item.name;
            }
            setActiveItem(newActiveName);
        }

        return createWindowEventListeners(onScrollOrResize, ['scroll', 'resize']);
    }, [items, bodyScrollbar])

    const scrollTo = useScrollTo();

    function onClick(offset: number) {
        return function (event: React.MouseEvent) {
            event.preventDefault();
            scrollTo(offset)
        }
    }

    return (
        <>
            {items.map(item => (
                <a
                    key={item.name}
                    className={combineClassNames(className, "NavigationSection", activeItem === item.name ? "_active" : "")}
                    href="/#"
                    onClick={onClick(item.offset)}
                >
                    {item.text}
                </a>
            ))}
        </>
    );
};

export default NavigationSections;