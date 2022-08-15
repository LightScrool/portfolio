import React, {FC, useEffect, useRef} from 'react';
import "../../styles/Popup/Popup.scss";
import {Transition} from "react-transition-group";
import {TIMING} from "../../styles/variables";
import MySvg from "../../assests/MySvg";
import {TMySvgId} from "../../types";
import useTypedSelector from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {TPopupReducerActionType} from "../../types/popup";
import ContactForm from "./ContactForm";
import {combineClassNames} from "../../utils";
import {Scrollbars} from "react-custom-scrollbars-2";
import CustomScrollbar from "../CustomScrollbar";

const Popup: FC = () => {

    const active = useTypedSelector(state => state.popup.active);

    const dispatch = useDispatch();
    const closePopup = (event: React.MouseEvent) => {
        event.preventDefault();
        dispatch({type: TPopupReducerActionType.SET_ACTIVE, payload: false});
    };
    const stopPropagation = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const nodeRef = useRef<HTMLDivElement>(null);

    const maxSize = "calc(100 * var(--vh, 1vh) - 9rem)";
    const scrollbar = useRef<Scrollbars>(null);
    useEffect(() => {
        // For some reason TypeScript doesn't see "view" field of Scrollbars
        // @ts-ignore
        if (scrollbar.current) scrollbar.current.view.style.maxHeight = maxSize;
    })

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
                    className={combineClassNames("Popup", state)}
                    ref={nodeRef}
                    onClick={closePopup}
                >
                    <div
                        className="Popup__body"
                        onClick={stopPropagation}
                    >
                        <a className="Popup__close-button" href="/#" onClick={closePopup}>
                            <MySvg Id={TMySvgId.cross} fill={{color: "#000", opacity: 1}}/>
                        </a>
                        <CustomScrollbar
                            autoHeight={true}
                            ref={scrollbar}
                            style={{maxHeight: maxSize}}
                        >
                            <div className="Popup__content">
                                <ContactForm/>
                            </div>
                        </CustomScrollbar>
                    </div>
                </div>
            )}
        </Transition>
    );
};

export default Popup;