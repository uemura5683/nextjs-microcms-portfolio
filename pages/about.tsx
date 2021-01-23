import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'

/**
 * export
 */
export default function About() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link href="/style/about.css" rel="stylesheet" />
      </Head>
      <div className="container">
        <div className="p-about">
        </div>
        <div className="bgimage"></div>
      </div>
    </Layout>
  )
}
