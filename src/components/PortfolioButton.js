import React from "react";

function PortfolioButton (props) {


    return (
        <a href={props.link} target="_blank" rel="noreferrer"><button>{props.text}</button></a>
    )
}

export default PortfolioButton;