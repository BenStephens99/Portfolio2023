import React from "react";
import { MainRefContext } from "../App";
import HomeNavButton from "./HomeNavButton";
import './css/Blog.css'
import BlogPost from "./BlogPost";
import './css/weeklycss.css';

function Blog() {
    const mainRef = React.useContext(MainRefContext);

    //<BlogPost heading="Reactive Form Propmt Text" text="More Text" date="14/03/23" />

    return (
        <main ref={mainRef} className="blog come-from-left">
            <HomeNavButton position="right" destination="/" text="Home" />
            <h2>Weekly CSS Tricks</h2>
            <div className="blog-posts">
                <BlogPost
                    week="1"
                    heading="Gradual Underline on Hover"
                    text="Hover over the text below to see the effect."
                    date="01/03/23" 
                    demo={<h2 className="underline-on-hover">Hover over Me</h2>}
                    css="BenStephens99/7aad512b1c7c328aa5b6cbbdf7f946a2"
                    html="BenStephens99/be0cfabfef46fd50bdaf6239fa622d98"
                    />
            
            
                    


            </div>
        </main>
    )
}

export default Blog;