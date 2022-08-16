import React, {FC} from 'react';
import "../styles/ContactButton.scss";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {TPopupReducerActionType} from "../types/popup";
import {combineClassNames} from "../utils";

interface ContactButtonProps {
    className?: string
}

const ContactButton: FC<ContactButtonProps> = ({className}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const openPopup = () => dispatch({type: TPopupReducerActionType.SET_ACTIVE, payload: true});

    return (
        <button className={combineClassNames("ContactButton", className)} onClick={openPopup}>
            {t('contactButton')}
        </button>
    );
};

export default ContactButton;