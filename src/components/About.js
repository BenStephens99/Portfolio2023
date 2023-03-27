import React from "react";
import './css/About.css'
import HomeNavButton from "./HomeNavButton";
import { MainRefContext } from "../App";
import me from './images/me.webp'
import HackerEffect from "./HackerEffect";
import HoverLetters from "./HoverLetters";

function About() {

    const mainRef = React.useContext(MainRefContext);

    return (
        <main ref={mainRef} className="about come-from-top">
            <HomeNavButton text="Home" position="bottom" destination="/" />
            <div className="boxes">
                <div className="picture box">
                    <h2><HoverLetters text="Ben Stephens" /></h2>
                    <img src={me} alt="Ben Stephens" />
                </div>

                <div className="bio box">
                    <h1><HackerEffect text="About me" /></h1>
                   
                    <p>Hello and welcome to my website! I am a computer science graduate and 
                        passionate about front-end development. I have always been fascinated
                         by the way websites and applications are built and designed, and I am excited 
                         to turn that passion into a career. </p>

                    <p> Throughout my studies, I gained extensive experience in programming languages such 
                        as HTML, CSS, JavaScript, and React. I am skilled in creating responsive and user-friendly 
                        websites that provide an engaging experience for users. </p>

                     <p>   
                        My experience also includes working on several projects, both independently 
                        and collaboratively, which has allowed me to develop strong problem-solving skills 
                        and an eye for detail. I am always eager to learn and keep up-to-date with the latest 
                        trends and technologies in front-end development.
                    </p>
                </div>

                <div className="qualifications box">
                    <h3><HoverLetters text="Qualifications" /></h3>
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