import React, {CSSProperties, ReactNode} from 'react';
import {Scrollbars} from "react-custom-scrollbars-2";
import CustomScrollbarThumb from "./CustomScrollbarThumb";

interface CustomScrollbarProps {
    children: ReactNode
    className?: string
    style?: CSSProperties
}

const CustomScrollbar = React.forwardRef<Scrollbars, CustomScrollbarProps>((
    {
        children,
        className,
        style
    }, ref) => {
    return (
        <Scrollbars
            className={className}
            style={style}
            ref={ref}
            renderThumbHorizontal={CustomScrollbarThumb}
            renderThumbVertical={CustomScrollbarThumb}
        >
            {children}
        </Scrollbars>
    );
});

export default CustomScrollbar;