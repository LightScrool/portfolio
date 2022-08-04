import React, {FC, useRef, useState} from 'react';
import "../../styles/Popup/ContactForm.scss";
import {useTranslation} from "react-i18next";
import useCustomScrollbar from "../../hooks/useCustomScrollbar";
import emailJS from "emailjs-com";

const ContactForm: FC = () => {
    const {t} = useTranslation();

    const customScrollElement = useRef<HTMLTextAreaElement>(null);
    useCustomScrollbar(customScrollElement);

    const [name, setName] = useState<string>("");
    const [contact, setContact] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const form = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function sendMessage() {
        if (!form.current) return;

        setIsLoading(true);

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

            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        isLoading
        ?
        <label className="ContactForm__loader"/>
        :
        <form className="ContactForm" ref={form}>
            <input
                name="name"
                className="ContactForm__input"
                type="text"
                placeholder={t("contactForm.name")}
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <input
                name="contact"
                className="ContactForm__input"
                type="text"
                placeholder={t("contactForm.email")}
                value={contact}
                onChange={(event) => setContact(event.target.value)}
            />
            <textarea
                name="message"
                className="ContactForm__textarea"
                ref={customScrollElement}
                rows={8}
                placeholder={t("contactForm.message")}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            />
            <button
                className="ContactForm__button"
                onClick={sendMessage}
                disabled={!name
                    || !contact
                    || !message}
            >
                {t("contactForm.button")}
            </button>
        </form>
    );
};

export default ContactForm;