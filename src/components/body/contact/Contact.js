import React from 'react'
import Separator from '../../common/separator/Separator'
import SocialContact from '../../common/social-contact/SocialContact'
import "./contact.css"

function Contact() {
    return (
        <div className="contact"> 
            <Separator />
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Get in Touch .^*)</p>
                    <SocialContact />
                </div>
                
            </div>
        </div>
    )
}

export default Contact
