import React, {FC, useEffect, useState} from 'react';
import "../../styles/Header/Header.scss";
import Container from "../Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import useTypedSelector from "../../hooks/useTypedSelector";

const Header: FC = () => {
    const [fixed, setFixed] = useState<boolean>();
    const aboutOffset = useTypedSelector(state => state.offsets.about);

    useEffect(() => {
        function onScrollOrResize() {
            setFixed(window.scrollY >= aboutOffset - 1);
            console.log(window.scrollY);
        }

        window.addEventListener('scroll', onScrollOrResize);
        window.addEventListener('resize', onScrollOrResize);
        onScrollOrResize();

        return function () {
            window.removeEventListener('scroll', onScrollOrResize);
            window.removeEventListener('resize', onScrollOrResize);
        }
    }, [aboutOffset])

    return (
        <header className={"Header " + (fixed ? "_fixed" : "")}>
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