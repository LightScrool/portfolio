import React, {FC, useEffect, useState} from 'react';
import "../../styles/Header/Header.scss";
import Container from "../Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import useTypedSelector from "../../hooks/useTypedSelector";
import {TIMING} from "../../styles/variables";

const Header: FC = () => {
    const aboutOffset = useTypedSelector(state => state.offsets.about);
    const [fixed, setFixed] = useState<boolean>(true);
    const [classMod, setClassMod] = useState<string>("");

    useEffect(() => {
        function onScrollOrResize() {
            setFixed(window.scrollY >= aboutOffset - 1);
        }

        window.addEventListener('scroll', onScrollOrResize);
        window.addEventListener('resize', onScrollOrResize);
        onScrollOrResize();

        return function () {
            window.removeEventListener('scroll', onScrollOrResize);
            window.removeEventListener('resize', onScrollOrResize);
        }
    }, [aboutOffset])

    useEffect(() => {
        if (fixed) {
            setClassMod("_preFixed")
            setTimeout(() => setClassMod("_fixed"), 20);
            return
        }
        setClassMod("_postFixed")
        setTimeout(() => setClassMod(""), TIMING.standard);
    }, [fixed])

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