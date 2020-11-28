import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import aboutStyles from '../styles/about.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function About() {
  return (
    <Layout about>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  )
}
