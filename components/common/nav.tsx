import { Link, animateScroll as scroll } from "react-scroll";
import Linkto from 'next/link'

export default function Navigation( { home
  }: {
    home?: boolean
  } ) {
  return (
    <nav className="c-navgation">
      <ul className="c-navgation_list">
      {home ? (
        <>
        <li className="c-navgation_li">
          <Link
              activeClass="active"
              to="p-about"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}
            > 
            ABOUT
          </Link>
        </li>
        <li className="c-navgation_li">
          <Link
              activeClass="active"
              to="p-skill"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}
            > 
            SKILL
          </Link>
        </li>
        <li className="c-navgation_li">
          <Link
              activeClass="active"
              to="p-work"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}
            > 
            WORK
          </Link>
        </li>
        <li className="c-navgation_li">
          <Link
              activeClass="active"
              to="p-information"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}
            > 
            INFORMATION
          </Link>
        </li>
        <li className="c-navgation_li">
          <Link
              activeClass="active"
              to="p-nublog"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}
            > 
            NU-blog
          </Link>
        </li>
        <li className="c-navgation_li">
          <Link
              activeClass="active"
              to="p-link"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}
            > 
            LINK
          </Link>
        </li>
        <li className="c-navgation_li">
          <Link
            activeClass="active"
            to="p-contact"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}
          > 
            CONTACT
          </Link>
        </li>
        </>
      ) : (
        <>
          <li className="c-navgation_li"><Linkto href="/about">ABOUT</Linkto></li>
          <li className="c-navgation_li"><Linkto href="/#p-skill">SKILL</Linkto></li>
          <li className="c-navgation_li"><Linkto href="/#p-work">WORK</Linkto></li>
          <li className="c-navgation_li"><Linkto href="/#p-information">INFORMATION</Linkto></li>
          <li className="c-navgation_li"><Linkto href="/#p-nublog">NU-blog</Linkto></li>
          <li className="c-navgation_li"><Linkto href="/#p-link">LINK</Linkto></li>
          <li className="c-navgation_li"><Linkto href="/#p-contact">CONTACT</Linkto></li>
        </>
      )}
      </ul>
    </nav>
  )
}