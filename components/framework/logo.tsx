import Link from 'next/link'

export default function Logo( { home
  } : {
    home?: boolean
  } ) {
  return (
    <>
      <Link href="/">
      { home ? (
        <span className="hidden-phone">
          <img src="/images/logo.png" alt="uemu-portfolio" />
        </span>
      ): (
        <span>
          <img src="/images/logo.png" alt="uemu-portfolio" />
        </span>        
      )}
      </Link>
    </>
  )
}