import React from "react";
import './css/Form.css'

function Form () {
    
    return (
        <form name="contact" method="POST" action="https://formspree.io/f/maykypyz">
        <h2></h2>
        <fieldset>

            <div className="inputBox">
                <input type="text" name="name" id="name" placeholder="." required />
                <label htmlFor="name">Name</label>
            </div>

            <div className="inputBox">
                <input type="email" name="email" id="email" placeholder="." required />
                <label htmlFor="email">Email</label>
            </div>

            <div className="inputBox">
                <textarea type="text" name="message" id="message" placeholder="." required></textarea>
                <label htmlFor="name">Message</label>
            </div>

            <button id="submitButton" type="submit"> Submit </button>
        </fieldset>
    </form>
    )
}

export default Form;