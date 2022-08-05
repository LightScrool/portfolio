import React, {ChangeEvent, FC, useEffect, useRef} from 'react';
import "../styles/CustomTextArea.scss";
import {Scrollbars} from "react-custom-scrollbars-2";
import CustomScrollbar from "./CustomScrollbar";
import {createWindowEventListeners} from "../utils";

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
    const textarea = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        return createWindowEventListeners(() => {
            if (!scrollbar.current || !textarea.current) return 0;

            const standardHeight = Number(window
                .getComputedStyle(scrollbar.current.container)
                .getPropertyValue('height')
                .slice(0, -2)) - 10;

            textarea.current.style.minHeight = `${standardHeight}px`;

        }, ["resize"])
    });

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);

        event.target.style.height = "auto";
        const scrollHeight = event.target.scrollHeight;
        event.target.style.height = `${scrollHeight}px`;
    }

    return (
        <div className={className}>
            <CustomScrollbar
                className="CustomTextArea-scrollbar"
                ref={scrollbar}
            >
                <textarea
                    ref={textarea}
                    name={name}
                    className="CustomTextArea"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </CustomScrollbar>
        </div>
    );
};

export default CustomTextArea;
