import React, {CSSProperties, FC, useMemo, useRef, useState} from 'react';
import "../../styles/Popup/ContactForm.scss";
import {useTranslation} from "react-i18next";
import emailJS from "emailjs-com";
import ResponseHandler from "../ResponseHandler";
import Loader from "../Loader";
import {useDispatch} from "react-redux";
import {TPopupReducerActionType} from "../../types/popup";
import CustomTextArea from "../CustomTextArea";

const ContactForm: FC = () => {
    const {t} = useTranslation();

    const [name, setName] = useState<string>("");
    const [contact, setContact] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const form = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showSuccessMsg, setShowSuccessMsg] = useState<boolean>(false);
    const [showErrorMsg, setShowErrorMsg] = useState<boolean>(false);

    const dispatch = useDispatch();
    const closePopup = () => {
        dispatch({type: TPopupReducerActionType.SET_ACTIVE, payload: false});
    };

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
                console.log(response);
                setShowSuccessMsg(true);
                setTimeout(() => {
                    setShowSuccessMsg(false);
                    closePopup();
                }, 2500)
            })

            .catch(error => {
                console.log(error);
                setShowErrorMsg(true);
                setTimeout(() => {
                    setShowErrorMsg(false);
                    closePopup();
                }, 2500)
            })

            .finally(() => {
                setIsLoading(false);
            })

        setName("");
        setContact("");
        setMessage("");
    }

    // Form should be always mounted, because if it doesn't popup will change its size
    // TODO: textarea bug
    const formVisibilityStyles = useMemo<CSSProperties>(() => {
        if (isLoading || showSuccessMsg || showErrorMsg) {
            return {opacity: 0, visibility: "hidden"};
        }
        return {opacity: 1, visibility: "visible"};
    }, [isLoading, showSuccessMsg, showErrorMsg])

    return (
        <>
            <Loader
                active={isLoading}
                className="ContactForm__handler"
            />
            <ResponseHandler
                text={t("contactForm.success")}
                active={showSuccessMsg}
                className="ContactForm__handler"
            />
            <ResponseHandler
                text={t("contactForm.error")}
                active={showErrorMsg}
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
                    value={message}
                    setValue={setMessage}
                    className="ContactForm__textarea"
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