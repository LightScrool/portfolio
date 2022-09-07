import React, {useEffect, useRef, useState} from 'react';
import "../../styles/Header/HeaderFixedTracker.scss";
import {createWindowEventListeners} from "../../utils";
import useTypedSelector from "../../hooks/useTypedSelector";
import {TIMING} from "../../styles/variables";
import HeaderContent from "./HeaderContent";
import {INSTANT_APPEARANCE_FIX_TIME} from "../../data";

const HeaderFixedTracker = () => {
    const aboutOffset = useTypedSelector(state => state.offsets.about);
    const fixed = useRef<boolean>(false);
    const [classMod, setClassMod] = useState<string>("");

    const bodyScrollbar = useTypedSelector(state => state.bodyScrollbar);
    const ditMountCheck = useRef<boolean>(true);
    const newClassModTimeout = useRef<NodeJS.Timeout>();
    useEffect(() => {
        function onScrollOrResize() {
            if (!bodyScrollbar) return;

            const newFixed = bodyScrollbar.getScrollTop() >= aboutOffset - 1;

            // ditMount case, classes are set without pre- and post- statuses
            if (ditMountCheck.current) {
                ditMountCheck.current = false;

                fixed.current = newFixed;
                if (fixed.current) {
                    setClassMod("_fixed")
                }
                return;
            }

            // general case
            if (newFixed !== fixed.current) {
                clearTimeout(newClassModTimeout.current);
                fixed.current = newFixed;

                if (fixed.current) {
                    setClassMod("_preFixed")
                    newClassModTimeout.current = setTimeout(() => setClassMod("_fixed"), INSTANT_APPEARANCE_FIX_TIME);
                    return
                }
                setClassMod("_postFixed")
                newClassModTimeout.current = setTimeout(() => setClassMod(""), TIMING.standard);
            }
        }

        // Function is not working correctly before offsets was stated in Redux
        if (!aboutOffset) return;

        return createWindowEventListeners(onScrollOrResize, ['scroll', 'resize']);
    }, [aboutOffset, bodyScrollbar])

    return (
        <HeaderContent className={classMod}/>
    );
};

export default HeaderFixedTracker;