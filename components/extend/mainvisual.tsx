/**
 * component
 */
import Logo from '../logo'
import Navi from '../nav'
import MainBnr from '../mainbnr'

/**
 * export
 */
export default function ContactForm() {
  return (
    <section id="p-mainvisual">
      <Logo></Logo>
      <Navi></Navi>
      <MainBnr></MainBnr>        
      <div className="p-mainvisual__click">
        <span></span>
        click here
      </div>
    </section>
  )
}