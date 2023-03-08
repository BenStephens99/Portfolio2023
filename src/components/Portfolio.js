import React, { useEffect } from "react";
import { MainRefContext } from "../App";
import HomeNavButton from "./HomeNavButton";
import { useState } from "react";
import PortfolioButton from "./PortfolioButton";
import energyThumb from './images/energyThumb.png'
import jtreatThumb from './images/jtreatThumb.png'
import PortfolioThumbnail from "./PorfolioThumbnail";
import agentEscapeThumb from './images/agentEscape.jpg';
import npcSystemThumb from './images/NPCSystem.png';
import houseEscapeThumb from './images/houseEscape.jpg';
import pongThumb from './images/pong.jpg';
import piAppThumb from './images/piapp.png';
import website2022Thumb from './images/2022Website.png'
import cyberThumb from './images/cyberThumb.png'
import './css/Portfolio.css';

const starterThumb = {
    title: "Portfolio Section",
    description: <>
        <p>Click on a thumbnail to learn more about the project.</p>
    </>
}


const energyApp = {
    title: "Energy App",
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
    title: "JTreat",
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
    title: "Home Device Controller",
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
    title: "Cyber-Assure",
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
    title: "Agent Escape",
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
    title: "House Escape",
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
    title: "NPC System",
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
    title: "2022 Personal Site",
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
    title: "Pong",
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

function Portfolio() {
    const mainRef = React.useContext(MainRefContext);

    const [currentWork, setCurrentWork] = useState(starterThumb)


    return (
        <main ref={mainRef} className="portfolio come-from-bottom">
            <HomeNavButton position="top" destination="/" text="Home" />
            <div className="portfolio-showcase">
                <h2 className="portfolio-title">{currentWork.title}</h2>


                <div className="portfolio-thumbs-container">
                    <div className="portfolio-thumbs">
                        <PortfolioThumbnail
                            setPortfolio={setCurrentWork}
                            work={energyApp}
                        />

                        <PortfolioThumbnail
                            setPortfolio={setCurrentWork}
                            work={jtreat}
                        />

                        <PortfolioThumbnail
                            setPortfolio={setCurrentWork}
                            work={npcSystem}
                        />

                        <PortfolioThumbnail
                            setPortfolio={setCurrentWork}
                            work={website2022}
                        />

                        <PortfolioThumbnail
                            setPortfolio={setCurrentWork}
                            work={cyberAssure}
                        />


                        <PortfolioThumbnail
                            setPortfolio={setCurrentWork}
                            work={piApp}
                        />

                        <PortfolioThumbnail
                            setPortfolio={setCurrentWork}
                            work={pong}
                        />

                        <PortfolioThumbnail
                            setPortfolio={setCurrentWork}
                            work={agentEscape}
                        />

                        <PortfolioThumbnail
                            setPortfolio={setCurrentWork}
                            work={houseEscape}
                        />

                    </div>
                </div>


                <div className="portfolio-description">
                    <ul>
                        {currentWork.technologies}
                    </ul>
                    <div>
                        {currentWork.description}
                    </div>
                    <div className="portfolio-buttons">
                        {currentWork.buttons}
                    </div>
                </div>


            </div>
        </main>
    )
}

export default Portfolio;