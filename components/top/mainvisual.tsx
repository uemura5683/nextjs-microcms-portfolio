import Logo from '../framework/logo'
import Navi from '../framework/nav'
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Component() {
  return (
    <section id="p-mainvisual" data-set-color="dark">
      <Logo home></Logo>
      <Navi home></Navi>
      <figure className="p-mainvisual__iframe">
        <iframe loading="lazy" src="/three_var4" />
      </figure>
      <div className="p-mainvisual__click">
        <Link
          activeClass="active"
          to="p-about"
          spy={true}
          smooth={true}
          offset={0}
          duration= {500}
        > 
        <span></span>
        click here
      </Link> 
      </div>
    </section>
  )
}