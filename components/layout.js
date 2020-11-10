import Head from 'next/head'
import Link from 'next/link'
import Navi from '../components/nav'
import Logo from '../components/logo'
import SnsLink from '../components/snslink'

const name = 'うえむー'
export const siteTitle = 'うえむーのnext.js練習用のサイト'

export default function Layout({ children, home }) {
  return (
    <div class="wrapper">
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
      </Head>
      <main>{children}</main>
      <footer>
        <SnsLink></SnsLink>
      </footer>
      <div class="l-drawer">
      <Logo></Logo>
      <Navi></Navi>
      <SnsLink></SnsLink>      
      </div>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}