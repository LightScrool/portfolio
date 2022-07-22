import React, { FC } from 'react';
import "../styles/ContactButton.scss";
import {useTranslation} from "react-i18next";

const ContactButton: FC = () => {
    const {t} = useTranslation();

    return (
        <button className="ContactButton">
            {t('contactButton')}
        </button>
    );
};

export default ContactButton;