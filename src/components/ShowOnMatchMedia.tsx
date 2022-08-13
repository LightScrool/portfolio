import React, {FC, ReactNode} from 'react';
import useMediaQuery from "../hooks/useMediaQuery";

interface ShowOnMatchMedia {
    children: ReactNode
    mediaQuery: string
    inversion?: boolean
}

const ShowOnMatchMedia: FC<ShowOnMatchMedia> = (
    {
        children,
        mediaQuery,
        inversion = false
    }) => {

    const show = useMediaQuery(mediaQuery);

    return (
        show !== inversion
        ?
        <>{children}</>
        :
        <></>
    );
};

export default ShowOnMatchMedia;