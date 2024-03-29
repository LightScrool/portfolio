export enum HYPER_REFERENCES {
    VK = "https://vk.com/artem19o",
    Telegram = "https://t.me/LightScrool",
    HabrCareer = "https://career.habr.com/lightscrool",
    GitHub = "https://github.com/LightScrool",
    GitHubProject = "https://github.com/LightScrool/portfolio",
    HeadHunter = "https://perm.hh.ru/resume/cd83bc1eff099f6a690039ed1f315647384a4a",
    CodeSignal = "https://app.codesignal.com/profile/lightscrool",
    Figma = "https://www.figma.com/file/mTEq9TY3ZqpNGKUkaFNkC4/Portfolio?node-id=286%3A100"
}

export const SITE_SECTION_ANIMATION = {
    revolutionsQuantityDefault: 1.5,
    revolutionsQuantityHalf: 2/3,
    appearanceStart: 0.15,
    appearanceEnd: 0.65,
}

// Too small value in enter timeout of react-transition-group is cause bug, when item appears instantly
export const INSTANT_APPEARANCE_FIX_TIME = 50;
