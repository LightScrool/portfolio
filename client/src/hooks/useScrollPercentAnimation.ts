import {RefObject, useEffect, useState} from "react";
import {createWindowEventListeners} from "../utils";

const useScrollPercentAnimation = (
    animationBlock: RefObject<HTMLElement>
): number => {

    const [animationPercent, setAnimationPercent] = useState<number>(0);

    useEffect(() => {
        function onScrollOrResize() {
            if (!animationBlock.current) return;

            const startScroll: number = animationBlock.current.offsetTop;
            const endScroll: number = startScroll + animationBlock.current.scrollHeight - document.documentElement.clientHeight;
            const currentScroll: number = window.scrollY;

            let currentAnimationPercent: number = (currentScroll - startScroll) / (endScroll - startScroll);
            currentAnimationPercent = (currentAnimationPercent < 0) ? 0 : currentAnimationPercent;
            currentAnimationPercent = (currentAnimationPercent > 1) ? 1 : currentAnimationPercent;
            setAnimationPercent(currentAnimationPercent);
        }

        return createWindowEventListeners(onScrollOrResize, ['scroll', 'resize']);
    }, [])

    return animationPercent;
}

export default useScrollPercentAnimation;