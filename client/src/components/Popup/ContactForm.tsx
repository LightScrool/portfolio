import React, {FC, useRef} from 'react';
import "../../styles/Popup/ContactForm.scss";
import {useDispatch} from "react-redux";
import {TPopupReducerActionType} from "../../types/popup";
import {useTranslation} from "react-i18next";
import useCustomScrollbar from "../../hooks/useCustomScrollbar";
import emailJS from "emailjs-com";

const ContactForm: FC = () => {
    const {t} = useTranslation();

    const customScrollElement = useRef<HTMLTextAreaElement>(null);
    useCustomScrollbar(customScrollElement);

    const dispatch = useDispatch();
    const form = useRef<HTMLFormElement>(null);
    function sendMessage() {
        if (!form.current) return;

        console.log("submit");

        emailJS.sendForm(
            "service_4kogcbn",
            "template_jkfg53r",
            form.current,
            "16FU0KEkZHu91z_nC"
        )
            .then(response => {
                // TODO: notify user
                console.log(response);
            })
            .catch(error => {
                // TODO: notify user
                console.log(error);
            })

        dispatch({type: TPopupReducerActionType.SET_ACTIVE, payload: false})
    }

    return (
        <form className="ContactForm" ref={form}>
            <input
                name="name"
                className="ContactForm__input"
                type="text"
                placeholder={t("contactForm.name")}
            />
            <input
                name="contact"
                className="ContactForm__input"
                type="text"
                placeholder={t("contactForm.email")}
            />
            <textarea
                name="message"
                className="ContactForm__textarea"
                ref={customScrollElement}
                rows={8}
                placeholder={t("contactForm.message")}
            />
            <button
                type="submit"
                className="ContactForm__button"
                onClick={sendMessage}
            >
                {t("contactForm.button")}
            </button>
        </form>
    );
};

export default ContactForm;