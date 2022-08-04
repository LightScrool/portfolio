import React, {FC, useRef} from 'react';
import "../styles/ResponseHandler.scss";
import MySvg from "../assests/MySvg";
import {TMySvgId} from "../types";
import {Transition} from "react-transition-group";
import {TIMING} from "../styles/variables";

interface ResponseHandlerProps {
    text: string,
    active: boolean,
    error?: boolean,
    className?: string
}

const ResponseHandler: FC<ResponseHandlerProps> = (
    {
        text,
        active,
        error = false,
        className
    }) => {

    const nodeRef = useRef<HTMLDivElement>(null);

    return (
        <Transition
            in={active}
            timeout={{
                enter: 20,// Too small value is cause bug, when item appears instantly
                exit: TIMING.standard,
            }}
            unmountOnExit={true}
            nodeRef={nodeRef}
        >
            {state => (
                <div
                    className={`ResponseHandler ${state}${className ? " " + className : ""}`}
                    ref={nodeRef}
                >
                    <MySvg
                        className={`ResponseHandler__icon${error ? " _error" : ""}`}
                        Id={error ? TMySvgId.errorCross : TMySvgId.checkMark}
                    />
                    <div className="ResponseHandler__text">
                        {text}
                    </div>
                </div>
            )}
        </Transition>
    );
};

export default ResponseHandler;