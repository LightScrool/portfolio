import React, {FC} from 'react';
import "../../styles/Footer/Footer.scss";
import Container from "../Container";
import ContactButton from "../ContactButton";
import Media from "../Media";
import {useTranslation} from "react-i18next";
import {PHONE_NUMBER} from "../../data";

const Footer: FC = () => {
    const {t} = useTranslation();

    return (
        <footer className="Footer">
            <Container>
                <div className="Footer-grid">
                    <div className="Footer-grid__item">
                        <ContactButton/>
                    </div>
                    <div className="Footer-grid__item">
                        <Media/>
                    </div>
                    <div className="Footer-grid__item">
                        <div className="Footer__text">{t('footer.name')}</div>
                        <a className="Footer__phone" href={`tel:${PHONE_NUMBER.href}`}>{PHONE_NUMBER.pretty}</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;