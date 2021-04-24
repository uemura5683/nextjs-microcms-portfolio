import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/">
      <span>
        <img src="/images/logo.png" alt="uemu-portfolio" />
      </span>
    </Link>
  )
}
