import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import privacyStyles from '../styles/privacy.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  )
}
