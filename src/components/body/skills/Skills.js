import React from 'react'
import { SkillsData } from '../../common/data/skills'
import Separator from '../../common/separator/Separator'
import SkillCard from './skillcard';
import "./skills.css"

function Skills() {
    const data = SkillsData;
    return (
        <div className="skills"> 
            <Separator />
            <label className="section-title">Skills</label>
            <div className="skills-container">
                {data.map((item) => {
                    return(
                        <div className="skills-section">
                            <label className="skills-section-title">{item.type}</label>
                            <div className="skills-list">
                                {item.list.map((skill)=>{
                                    return <SkillCard skill={skill} />
                                    
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
