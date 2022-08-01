import React from 'react';
import "../styles/Media.scss";
import {TMediaItem} from "../types";
import HeadHunterIcon from "../assests/icons/HeadHunter.jpg";
import HabrCareerIcon from "../assests/icons/HabrCareer.jpg";
import GitHubIcon from "../assests/icons/GitHub.jpg";
import VKIcon from "../assests/icons/VK.jpg";
import TelegramIcon from "../assests/icons/Telegram.jpg";

const Media = () => {
    const items: Array<TMediaItem> = [
        {name: "VK", picture: VKIcon, href: "https://vk.com/artem19o"},
        {name: "Telegram", picture: TelegramIcon, href: "https://t.me/LightScrool"},
        {name: "HabrCareer", picture: HabrCareerIcon, href: "https://career.habr.com/lightscrool"},
        {name: "GitHub", picture: GitHubIcon, href: "https://github.com/LightScrool"},
        {name: "HeadHunter", picture: HeadHunterIcon, href: "https://perm.hh.ru/resume/cd83bc1eff099f6a690039ed1f315647384a4a"},
    ]

    return (
        <div className="Media">
            {items.map(item => (
                <a key={item.name} className="Media__item" href={item.href} target="_blank">
                    <img src={item.picture} alt={item.name}/>
                </a>
            ))}
        </div>
    );
};

export default Media;