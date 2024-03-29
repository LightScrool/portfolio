import React, {FC} from 'react';
import "../styles/Media.scss";
import {TMediaItem} from "../types";
import HeadHunterIcon from "../assests/icons/HeadHunter.jpg";
import HabrCareerIcon from "../assests/icons/HabrCareer.jpg";
import GitHubIcon from "../assests/icons/GitHub.jpg";
import VKIcon from "../assests/icons/VK.jpg";
import TelegramIcon from "../assests/icons/Telegram.jpg";
import {HYPER_REFERENCES} from "../data";
import {combineClassNames} from "../utils";

interface MediaProps {
    className?: string
}

const Media: FC<MediaProps> = ({className}) => {
    const items: Array<TMediaItem> = [
        {name: "VK", picture: VKIcon, href: HYPER_REFERENCES.VK},
        {name: "Telegram", picture: TelegramIcon, href: HYPER_REFERENCES.Telegram},
        {name: "HabrCareer", picture: HabrCareerIcon, href: HYPER_REFERENCES.HabrCareer},
        {name: "GitHub", picture: GitHubIcon, href: HYPER_REFERENCES.GitHub},
        {name: "HeadHunter", picture: HeadHunterIcon, href: HYPER_REFERENCES.HeadHunter},
    ]

    return (
        <div className={combineClassNames("Media", className)}>
            {items.map(item => (
                <a key={item.name} className="Media__item" href={item.href} target="_blank" rel="noreferrer noopener">
                    <img src={item.picture} alt={item.name}/>
                </a>
            ))}
        </div>
    );
};

export default Media;