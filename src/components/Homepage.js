import React from "react";
import './css/Homepage.css'
import HomeNavButton from "./HomeNavButton";
import ScrollingBackground from "./ScrollingBackground";
import { MainRefContext } from "../App";
import { useEffect, useState } from "react";
import { DirectionContext } from "../App";


function Homepage() {

    const [divClass, setDivClass] = useState("")

    const mainRef = React.useContext(MainRefContext);
    const directionContext = React.useContext(DirectionContext)

    let dir = directionContext.direction
    useEffect(() => {
        setDivClass(`come-from-${dir}`)
      },[]); 
    

    return (
        
        <main ref={mainRef} className={`homepage ${divClass}`}>

            <ScrollingBackground />

            <div className="homepage-text">
                <h1>Ben Stephens</h1>
                <h2>Developer</h2>
            </div>

            <div className="home-navigation">
                <HomeNavButton text="About" position="top" destination="/about"/>
                <HomeNavButton text="Weekly CSS Tricks" position="left" destination="/blog"/>
                <HomeNavButton text="Contact" position="right" destination="/contact" />
                <HomeNavButton text="Projects" position="bottom" destination="/portfolio" />
            </div>

        </main>
    )
}

export default Homepage;