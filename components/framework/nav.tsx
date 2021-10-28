import { Link, animateScroll as scroll } from "react-scroll";

export default function Navigation( { home
  }: {
    home?: boolean
  } ) {
  return (
    <nav>
      <ul>
      {home ? (
        <>
        <li>
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
        <li>
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
        <li>
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
        <li>
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
        <li>
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
        <li>
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
        <li>
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
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/#p-skill">SKILL</a></li>
          <li><a href="/#p-work">WORK</a></li>
          <li><a href="/#p-information">INFORMATION</a></li>
          <li><a href="/#p-nublog">NU-blog</a></li>
          <li><a href="/#p-link">LINK</a></li>
          <li><a href="/#p-contact">CONTACT</a></li>
        </>
      )}
      </ul>
    </nav>
  )
}