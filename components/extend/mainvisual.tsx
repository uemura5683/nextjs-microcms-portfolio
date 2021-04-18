/**
 * component
 */
import Logo from '../logo'
import Navi from '../nav'

// SSRあるとwindowが使えない等あるため
import dynamic from 'next/dynamic';
import { Link, animateScroll as scroll } from "react-scroll";

/**
 * export
 */
export default function Threejs() {
  return (
    <section id="p-mainvisual" data-set-color="dark">
      <Logo></Logo>
      <Navi></Navi>
      <figure>
        <iframe src="https://uemu-engineer.com/three.html"></iframe>
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