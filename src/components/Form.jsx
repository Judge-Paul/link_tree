import React from "react"

export default function Form() {
    return (
        <div className="contact-form">
            <div className="form--name">
                <input type="text" id="first_name" placeholder="First Name"/>
                <input type="text" id="last_name" placeholder="Last Name"/>
            </div>
            <div className="form--email">
                <input type="email" id="email" placeholder="Email" />
            </div>
            <div className="form--message">
                <textarea id="message" cols="30" rows="10" placeholder="Message..." />
            </div>
            <button id="btn_submit">Submit</button>
        </div>
    )
}