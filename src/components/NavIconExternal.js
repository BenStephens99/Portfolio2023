import React from "react";
import './css/navIcon.css'

function NavIconExternal (props) {
    return (
        <a className="nav-icon" href={props.url} target="_blank">
        <img src={props.icon} alt="" />
        <p>{props.text}</p>
    </a>
    )
}

export default NavIconExternal;