import React from "react";
import './css/PorfolioThumbnail.css'

function PortfolioThumbnail(props) {
    
    const info = {
        title: props.work.title,
        type: props.work.type,
        image: props.work.image,
        technologies: props.work.technologies,
        description: props.work.description,
        buttons: props.work.buttons
    }   

    function click() {
        props.setPortfolio(info)
    }
    
    return (
        <div onClick={click} className="portfolio-thumb">
            <img src={info.image} alt={info.title} />
            <div className="thumb-text">
                   <h1>{info.title}</h1>
                    <h2>{info.type}</h2>
            </div>
         
        </div>
    )
}

export default PortfolioThumbnail;