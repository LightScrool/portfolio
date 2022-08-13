import React, {FC} from 'react';
import "../../styles/Header/Navigation.scss";
import LanguagesButton from "./LanguagesButton";
import NavigationSections from "./NavigationSections";
import ShowOnMatchMedia from "../ShowOnMatchMedia";

const Navigation: FC = () => {

    const showSectionsMediaQuery = "(min-width: 650px)";

    return (
        <div className="Navigation">
            <ShowOnMatchMedia mediaQuery={showSectionsMediaQuery}>
                <NavigationSections/>
            </ShowOnMatchMedia>
            <LanguagesButton/>
        </div>
    );
};

export default Navigation;