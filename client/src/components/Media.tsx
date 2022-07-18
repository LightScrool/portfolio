import React from 'react';
import "../styles/Media.scss";
import HeadHunterIcon from "../assests/icons/HeadHunter.jpg";
import HabrCareerIcon from "../assests/icons/HabrCareer.jpg";
import GitHubIcon from "../assests/icons/GitHub.jpg";
import VKIcon from "../assests/icons/VK.jpg";
import TelegramIcon from "../assests/icons/Telegram.jpg";

const Media = () => {
    type TItem = {src: string, alt: string}

    const items: Array<TItem> = [
        {src: HeadHunterIcon, alt: "HeadHunter"},
        {src: HabrCareerIcon, alt: "HabrCareer"},
        {src: GitHubIcon, alt: "GitHub"},
        {src: VKIcon, alt: "VK"},
        {src: TelegramIcon, alt: "Telegram"}
    ]

    return (
        <div className="Media">
            {items.map(item => (
                <div className="Media__item">
                    <img src={item.src} alt={item.alt}/>
                </div>
            ))}
        </div>
    );
};

export default Media;