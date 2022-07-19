import React, {FC} from 'react';
import "../../styles/Header/Header.scss";
import Container from "../Container";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header: FC = () => {
    return (
        <header className="Header">
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