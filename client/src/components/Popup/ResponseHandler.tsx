import React, {FC, useRef} from 'react';
import "../../styles/Popup/ResponseHandler.scss";
import MySvg from "../../assests/MySvg";
import {TMySvgId} from "../../types";
import {Transition} from "react-transition-group";

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
            timeout={20/* Too small value is cause bug, when item appears instantly */}
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