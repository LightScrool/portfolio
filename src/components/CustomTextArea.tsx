import React, {FC, useRef} from 'react';
import "../styles/CustomTextArea.scss";
import useCustomScrollbar from "../hooks/useCustomScrollbar";

interface CustomTextAreaAreaProps {
    value: string
    setValue: (value: string) => void
    placeholder?: string
    className?: string
}

const CustomTextArea: FC<CustomTextAreaAreaProps> = (
    {
        value,
        setValue,
        placeholder = "",
        className = ""
    }) => {

    const customScrollElement = useRef<HTMLTextAreaElement>(null);
    useCustomScrollbar(customScrollElement);

    return (
        <textarea
            name="message"
            className={"CustomTextArea " + className}
            placeholder={placeholder}
            ref={customScrollElement}
            rows={8}
            value={value}
            onChange={(event) => setValue(event.target.value)}
        />
    );
};

export default CustomTextArea;