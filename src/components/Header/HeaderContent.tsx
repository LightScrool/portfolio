import React, {FC} from 'react';
import "../../styles/Header/HeaderContent.scss";
import Container from "../Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import {combineClassNames} from "../../utils";

interface HeaderContentProps {
    className?: string
}

const HeaderContent: FC<HeaderContentProps> = ({className}) => {
    return (
        <header className={combineClassNames("Header", className)}>
            <Container>
                <div className="Header__inner">
                    <Logo/>
                    <Navigation/>
                </div>
            </Container>
        </header>
    );
};

export default HeaderContent;