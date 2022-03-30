import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Component() {
    return (
        <>
            <div id="scrolltop">
                <Link
                    activeClass="active"
                    to="wrapper"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}
                > 
                    scrolltop
                </Link> 
            </div>
        </>
    )
}