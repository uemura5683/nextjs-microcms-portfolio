import Link from 'next/link'

export default function Logo( { home
  } : {
    home?: boolean
  } ) {
  return (
    <>
      <Link href="/">
      { home ? (
        <span className="hidden-phone c-logo-image-wrap">
          <img className="c-logo-image" src="/images/logo.png" alt="uemu-portfolio" />
        </span>
      ): (
        <span>
          <img className="c-logo-image c-logo-image-wrap" src="/images/logo.png" alt="uemu-portfolio" />
        </span>        
      )}
      </Link>
    </>
  )
}