import React from 'react'
import './about.css'
import Code from '../../../assets/code.svg'
import SocialContact from '../../common/social-contact/social'
function About() {
    return (
        <div className="about">
            <div className="about-top">
            <div className="about-info">
                <h1>Hi i am Naveen i am a <br/>
                <span className="info-name">FullStack Web Developer</span></h1>
            </div>
            <div className="about-photo">
            <img src={Code} className="img-fluid"/>
            </div>
            </div>
           <SocialContact/>
        </div>
    )
}

export default About
