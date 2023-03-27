import React, { useState } from "react";
import { MainRefContext } from "../App";
import HomeNavButton from "./HomeNavButton";
import './css/Blog.css'
import BlogPost from "./BlogPost";
import './css/weeklycss.css';
import HackerEffect from "./HackerEffect";

function Blog() {
    const mainRef = React.useContext(MainRefContext);

    const [menuState, setMenuState] = useState("closed");

    function toggleMenu() {
        setMenuState(menuState === "open" ? "closed" : "open")
    }

    return (
        <main ref={mainRef} className="blog come-from-left">
            <HomeNavButton position="right" destination="/" text="Home" />
            <h2><HackerEffect text="Weekly CSS Tricks" /> </h2>
            <div className="blog-posts">



                <BlogPost
                    week="5"
                    heading="Animated hamburger menu"
                    text="Click on the icon below to see the effect."
                    date="29/03/23"
                    demo={

                        <div className={`week-5-nav-icon ${menuState}`} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    }
                    css="BenStephens99/1cbbea2443dff0b7327418abf57205f5"
                    html="BenStephens99/f87db7f03aaa650543e2deb52d3cf176"
                />

                <BlogPost
                    week="4"
                    heading="Scattered letters"
                    text="Hover over the text below to see the effect."
                    date="22/03/23"
                    demo={

                        <h2 className="scattered-letters">
                            <span>H</span>
                            <span>o</span>
                            <span>v</span>
                            <span>e</span>
                            <span>r</span>
                            <span> </span>
                            <span>M</span>
                            <span>e</span>
                        </h2>
                    }
                    css="BenStephens99/cd3ef80df161a869fb7221a5932a7b21"
                    html="BenStephens99/4751648bc59e6f0caa0c04c75911beae"
                />

                <BlogPost
                    week="3"
                    heading="Moving gradient text"
                    date="15/03/23"
                    demo={

                        <h3>
                            Check out this
                            <span className="moving-gradient-text"> moving gradient text </span>
                            effect.
                        </h3>
                    }
                    css="BenStephens99/269f71e97679333921daed24d91a4221"
                    html="BenStephens99/7160a4baf27b4a24eaf91a11ebbf716b"
                />

                <BlogPost
                    week="2"
                    heading="Animated form label"
                    text="Press on the input box below to see the animation."
                    date="08/03/23"
                    demo={

                        <div className="animated-form-label">
                            <input type="text" name="name" id="name" required />
                            <label>Name</label>
                        </div>
                    }
                    css="BenStephens99/6c3af459a8013840a89cf4af95e0c763"
                    html="BenStephens99/306cf47c8321042e41e1274ee6011321"
                />

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

