import Head from 'next/head'
import Link from 'next/link'
import Navi from '../components/nav'
import SnsLink from '../components/snslink'
import Logo from '../components/logo'

const name = 'うえむー'
export const siteTitle = 'うえむーのnext.js練習用のサイト'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="うえむーのNext.js練習用サイトです"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      </Head>
      <header>
        {home ? (
          <>
          </>
        ) : (
          <>
            <Logo></Logo>
          </>
        ) }
        <SnsLink></SnsLink>
        <div className="header--menu__btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="header--menu__content">
          <Navi></Navi>
        </div>
      </header>
      {home ? (
          <>
            <main>{children}</main>
          </>
        ) : (
          <>
            <main className="bgimage">{children}</main>
          </>
        ) }
      <footer>
        <div className="foorter__logo">
          <Logo></Logo>
        </div>
        <SnsLink></SnsLink>
        <div className="footer--link__privacy">
          <Link href="/about">About</Link>
        </div>
        <div className="footer__copyrights">
        (c) 2020 Uemu-Portfolio
        </div>
      </footer>
      <script src="/js/jquery.waypoints.min.js"></script>
    </div>
  )
}
