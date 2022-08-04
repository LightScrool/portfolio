import React, {FC} from 'react';
import "../../styles/Skills/SkillsItem.scss";
import {useTranslation} from "react-i18next";
import SkillSvg from "../../assests/SkillSvg";
import {TSkill} from "../../types";

interface SkillsItemProps {
    skill: TSkill
}

const SkillsItem: FC<SkillsItemProps> = ({skill}) => {
    const {t} = useTranslation();

    return (
        <div className="SkillsItem">
            <SkillSvg  className="SkillsItem__icon" Id={skill}/>
            <h2 className="SkillsItem__title">{t(`skills.${skill}.title`)}</h2>
            <div className="SkillsItem__text">{t(`skills.${skill}.text`)}</div>
        </div>
    );
};

export default SkillsItem;