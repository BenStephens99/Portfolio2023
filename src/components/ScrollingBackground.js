import React from "react";
import './css/ScrollingBackground.css'
import Marquee from "react-fast-marquee";

let skills = ["Unity", "Web Developement", "C++",
"JavaScript", "C#", "ReactJS", "HTML5", "CSS3", "NodeJS","ElectronJS" , 
"Unreal", "Game Developement","Figma"]

function Items() {
    let itemsToReturn = [];
  
    let yValue = 0;
    let valueY;
    let valueX;

    for (let i = 0; i < skills.length; i++) {
        if (yValue >= 90) {
            yValue = 0;
        } else {
            yValue += 100/skills.length;
        }
        valueY = yValue + "%";

        valueX = Math.floor(Math.random() * 90) + 1 + "%";
        itemsToReturn.push(<li key={skills[i]} style={{top: valueY, left: valueX}}>{skills[i]}</li>)
    }

    return itemsToReturn;
}

function ScrollingBackground() {
    return (
        <div className="scrolling-background">
            <Marquee 
            gradient={false}
            className="marquee">
                <ul>
                    <Items />
                </ul>
            </Marquee>
        </div>
    )
}

export default ScrollingBackground;