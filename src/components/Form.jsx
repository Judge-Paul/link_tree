import React from "react"

export default function Form() {
    return (
        <div className="contact-form">
                <h3>Contact Me</h3>
                <h4>Hi there, contact me to ask me about anything you have in mind.</h4>
                <div className="form--name">
                    <div className="first_name">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" id="first_name" placeholder="Enter your first name" />
                    </div>
                    <div className="last_name">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" id="last_name" placeholder="Enter your last name" />
                    </div>
                </div>
                <div className="form--email">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="yourname@email.com" />
                </div>
                <div className="form--message">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..." />
                </div>
                <div className="form--btn">
                    <button id="btn__submit">Send message</button>
                </div>
        </div>
    )
}