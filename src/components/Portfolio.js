import React, { useEffect } from "react";
import { MainRefContext } from "../App";
import HomeNavButton from "./HomeNavButton";
import { useState } from "react";
import PortfolioButton from "./PortfolioButton";
import energyThumb from './images/energyThumb.webp'
import jtreatThumb from './images/jtreatThumb.webp'
import PortfolioThumbnail from "./PorfolioThumbnail";
import agentEscapeThumb from './images/agentEscape.webp';
import npcSystemThumb from './images/NPCSystem.webp';
import houseEscapeThumb from './images/houseEscape.webp';
import pongThumb from './images/pong.webp';
import piAppThumb from './images/piapp.webp';
import website2022Thumb from './images/2022Website.webp'
import cyberThumb from './images/cyberThumb.webp'
import arrow from './images/arrow.webp'
import './css/Portfolio.css';
import HackerEffect from "./HackerEffect";
import NavIcon from "./NavIcon";
import homeSvg from './images/home.svg'
import phoneSVG from './images/phone.svg'
import NavIconExternal from "./NavIconExternal";
import gitSVG from './images/github.svg'
import cvSVG from './images/cv.svg'

const energyApp = {
    title:
        <>
            <HackerEffect text="Energy" />
            <HackerEffect text="Consumption" />
            <HackerEffect text="Monitor" />
        </>,
    type: "Desktop Application",
    technologies:
        <>
            <li>ElectronJS</li>
            <li>JavaScript</li>
        </>,
    description:
        <>
            <p>
                Cross-platform desktop application for
                monitoring and displaying real time
                energy consumption data from an energy
                providers REST API.
            </p>
            <p>
                Data gathered from the API is displayed
                in user friendly graphs, making use of the chart.js libary,
                and tables to compare usage across multiple properties.
            </p>
            <p>
                API calls are made with asyncronous Ajax requests
                to ensure the application remains performant while
                waiting for data.
            </p>
        </>,
    buttons:
        <>
            <PortfolioButton text="View Github" link="https://github.com/BenStephens99/OctopusAppV2" />
        </>,
    image: energyThumb
}

const jtreat = {
    title: <>
        <HackerEffect text="jtreat" />
        <HackerEffect text="Performance and Recovery" />
        <HackerEffect text="Wesbsite" />
    </>,
    type: "Website",
    technologies:
        <>
            <li>ReactJS</li>
        </>,
    description:
        <>
            <p>A modern and responsive website with an integrated booking system, contact form
                and maps integration for a physiotherapy business.</p>
        </>,
    buttons:
        <PortfolioButton text="Visit Website" link="https://www.jtreat.co.uk/" />
    ,
    image: jtreatThumb
}

const piApp = {
    title: <>
        <HackerEffect text="home" />
        <HackerEffect text="device" />
        <HackerEffect text="controller" />
    </>,
    type: "Personal Project",
    technologies:
        <>
            <li>NodeJS</li>
            <li>JavaScript</li>
        </>,
    description:
        <>
            <p>Node.js Application to control home devices with asyncronous
                JavaScript fetch requests to smart plugs and speakers deployed on a raspberry pi.</p>
        </>,
    buttons:
        <PortfolioButton text="View on Github" link="https://github.com/BenStephens99/pi-app-v2/blob/main/front/renderer.js" />
    ,
    image: piAppThumb
}

const cyberAssure = {
    title: <>
        <HackerEffect text="Cyber-Assure Technology" />
        <HackerEffect text="Wesbsite" />
    </>,
    type: "Website",
    technologies:
        <>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
        </>,
    description:
        <>
            <p>A simple but clear, and responsive site for a cyber security company.</p>
        </>,
    buttons:
        <PortfolioButton text="Visit Website" link="https://cyber-assure.co.uk/" />
    ,
    image: cyberThumb
}

const agentEscape = {
    title: <>
        <HackerEffect text="Agent Escape" />
        <HackerEffect text="2D Unity Engine Game" />
    </>,
    type: "Game",
    technologies:
        <>
            <li>C#</li>
            <li>Unity</li>
        </>,
    description:
        <>
            <p>Top down 2D game. With enemy AI, a fun combat system, unique art style and multiple levels with increasing difficulty.</p>
        </>,
    buttons:
        <PortfolioButton text="Watch Demo Video" link="https://youtu.be/Scqq1rdLMAE" />
    ,
    image: agentEscapeThumb
}

const houseEscape = {
    title: <>
        <HackerEffect text="House Escape" />
        <HackerEffect text="3D Unreal Engine Game" />
    </>,
    type: "Game",
    technologies:
        <>
            <li>Unreal</li>
        </>,
    description:
        <>
            <p>Escape room style game made with the Unreal Engine and blueprints visual programming.</p>
        </>,
    buttons:
        <PortfolioButton text="Watch Demo Video" link="https://youtu.be/po3CW4mqzdI" />
    ,
    image: houseEscapeThumb
}

