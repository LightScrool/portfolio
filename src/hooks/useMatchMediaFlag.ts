import {useEffect, useState} from "react";
import {createWindowEventListeners} from "../utils";

const useMatchMediaFlag = (mediaQuery: string) => {
    const [flag, setFlag] = useState<boolean>(true);

    useEffect(() => {
        return createWindowEventListeners(() => {
            setFlag(window.matchMedia(mediaQuery).matches);
        }, ["resize"]);
    }, [])

    return flag;
}

export default useMatchMediaFlag