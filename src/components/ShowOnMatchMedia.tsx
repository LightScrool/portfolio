import React, {FC, ReactNode} from 'react';
import useMediaQuery from "../hooks/useMediaQuery";

interface ShowOnMatchMediaProps {
    children: ReactNode
    mediaQuery: string
    inversion?: boolean
}

const ShowOnMatchMedia: FC<ShowOnMatchMediaProps> = (
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