import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Logo from '../components/logo'
import Navi from '../components/nav'
import SnsLink from '../components/snslink'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section id="p-mainvisual">
        <Logo></Logo>
        <Navi></Navi>
        <SnsLink></SnsLink>
      </section>
      <section id="p-about"></section>
      <section id="p-work"></section>
      <section id="p-information"></section>
      <section id="p-link"></section>
      <section id="p-contact"></section>    
    </Layout>
  )
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
