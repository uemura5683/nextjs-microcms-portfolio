import Head from 'next/head'
import Link from 'next/link'
import SnsLink from '../components/snslink'
import Logo from '../components/logo'
import DrawerMenuTop from '../components/extend/drawermenu_top'
import DrawerMenuLink from '../components/extend/drawermenu_link'
import { existsGaId, GA_ID } from '../public/js/gtag'

const name = 'うえむー'
export const siteTitle = 'Nu-Stack | フロントエンドエンジニアポートフォリオサイト';
export const ogimageTitle = 'Nu-Stack';

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="フロントエンドエンジニアのうえむーのポートフォリオサイトサイトです。実績情報・スキル情報・成果物などを展開して行きます。"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/Nu%20Stack.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&images=https%3A%2F%2Fuemu-engineer.com%2Fimages%2Flogo.png&widths=undefined&widths=350&heights=undefined&heights=100`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        {/* Google Analytics */}
        {existsGaId && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });`,
                }}
              />
            </>
          )}
      </Head>
        <header>
          <Logo/>
          <SnsLink/>
          {home ? (
            <>
                  <DrawerMenuTop/>
            </>
          ) : (
            <>
                  <DrawerMenuLink/>
            </>
          ) }

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
                </div>
              </main>
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
          (c) 2021 Uemu-Portfolio
          </div>
        </footer>
        <div id="modalArea"></div>
        <script src="/js/jquery.waypoints.min.js"></script>
        <script src="/js/shuffle-text.js"></script>
        <script src="/js/common.js"></script>
    </div>
  )
}
