import React, {CSSProperties, ReactNode, UIEventHandler} from 'react';
import {Scrollbars} from "react-custom-scrollbars-2";
import CustomScrollbarThumb from "./CustomScrollbarThumb";

interface CustomScrollbarProps {
    children: ReactNode
    className?: string
    style?: CSSProperties
    onScroll?: UIEventHandler
    autoHeight?: boolean
}

const CustomScrollbar = React.forwardRef<Scrollbars, CustomScrollbarProps>((
    {
        children,
        className,
        style,
        onScroll,
        autoHeight = false
    }, ref) => {
    return (
        <Scrollbars
            className={className}
            style={style}
            ref={ref}
            autoHeight={autoHeight}
            renderThumbHorizontal={CustomScrollbarThumb}
            renderThumbVertical={CustomScrollbarThumb}
            onScroll={onScroll}
        >
            {children}
        </Scrollbars>
    );
});

export default CustomScrollbar;