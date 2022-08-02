import React, {FC, useState} from 'react';
import "../../styles/Popup/ContactForm.scss";
import {useDispatch} from "react-redux";
import {TPopupReducerActionType} from "../../types/popup";

const ContactForm: FC = () => {
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
                placeholder="Представьтесь, пожалуйста"
                value={name}
                onChange={event => setName(event.target.value)}
            />
            <input
                className="ContactForm__input"
                type="text"
                placeholder="Как с вами связаться?"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />
            <textarea
                className="ContactForm__textarea"
                rows={8}
                placeholder="Сообщение"
                value={message}
                onChange={event => setMessage(event.target.value)}
            />
            <button
                className="ContactForm__button"
                onClick={send}
            >
                Отправить
            </button>
        </div>
    );
};

export default ContactForm;