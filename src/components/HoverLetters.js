import React from "react";
import './css/HoverLetters.css'


function HoverLetters(props) {

    const text = props.text;
    let items = [];

    for(let i = 0; i < text.length; i++) {
        items.push(<span key={i}>{text[i]}</span>)
    }
    
    return (
        <div className="hover-letters">{items}</div>
    )
}

export default HoverLetters;