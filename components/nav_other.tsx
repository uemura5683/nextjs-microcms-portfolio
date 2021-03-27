import Link from 'next/link'

export default function NavigationOther() {
  return (
    <nav>
      <ul>
        <li><Link href="/about">ABOUT</Link></li>
        <li><Link href="/#p-skill">SKILL</Link></li>
        <li><Link href="/#p-work">WORK</Link></li>
        <li><Link href="/#p-information">INFORMATION</Link></li>
        <li><Link href="/#p-nublog">NU-blog</Link></li>
        <li><Link href="/#p-link">LINK</Link></li>
        <li><Link href="/#p-contact">CONTACT</Link></li>
      </ul>
    </nav>
  )
}