/**
 * component
 */
import Logo from '../logo'
import Navi from '../nav'
import React from "react";

// SSRあるとwindowが使えない等あるため
import dynamic from 'next/dynamic';
import { Link, animateScroll as scroll } from "react-scroll";

/**
 * export
 */
class ThreeComp extends React.Component {
  render() {
    return (
      <section id="p-mainvisual" data-set-color="dark">
        <Logo></Logo>
        <Navi home></Navi>
        <figure className="p-mainvisual__iframe">
          <iframe src="https://uemu-engineer.com/three.html" />
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
}

if (process.browser) {
  const MainTarget =  document.querySelector('.p-mainvisual__iframe');
  window.onload = () => {
    MainTarget.classList.add('is_display');
  }
}

export default ThreeComp;