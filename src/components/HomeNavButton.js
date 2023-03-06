import React from "react";
import './css/HomeNavButton.css';
import arrow from './images/arrow.png';
import { useNavigate, useLocation } from "react-router-dom";
import { MainRefContext } from "../App";
import { DirectionContext } from "../App";

function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}

function HomeNavButton(props) {

    const mainRef = React.useContext(MainRefContext);
    const directionContext = React.useContext(DirectionContext)

    const navigate = useNavigate();
    const location = useLocation();

    let direction;

    switch (props.position) {
        case "left":
            direction = "right";
            break;
        case "right":
            direction = "left";
            break;
        case "top":
            direction = "bottom";
            break;
        case "bottom":
            direction = "top";
            break;
        default:
            direction = "top";
            break;
    }

    async function goToPage() {
        if (location.pathname !== props.destination) {
            mainRef.current.classList.remove("come-from-right", "come-from-left", "come-from-top", "come-from-bottom")
            directionContext.setDirection(props.position)
            mainRef.current.classList.add(`go-${direction}`)
            await wait(280);
            navigate(props.destination);
            mainRef.current.classList.add(`come-from-${direction}`)
        }
    }

    return (
        <div className={`home-nav-button ${props.position}`}>
            <h3>{props.text}</h3>
            <img onClick={goToPage} src={arrow} alt="" />
        </div>
    )
}

export default HomeNavButton;