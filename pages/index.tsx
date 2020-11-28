/**
 * common
 */
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'

/**
 *  modules
 **/
import MainVisual from '../components/extend/mainvisual'
import Profile from '../components/extend/profile'
import Skill from '../components/extend/skill'
import Work from '../components/extend/work'
import Information from '../components/extend/information'
import LinkArea from '../components/extend/linkarea'
import ContactForm from '../components/extend/contactform'

/**
 * export
 */
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link href="/style/main.css" rel="stylesheet" />
      </Head>
      <MainVisual></MainVisual>
      <Profile></Profile>
      <Skill></Skill>
      <Work></Work>
      <Information></Information>
      <LinkArea></LinkArea>
      <ContactForm></ContactForm>
    </Layout>
  )
}