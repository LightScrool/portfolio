import React, {ChangeEvent, FC, useEffect, useMemo, useRef, useState} from 'react';
import "../styles/CustomTextArea.scss";
import {Scrollbars} from "react-custom-scrollbars-2";
import CustomScrollbar from "./CustomScrollbar";

interface CustomTextAreaAreaProps {
    name: string
    value: string
    setValue: (value: string) => void
    height?: number
    placeholder?: string
    className?: string
}

/*
* Notice, that styles of className param affects div around textarea, not textarea itself
* */
const CustomTextArea: FC<CustomTextAreaAreaProps> = (
    {
        name,
        value,
        setValue,
        placeholder = "",
        className = "",
    }) => {

    const scrollbar = useRef<Scrollbars>(null);
    const initialHeight = useMemo<number>(() => {
        if (!scrollbar.current) return 0;

        return Number(window
            .getComputedStyle(scrollbar.current.container)
            .getPropertyValue('height')
            .slice(0, -2)) - 10;

        // eslint-disable-next-line
    }, [scrollbar.current]);

    const [currentHeight, setCurrentHeight] = useState<number>(initialHeight);

    useEffect(() => {
        if (!value) setCurrentHeight(initialHeight);
    }, [initialHeight, currentHeight, value])

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        event.target.style.height = "auto";
        const scrollHeight = event.target.scrollHeight;
        event.target.style.height = `${scrollHeight}px`;

        setCurrentHeight(scrollHeight);
        setValue(event.target.value);
    }

    return (
        <div className={className}>
            <CustomScrollbar
                className="CustomTextArea-scrollbar"
                ref={scrollbar}
            >
                <textarea
                    name={name}
                    className="CustomTextArea"
                    style={{height: currentHeight}}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </CustomScrollbar>
        </div>
    );
};

export default CustomTextArea;
