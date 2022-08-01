import React, {FC, useEffect, useRef, useState} from 'react';
import "../../styles/Header/Header.scss";
import Container from "../Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import useTypedSelector from "../../hooks/useTypedSelector";
import {TIMING} from "../../styles/variables";
import {createWindowEventListeners} from "../../utils";

const Header: FC = () => {
    const aboutOffset = useTypedSelector(state => state.offsets.about);
    const fixed = useRef<boolean>(false);
    const [classMod, setClassMod] = useState<string>("");

    const ditMountCheck = useRef<boolean>(true);
    useEffect(() => {
        function onScrollOrResize() {
            const newFixed = window.scrollY >= aboutOffset - 1;

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
            if (newFixed !== fixed.current){
                fixed.current = newFixed;

                if (fixed.current) {
                    setClassMod("_preFixed")
                    setTimeout(() => setClassMod("_fixed"), 20);
                    return
                }
                setClassMod("_postFixed")
                setTimeout(() => setClassMod(""), TIMING.standard);
            }
        }

        // Function is not working correctly before offsets was stated in Redux
        if (!aboutOffset) return;

        return createWindowEventListeners(onScrollOrResize, ['scroll', 'resize']);
    }, [aboutOffset])

    return (
        <header className={"Header " + classMod}>
            <Container>
                <div className="Header__inner">
                    <Logo/>
                    <Navigation/>
                </div>
            </Container>
        </header>
    );
};

export default Header;