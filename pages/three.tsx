
/**
 * common
 */
import React from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

// SSRあるとwindowが使えない等あるため
import dynamic from 'next/dynamic'

const ThreeNoSSR = dynamic(
  () => import('../components/three'),
  { ssr: false }
)

/**
 * export
 */
export default function Threejs() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link href="/style/main.css" rel="stylesheet" />
      </Head>
      <section id="p-mainvisual">
        <ThreeNoSSR></ThreeNoSSR>
      </section>
    </Layout>
  )
}