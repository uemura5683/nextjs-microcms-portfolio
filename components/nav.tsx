import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link href="#about">ABOUT</Link></li>
        <li><Link href="#skill">SKILL</Link></li>
        <li><Link href="#work">WORK</Link></li>
        <li><Link href="#infomation">INFORMATION</Link></li>
        <li><Link href="#link">LINK</Link></li>
        <li><Link href="#contact">CONTACT</Link></li>
      </ul>
    </nav>
  )
}