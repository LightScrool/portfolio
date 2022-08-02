import React, {FC, useRef, useState} from 'react';
import "../../styles/Popup/ContactForm.scss";
import {useDispatch} from "react-redux";
import {TPopupReducerActionType} from "../../types/popup";
import {useTranslation} from "react-i18next";
import useCustomScrollbar from "../../hooks/useCustomScrollbar";

const ContactForm: FC = () => {
    const {t} = useTranslation();

    const customScrollElement = useRef(null);
    useCustomScrollbar(customScrollElement);

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const dispatch = useDispatch();
    function send() {
        // TODO: send data on api
        dispatch({type: TPopupReducerActionType.SET_ACTIVE, payload: false})
    }

    return (
        <div className="ContactForm">
            <input
                className="ContactForm__input"
                type="text"
                placeholder={t("contactForm.name")}
                value={name}
                onChange={event => setName(event.target.value)}
            />
            <input
                className="ContactForm__input"
                type="text"
                placeholder={t("contactForm.email")}
                value={email}
                onChange={event => setEmail(event.target.value)}
            />
            <textarea
                className="ContactForm__textarea"
                ref={customScrollElement}
                rows={8}
                placeholder={t("contactForm.message")}
                value={message}
                onChange={event => setMessage(event.target.value)}
            />
            <button
                className="ContactForm__button"
                onClick={send}
            >
                {t("contactForm.button")}
            </button>
        </div>
    );
};

export default ContactForm;