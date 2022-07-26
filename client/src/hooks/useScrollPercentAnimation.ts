import {RefObject, useEffect, useState} from "react";

const useScrollPercentAnimation = (animationBlock: RefObject<HTMLDivElement>): number => {
    const [animationPercent, setAnimationPercent] = useState<number>(0);

    function onScrollOrResize() {
        if (!animationBlock.current) return;

        const startScroll: number = animationBlock.current.offsetTop;
        const endScroll: number = startScroll + animationBlock.current.scrollHeight - window.innerHeight;
        const currentScroll: number = window.scrollY;

        let currentAnimationPercent: number = (currentScroll - startScroll) / (endScroll - startScroll);
        currentAnimationPercent = (currentAnimationPercent < 0) ? 0 : currentAnimationPercent;
        currentAnimationPercent = (currentAnimationPercent > 1) ? 1 : currentAnimationPercent;
        setAnimationPercent(currentAnimationPercent);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScrollOrResize);
        window.addEventListener('resize', onScrollOrResize);
        onScrollOrResize();

        return function () {
            window.removeEventListener('scroll', onScrollOrResize);
            window.removeEventListener('resize', onScrollOrResize);
        }
    }, [])

    return animationPercent;
}

export default useScrollPercentAnimation;