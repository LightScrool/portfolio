import React, {FC} from 'react';
import "../styles/Loader.scss";

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
            <label className={className ? `Loader ${className}` : "Loader"}/>
            :
            <></>
    );
};

export default Loader;