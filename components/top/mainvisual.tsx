import Logo from '../framework/logo'
import Navi from '../framework/nav'
import ReactDOM from "react-dom";
import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";


export default function Component() {
  const [iniframe, setiframe] = useState("");

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setiframe('https://uemu-engineer.com/three_var3');
    }, 6700)
    return() => {
      clearTimeout(timeoutId);      
    }
  }, [])

  if(iniframe != '') {
    ReactDOM.render(
      <React.StrictMode>
        <iframe loading="lazy" src={iniframe} />
      </React.StrictMode>,
      document.getElementById("mainbisual")
    );
  }

  return (
    <section id="p-mainvisual" data-set-color="dark">
      <Logo home></Logo>
      <Navi home></Navi>
      <figure id="mainbisual" className="p-mainvisual__iframe"></figure>
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