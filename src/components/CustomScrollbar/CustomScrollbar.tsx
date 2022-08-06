import React, {CSSProperties, ReactNode, UIEventHandler} from 'react';
import {Scrollbars} from "react-custom-scrollbars-2";
import CustomScrollbarThumb from "./CustomScrollbarThumb";

interface CustomScrollbarProps {
    children: ReactNode
    className?: string
    style?: CSSProperties
    onScroll?: UIEventHandler
}

const CustomScrollbar = React.forwardRef<Scrollbars, CustomScrollbarProps>((
    {
        children,
        className,
        style,
        onScroll
    }, ref) => {
    return (
        <Scrollbars
            className={className}
            style={style}
            ref={ref}
            renderThumbHorizontal={CustomScrollbarThumb}
            renderThumbVertical={CustomScrollbarThumb}
            onScroll={onScroll}
        >
            {children}
        </Scrollbars>
    );
});

export default CustomScrollbar;