import React from "react";
import './css/BlogPost.css'
import { useState } from "react";
import ReactEmbedGist from "react-embed-gist";

function BlogPost(props) {

    const [open, setOpen] = useState('closed');

    function toggleOpen() {
        if (open === "open") {
            setOpen("closed");
        } else {
            setOpen("open")
        }
    }

    return (
        <div className={`blog-post box ${open}`}>
            <div onClick={toggleOpen} className="blog-post-header">
                <div>
                    <h3>Week {props.week}</h3>
                    <p>{props.heading}</p>
                </div>
                <p className="accent">{props.date}</p>
            </div>
            <div className="blog-post-body">
                <p>{props.text}</p>
                <div className="demo">{props.demo}</div>
                <div className="blog-code">
                    <div className="html-code">
                        <p className="code-type">HTML</p>
                        <ReactEmbedGist
                            gist={props.html}/>
                    </div>
                    <div className="css-code">
                        <p className="code-type" >CSS</p>
                        <ReactEmbedGist
                            gist={props.css} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPost;