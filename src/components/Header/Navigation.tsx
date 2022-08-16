import React, {FC} from 'react';
import "../../styles/Header/Navigation.scss";
import LanguagesButton from "./LanguagesButton";
import NavigationSections from "./NavigationSections";
import ShowOnMatchMedia from "../ShowOnMatchMedia";
import {MEDIA_QUERIES} from "../../styles/variables";

const Navigation: FC = () => {
    return (
        <div className="Navigation">
            <ShowOnMatchMedia mediaQuery={MEDIA_QUERIES.remakeHeader} inversion={true}>
                <NavigationSections className="Navigation__item"/>
            </ShowOnMatchMedia>
            <LanguagesButton className="Navigation__item"/>
        </div>
    );
};

export default Navigation;