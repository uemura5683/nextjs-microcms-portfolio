/**
 * component
 */
import Logo from '../logo'
import Navi from '../nav'

// SSRあるとwindowが使えない等あるため
import dynamic from 'next/dynamic'


/**
 * export
 */
export default function Threejs() {
  return (
    <section id="p-mainvisual" data-set-color="dark">
      <Logo></Logo>
      <Navi></Navi>
      <figure>
        <img src="/images/bnr/banner.png"></img>
      </figure>
      <div className="p-mainvisual__click">
        <a href="#p-about">
          <span></span>
          click here
        </a>
      </div>
    </section>
  )
}