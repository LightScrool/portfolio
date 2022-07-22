import React, {FC} from 'react';
import "../../styles/Site/Site.scss";
import Container from "../Container";
import SectionTitle from "../SectionTitle";
import {useTranslation} from "react-i18next";
import MySvg from "../../assests/MySvg";
import {TMySvgId} from "../../types";

const Site: FC = () => {
    const {t} = useTranslation();

    return (
        <section className="Site">
            <Container>
                <SectionTitle
                    className="Site__title"
                    text={t("site.title")}
                    dark={true}
                />
                <div className="Site__sticky">
                    <MySvg
                        className="Site__picture"
                        Id={TMySvgId.react}
                        fill={{color: "#4AD8F8", opacity: 1}}
                    />
                </div>
            </Container>
        </section>
    );
};

export default Site;