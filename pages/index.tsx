/**
 * common
 */
import React from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

/**
 *  modules
 **/
import MainVisual from '../components/extend/mainvisual'
import Profile from '../components/extend/profile'
import Skill from '../components/extend/skill'
import LinkArea from '../components/extend/linkarea'
import ContactForm from '../components/extend/contactform'

import fetch from 'node-fetch'
import Link from 'next/link'

/**
 * export
 */
function Home( {info, work} ) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link href="/style/main.css" rel="stylesheet" />
      </Head>
      <MainVisual></MainVisual>
      <Profile></Profile>
      <Skill></Skill>
      <section id="p-work" className="has-animation" data-set-color="light">
        <h2 className="c-title">WORK</h2>
        <div className="card">
          <ul>
          {work.map(work => (
              <li key={work.id}>
                <Link href={`work/${work.id}`}>
                <img src={work.image.url}></img>
                </Link>
                <Link href={`work/${work.id}`}>
                  <span>{work.title}</span>
                </Link>
              </li>
          ))}
          </ul>
        </div>
      </section>
      <section id="p-information" className="u-gray has-animation" data-set-color="dark">
        <h2 className="c-title white">INFORMATION</h2>
        <div className="card">
          <ul>
          {info.map(info => (
              <li key={info.id}>
                <Link href={`information/${info.id}`}>
                <img src={info.image.url}></img>
                </Link>
                <Link href={`information/${info.id}`}>
                  <span className="white">{info.title}</span>
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
    headers: {'X-API-KEY': '778ce6aa-1e13-4d06-af56-096c0f6b01d4'},
  };
  const works = await fetch('https://nu-portfolio.microcms.io/api/v1/work', key)
    .then((res: { json: () => any }) => res.json())
    .catch(() => null);

  const infos = await fetch('https://nu-portfolio.microcms.io/api/v1/information', key)
    .then(res => res.json())
    .catch(() => null);

  return {
    props: {
      info: infos.contents,
      work: works.contents,
    },
  };
}

export default Home