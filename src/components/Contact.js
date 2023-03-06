import React from "react";
import Form from "./Form";
import './css/Contact.css'
import { MainRefContext } from "../App";
import HomeNavButton from "./HomeNavButton";

function Contact() {

    const mainRef = React.useContext(MainRefContext)

    return (
        <main ref={mainRef} className="contact come-from-right">
            <HomeNavButton text="Home" position="left" destination="/" />
      
            <div className="box">
                <div className="text-box">
                    <h1>Get in touch!</h1>
                    <p>If you would like to dicuss working together or you
                        have any questions don't hesitate to send me a message.
                    </p>
                    <p>Just use the form or find me on <a href="https://www.linkedin.com/in/stephens-ben/" target="_blank" rel="noreferrer">LinkedIn</a>.</p>
                </div>
                <Form />
            </div>

        </main>
    )
}

export default Contact;