import React, {CSSProperties, FC, useMemo, useRef, useState} from 'react';
import "../../styles/Popup/ContactForm.scss";
import {useTranslation} from "react-i18next";
import emailJS from "emailjs-com";
import ResponseHandler from "../ResponseHandler";
import Loader from "../Loader";
import CustomTextArea from "../CustomTextArea";
import useLoading from "../../hooks/useLoading";

const ContactForm: FC = () => {
    const {t} = useTranslation();

    const [name, setName] = useState<string>("");
    const [contact, setContact] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const form = useRef<HTMLFormElement>(null);

    const [sendMessage, isLoading, successResult, errorResult] = useLoading(async () => {
        if (!form.current) return;

        setName("");
        setContact("");
        setMessage("");

        return emailJS.sendForm(
            "service_4kogcbn",
            "template_jkfg53r",
            form.current,
            "16FU0KEkZHu91z_nC"
        )
    }, 2500);

    // Form should be always mounted, because if it doesn't popup will be changing its size
    const formVisibilityStyles = useMemo<CSSProperties>(() => {
        if (isLoading || successResult !== null || errorResult !== null) {
            return {opacity: 0, visibility: "hidden"};
        }
        return {opacity: 1, visibility: "visible"};
    }, [isLoading, successResult, errorResult])

    return (
        <>
            <Loader
                active={isLoading}
                className="ContactForm__handler"
            />
            <ResponseHandler
                text={t("contactForm.success")}
                active={successResult !== null}
                className="ContactForm__handler"
            />
            <ResponseHandler
                text={t("contactForm.error")}
                active={errorResult !== null}
                className="ContactForm__handler"
                error={true}
            />
            <form
                className="ContactForm"
                style={formVisibilityStyles}
                ref={form}
            >
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
                <CustomTextArea
                    name="message"
                    className="ContactForm__textarea"
                    value={message}
                    setValue={setMessage}
                    placeholder={t("contactForm.message")}
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
        </>
    );
};

export default ContactForm;