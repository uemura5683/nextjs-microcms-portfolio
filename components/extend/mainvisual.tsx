/**
 * component
 */
import Logo from '../logo'
import Navi from '../nav'

// SSRあるとwindowが使えない等あるため
import dynamic from 'next/dynamic'

const ThreeNoSSR = dynamic(
  () => import('../three'),
  { ssr: false }
)

/**
 * export
 */
export default function ContactForm() {
  return (
    <section id="p-mainvisual">
      <Logo></Logo>
      <Navi></Navi>
      <ThreeNoSSR></ThreeNoSSR>
      <div className="p-mainvisual__click">
        <a href="#p-about">
          <span></span>
          click here
        </a>
      </div>
    </section>
  )
}