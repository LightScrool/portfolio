import React, {FC, useRef} from 'react';
import "../../styles/Popup/Popup.scss";
import {Transition} from "react-transition-group";
import {TIMING} from "../../styles/variables";
import MySvg from "../../assests/MySvg";
import {TMySvgId} from "../../types";
import useTypedSelector from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {TPopupReducerActionType} from "../../types/popup";
import ContactForm from "./ContactForm";

const Popup: FC = () => {

    const active = useTypedSelector(state => state.popup.active);

    const dispatch = useDispatch();
    const closePopup = () => dispatch({type: TPopupReducerActionType.SET_ACTIVE, payload: false});
    const stopPropagation = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => event.stopPropagation();

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
                    className={`Popup ${state}`}
                    ref={nodeRef}
                    onClick={closePopup}
                >
                    <div
                        className="Popup__body"
                        onClick={stopPropagation}
                    >
                        <a className="Popup__close-button" onClick={closePopup}>
                            <MySvg Id={TMySvgId.cross} fill={{color: "#000", opacity: 1}}/>
                        </a>
                        <ContactForm/>
                    </div>
                </div>
            )}
        </Transition>
    );
};

export default Popup;