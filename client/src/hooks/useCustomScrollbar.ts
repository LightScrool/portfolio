import {RefObject, useEffect} from "react";
import OverlayScrollbars, {Options as TOptions} from "overlayscrollbars";
import "overlayscrollbars/css/OverlayScrollbars.min.css";
import "../styles/myCustomScrollbar.scss";

const defaultConfiguration: TOptions = {
    className: "os-theme-dark",
    resize: "none",
    paddingAbsolute: true,
    scrollbars: {clickScrolling: true}
}

const useCustomScrollbar = (
    ref: RefObject<any>,
    configuration: TOptions = defaultConfiguration,
) => {

    useEffect(() => {
        if (!ref.current) return;

        const scroll = OverlayScrollbars(ref.current, configuration)

        return function () {
            if (scroll) scroll.destroy();
        }
    }, [ref])
}

export default useCustomScrollbar;