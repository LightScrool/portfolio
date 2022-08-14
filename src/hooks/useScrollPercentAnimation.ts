import {RefObject, useEffect, useState} from "react";
import {createWindowEventListeners} from "../utils";
import useMediaQuery from "./useMediaQuery";
import {MEDIA_QUERIES} from "../styles/variables";

const useScrollPercentAnimation = (
    animationBlock: RefObject<HTMLElement>
): number => {

    const [animationPercent, setAnimationPercent] = useState<number>(0);
    const disableAnimation = useMediaQuery(MEDIA_QUERIES.disableSiteSectionAnimation);

    useEffect(() => {
        function onScrollOrResize() {
            if (!animationBlock.current) return;

            const blockBCR = animationBlock.current.getBoundingClientRect()
            const startScrollDiff: number = -blockBCR.top;
            const endScrollDiff: number = blockBCR.bottom - document.documentElement.clientHeight;

            let currentAnimationPercent: number = startScrollDiff / (endScrollDiff + startScrollDiff);
            currentAnimationPercent = (currentAnimationPercent < 0) ? 0 : currentAnimationPercent;
            currentAnimationPercent = (currentAnimationPercent > 1) ? 1 : currentAnimationPercent;

            setAnimationPercent(currentAnimationPercent);
        }

        if (disableAnimation) {
            setAnimationPercent(1);
            return;
        }

        return createWindowEventListeners(onScrollOrResize, ['scroll', 'resize']);
    }, [animationBlock, disableAnimation])

    return animationPercent;
}

export default useScrollPercentAnimation;