import Head from 'next/head'
import Link from 'next/link'
import SnsLink from '../components/snslink'
import Logo from '../components/logo'
import DrawerMenu from '../components/extend/drawermenu'

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
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      </Head>
        <header>
          {home ? (
            <>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Logo></Logo>
                </a>
              </Link>
            </>
          ) }
          <SnsLink></SnsLink>
          <DrawerMenu></DrawerMenu>
        </header>
        {home ? (
            <>
              <main>{children}</main>
            </>
          ) : (
            <>
              <main>
                <div className="container">
                  {children}
                  <div className="bgimage"></div>
                </div>
              </main>
            </>
          ) }
        <footer>
          <div className="foorter__logo">
            <Link href="/">
              <Logo></Logo>
            </Link>
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
        <script src="/js/shuffle-text.js"></script>
        <script src="/js/common.js"></script>
    </div>
  )
}
