import Link from 'next/link'

export default function Logo( { home
  }: {
    home?: boolean
  } ) {
  return (
    <>
      {home ? (
        <>
          <Link href="/">
            <span>    
              <img src="/images/logo.png" alt="uemu-portfolio" />
            </span>
          </Link>
        </>
      ) : (
        <>
          <a href="/">
            <span>    
              <img src="/images/logo.png" alt="uemu-portfolio" />
            </span>
          </a>
        </>
      )}
    </>
  )
}
