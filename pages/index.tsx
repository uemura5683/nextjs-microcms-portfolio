/**
 * common
 */
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

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

import fetch from 'node-fetch'
import Link from 'next/link'


/**
 * export
 */
function Home( {blog} ) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link href="/style/main.css" rel="stylesheet" />
      </Head>
      <MainVisual></MainVisual>
      <Profile></Profile>
      <Skill></Skill>
      <section id="p-work">
        <h2 className="c-title">WORK</h2>
        <div className="card">
          <ul>
          {blog.map(blog => (
              <li key={blog.id}>
                <Link href={`work/${blog.id}`}>
                  <a>{blog.title}</a>
                </Link>
              </li>
          ))}
          </ul>
        </div>
      </section>
      <section id="p-information" className="u-gray">
        <h2 className="c-title white">INFORMATION</h2>
        <div className="card">
          <ul>
          {blog.map(blog => (
              <li key={blog.id}>
                <Link href={`infromation/${blog.id}`}>
                  <a>{blog.title}</a>
                </Link>
              </li>
          ))}
          </ul>
        </div>
      </section>
      <LinkArea></LinkArea>
      <ContactForm></ContactForm>
    </Layout>
  )
}


export async function getStaticProps() {
  const key = {
    headers: {'X-API-KEY': 'a9ca1ec4-edff-43d8-ace7-e5f0c68b5b50'},
  };
  const data = await fetch('https://uemura5683.microcms.io/api/v1/business', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
    },
  };
}

export default Home