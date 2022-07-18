import React, {FC, ReactNode} from 'react';
import "../styles/Navigation.scss";
import NavigationItem from "./NavigationItem";
import SVG, {SVGIds} from "../assests/SVG";

const Navigation: FC = () => {
    const items: Array<ReactNode> = [
        'Главная',
        'Обо мне',
        'Работы',
        <SVG Id={SVGIds.languages}/>
    ]

    return (
        <ul className="Navigation">
            {items.map(text => (
                <NavigationItem>
                    {text}
                </NavigationItem>
            ))}
        </ul>
    );
};

export default Navigation;