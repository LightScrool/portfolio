import React, {ChangeEvent, FC, useState} from 'react';
import "../styles/CustomTextArea.scss";
import {Scrollbars} from "react-custom-scrollbars-2";

interface CustomTextAreaAreaProps {
    value: string
    setValue: (value: string) => void
    height?: number
    placeholder?: string
    className?: string
}

const CustomTextArea: FC<CustomTextAreaAreaProps> = (
    {
        value,
        setValue,
        height = 265,
        placeholder = "",
        className = "",
    }) => {

    // TODO: 8 rows; changing size to default, when textarea is clear
    const initialHeight = height - 10;
    const [currentHeight, setCurrentHeight] = useState<number>(initialHeight);

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentHeight(event.target ? event.target.scrollHeight : initialHeight);
        setValue(event.target.value);
    }

    return (
        <Scrollbars
            className={"CustomTextArea-scrollbar " + className}
            style={{
                height: height,
                margin: 0,
                padding: 15,
            }}
        >
          <textarea
              className="CustomTextArea"
              style={{height: currentHeight}}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
          />
        </Scrollbars>
    );
};

export default CustomTextArea;
