import Head from 'next/head'
import Link from 'next/link'
import Logo from '../../components/common/logo'
import SnsLink from '../../components/extend/snslink'
import DrawerMenu from '../../components/common/drawermenu'
import Scrolltop from '../../components/extend/scrolltop'
import { existsGaId, GA_ID } from '../../public/js/gtag'
import Animation from '../../components/top/animation'
import React from "react";

export const siteTitle = 'Ustack | うえむーポートフォリオサイト';
export default function Layout({ children, home
  }: {
    children: React.ReactNode
    home?: boolean
    jsx?: any
  }) {


  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="フロントエンドエンジニアのうえむーのポートフォリオサイトサイトです。実績情報・スキル情報・成果物などを展開して行きます。" />
        <meta property="og:image" content="https://uemu-engineer.com/images/ogimage.png" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@uemuragame5683" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content="フロントエンドエンジニアのうえむーのポートフォリオサイトサイトです。実績情報・スキル情報・成果物などを展開して行きます。" />
        <meta name="twitter:image" content="https://uemu-engineer.com/images/ogimage.png" />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&amp;display=swap" rel="stylesheet" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" async defer />
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
      { home ? (
        <Animation></Animation>
      ) : null }
      <div id="wrapper">
        { !home ? (
          <style>{`
            header.light {
              background-color: transparent !important;
            }
            header.light  .header--menu__btn span {
              background-color: white !important;
            }
          `}</style>
        ) : null }

        <header>
          <Logo/>
          <SnsLink/>
          {home ? (
            <>
              <DrawerMenu home/>
            </>
          ) : (
            <>
              <DrawerMenu/>
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
            <Logo/>
          </div>
          <SnsLink/>
          <div className="footer--link__privacy">
            <Link href="/about">About</Link>
          </div>
          <div className="footer__copyrights">
            (c) {new Date().getFullYear()} Uemu-Engineer
          </div>
        </footer>
        <div id="modalArea"></div>
        <Scrolltop/>
        <script src="/js/jquery.waypoints.min.js" async defer />
        <script src="/js/common.js" async defer />
      </div>
    </>
  )
}
