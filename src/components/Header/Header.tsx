import React, {FC} from 'react';
import {MEDIA_QUERIES} from "../../styles/variables";
import HeaderFixedTracker from "./HeaderFixedTracker";
import useMediaQuery from "../../hooks/useMediaQuery";
import HeaderContent from "./HeaderContent";

const Header: FC = () => {
    const neverFixed = useMediaQuery(`${MEDIA_QUERIES.container} and (min-aspect-ratio: 2/1)`);

    return (
        neverFixed
            ?
            <HeaderContent/>
            :
            <HeaderFixedTracker/>
    );
};

export default Header;