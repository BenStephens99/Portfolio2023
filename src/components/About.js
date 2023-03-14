import React from "react";
import './css/About.css'
import HomeNavButton from "./HomeNavButton";
import { MainRefContext } from "../App";
import me from './images/me.webp'
import HackerEffect from "./HackerEffect";
function About() {

    const mainRef = React.useContext(MainRefContext);

    return (
        <main ref={mainRef} className="about come-from-top">
            <HomeNavButton text="Home" position="bottom" destination="/" />
            <div className="boxes">
                <div className="picture box">
                    <h2><HackerEffect text="Ben Stephens" /></h2>
                    <img src={me} alt="Ben Stephens" />
                </div>

                <div className="bio box">
                    <h1><HackerEffect text="About me"/></h1>
                    <p>My name is Ben and I am a recent graduate from the University of Brighton.
                        I am excited to begin my journey as a developer and am eager to apply my
                        skills and knowledge to create engaging and user-friendly websites and
                        applications.</p>
                    <p>On my portfolio website, you will find a selection of my most recent projects,
                        along with detailed explanations of the technologies and techniques I used to create them.
                    </p>
                </div>

                <div className="qualifications box">
                    <h3><HackerEffect text="Qualifications"/></h3>
                    <div className="qual">
                        <p className="accent"> Computer Science for Games BSc Hons</p>
                        <p >First Class Honours</p>
                        <p>2022</p>
                    </div>
                    <div className="qual">
                        <p className="accent">Meta Front-End Developer Professional Certificate</p>
                        <p>2023</p>
                    </div>
                    <div className="qual">
                    </div>
                </div>

                <div className="map box">
                <iframe title="map" width="100%" height="100%" src="https://www.openstreetmap.org/export/embed.html?bbox=-4.510024484023259%2C48.95858066440977%2C4.251572195664242%2C52.63973017532399&amp;layer=mapnik&amp;marker=50.835432306955276%2C-0.12922614417948353"></iframe>
                </div>

            </div>

        </main>
    )
}

export default About;