const npcSystem = {
    title: <>
        <HackerEffect text="immersive NPCs" />
        <HackerEffect text="for games" />
    </>,
    type: "Games",
    technologies:
        <>
            <li>C++</li>
            <li>C#</li>
            <li>Unity</li>
        </>,
    description:
        <>
            <p>NPC spawner/controller/manager. Created to inject life into open world-games.
                Making use of performant algorithms to create non-playable characters and control their actions
                with dynamic real time decision making.</p>
        </>,
    buttons:
        <>
            <PortfolioButton text="Watch Demo Video" link="https://youtu.be/YgO0Hp3tTcU" />
            <PortfolioButton text="View Github" link="https://github.com/BenStephens99/RealisticGameAI" />
        </>

    ,
    image: npcSystemThumb
}

const website2022 = {
    title: <>
        <HackerEffect text="My Website" />
        <HackerEffect text="2022 edition" />
    </>,
    type: "Website",
    technologies:
        <>
            <li>ReactJS</li>
        </>,
    description:
        <>
            <p>2022 version of my personal website.</p>
        </>,
    buttons:
        <PortfolioButton text="Visit Website" link="https://benstephens99.github.io/" />
    ,
    image: website2022Thumb
}


const pong = {
    title: <>
        <HackerEffect text="Pong" />
        <HackerEffect text="2 player network game" />
    </>,
    type: "Multiplayer Game",
    technologies:
        <>
            <li>C++</li>
            <li>Java</li>
        </>,
    description:
        <>
            <p>A two player pong game using sockets with extensions to the Java FXGL engine to create and run the game
                on the server side and a C++ client to render and control the game for the players.</p>
        </>,
    buttons:
        <>
            <PortfolioButton text="Watch Demo Video" link="https://youtu.be/PHW4R1WP5VU" />
            <PortfolioButton text="View on Github" link="https://github.com/BenStephens99/PongMultiplayer/tree/main/CI628-%20Client/src" />
        </>
    ,
    image: pongThumb
}

function wait (time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });   
}

function Portfolio() {

    const works = [energyApp, jtreat, npcSystem, piApp, website2022, pong, cyberAssure, agentEscape, houseEscape]


    const mainRef = React.useContext(MainRefContext);

    const [workIndex, setWorkIndex] = useState(0)
    const [currentWork, setCurrentWork] = useState(works[workIndex])
    const [animationState, setAnimationState] = useState(null)

    let animationDuration = 250;

    async function nextWork() {
        setAnimationState("leave-screen-left")
        await wait (animationDuration)
        if (workIndex + 1 > works.length - 1) {
            setWorkIndex(0)
        } else {
            setWorkIndex(workIndex + 1)
        }
    }

    async function prevWork() {
        setAnimationState("leave-screen-right")
        await wait (animationDuration)
        if (workIndex - 1 < 0 ) {
            setWorkIndex(works.length - 1)
        } else {
            setWorkIndex(workIndex - 1)
        }
    }

    useEffect(() => {
        setCurrentWork(works[workIndex])
        async function startAnimation() {
            if(animationState != null) {
                setAnimationState( animationState === "leave-screen-left" ? "enter-screen-right" : "enter-screen-left")
            }
        }
        startAnimation();
    }, [workIndex]);


    return (
        <main ref={mainRef} className="portfolio come-from-bottom">
            <div className="portfolio-header">
                <NavIcon text="HOME" icon={homeSvg} position="top" destination="/"/>
                <NavIconExternal text="GITHUB" icon={gitSVG} url={"https://www.linkedin.com/in/stephens-ben/"}/>
                <NavIconExternal text="CV" icon={cvSVG} url={"/BenStephensCV.pdf"}/>
                <NavIcon text="CONTACT" icon={phoneSVG} position="top" destination="/contact" pad="pad"/>

                <HomeNavButton text="Home" position="top" destination="/" />
                <ul className="socials">
                    <li><a href="https://github.com/BenStephens99" target="_blank" rel="noreferrer">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/stephens-ben/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    <li><a href="/BenStephensCV.pdf" target="_blank" rel="noreferrer">CV</a></li>
                </ul>
                <div className="get-in-touch">
                    <HomeNavButton text="Get In Touch" position="top" destination="/contact" />
                </div>

            </div>
            <div className={`portfolio-body ${animationState}`}>
                <div className="portfolio-img">
                    <img alt="" src={currentWork.image} />
                </div>
                <div className="portfolio-description">
                    <div className="portfolio-technologies">
                        {currentWork.technologies}
                    </div>
                    <div className="portfolio-text">
                        {currentWork.description}
                    </div>
                    <div className="portfolio-buttons">
                        {currentWork.buttons}
                    </div>
                </div>
                <div className="portfolio-title">{currentWork.title}</div>
                <div className="portfolio-nav">
                    <span onClick={prevWork} className="prev-item"><img alt="back" src={arrow}/></span> 
                    <span onClick={nextWork} className="next-item"><img alt="next" src={arrow}/></span> 
                </div>
            </div>
            <div className="portfolio-nav-mobile">
                    <span onClick={prevWork} className="prev-item"><img alt="back" src={arrow}/><span>Previous</span></span> 
                    <span onClick={nextWork} className="next-item"><img alt="next" src={arrow}/><span>Next</span></span> 
                </div>

        </main>
    )
}

export default Portfolio;