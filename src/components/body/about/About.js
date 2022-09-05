import React from 'react'
import SocialContact from '../../common/social-contact/SocialContact'
import "./about.css"

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    <span id="Hello">Hello There !</span> I'm Dinesh N,<br/>
                    I've experience with computer science for over 3 years,
                    I find myself ambitious when it comes to BlockChain. It is a vast and constantly
                    improving field, hence I find it very amusing. <br />
                    Thankx for your visit  :)
                </div>
                
                <div className="about-photo">
                    <img src={require("../../../asserts/images/coding.png").default}
                    className="picture"
                    /> 
                </div>                 
            </div>
            <div className="download">
                    <a download href={require("../../../asserts/Resume.pdf").default}>
                        <i class="fi-rr-cloud-download download-icon" />
                        Download Resume
                    </a>
            </div>

        </div>
    )
}

export default About
