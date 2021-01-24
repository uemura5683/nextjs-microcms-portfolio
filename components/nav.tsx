import Link from 'next/link'

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link href="/about">ABOUT</Link></li>
        <li><a href="#p-skill">SKILL</a></li>
        <li><a href="#p-work">WORK</a></li>
        <li><a href="#p-information">INFORMATION</a></li>
        <li><a href="#p-link">LINK</a></li>
        <li><a href="#p-contact">CONTACT</a></li>
      </ul>
    </nav>
  )
}