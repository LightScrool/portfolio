import React, {FC} from 'react';
import "../styles/Loader.scss";
import {combineClassNames} from "../utils";

interface LoaderProps {
    active: boolean,
    className?: string
}

const Loader: FC<LoaderProps> = (
    {
        active,
        className
    }) => {

    return (
        active
            ?
            <label className={combineClassNames("Loader", className)}/>
            :
            <></>
    );
};

export default Loader;