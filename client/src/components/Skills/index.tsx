import React, {FC} from 'react';
import "../../styles/Skills/Skills.scss";
import Container from "../Container";
import {TSkill} from "../../types";
import SkillsItem from "./SkillsItem";
import SectionTitle from "../SectionTitle";
import {useTranslation} from "react-i18next";

const Skills: FC = () => {
    const {t} = useTranslation();

    const skillList: TSkill[] = [];
    for (const skill in TSkill) skillList.push(skill as TSkill);

    return (
        <section className="Skills">
            <Container>
                <SectionTitle text={t("skills.title")}/>
                <div className="Skills__inner">
                    {skillList.map(item => (
                        <SkillsItem key={item} skill={item}/>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Skills;