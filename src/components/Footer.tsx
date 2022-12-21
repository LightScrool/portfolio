import React, {FC} from 'react';
import "../styles/Footer/Footer.scss";
import Container from "./Container";
import ContactButton from "./ContactButton";
import Media from "./Media";
import {useTranslation} from "react-i18next";

const Footer: FC = () => {
    const {t} = useTranslation();

    return (
        <footer className="Footer">
            <div className="Footer__background">
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
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;