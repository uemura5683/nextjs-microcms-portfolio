import React from 'react'
import Head  from 'next/head'
import Link  from 'next/link'
import fetch from 'node-fetch'
import Layout, { siteTitle } from '../components/framework/layout'
import { motion }  from "framer-motion";
import MainVisual  from '../components/top/mainvisual'
import Profile     from '../components/top/profile'
import Skill       from '../components/top/skill'
import LinkArea    from '../components/top/linkarea'
import ContactForm from '../components/top/contactform'
import CardExtend from "../components/common/card-extend-detail";

function Home( {info, work, blog, skill} ) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MainVisual />
        <Profile />
        <Skill skill={skill} />

        { work ? (
          <section id="p-work" className="has-animation" data-set-color="light">
            <h2 className="c-title">WORK</h2>
            <div className="card">
              <ul>
                <CardExtend data={{data:work, link:'work'}} />
              </ul>
            </div>
          </section>
          ) : null
        }
        { info ? (
          <section id="p-information" className="u-gray has-animation" data-set-color="dark">
            <h2 className="c-title white">INFORMATION</h2>
            <div className="card">
              <ul>
                <CardExtend data={{data:info, link:'information'}} />
              </ul>
            </div>
          </section>
          ) : null
        }
        { blog ? (
          <section id="p-nublog" className="has-animation" data-set-color="light">
            <h2 className="c-title">NU-blog</h2>
            <div className="card">
              <ul>
              <CardExtend data={{data:blog, link:'nublog'}} />
              </ul>
            </div>
          </section>
          ) : null
        }
        <LinkArea></LinkArea>
        <ContactForm></ContactForm>
      </motion.div>
    </Layout>
  )
}

export async function getStaticProps() {
  const key = {
    headers: {'X-MICROCMS-API-KEY': process.env.NS_API_KEY},
  };
  const key_nu = {
    headers: {'X-MICROCMS-API-KEY': process.env.NU_API_KEY},
  }
  const skilllist = await fetch(process.env.SKILL)
    .then((res: { json: () => any }) => res.json())
    .catch(() => null);

  const works = await fetch('https://nu-portfolio.microcms.io/api/v1/work', key)
    .then((res: { json: () => any }) => res.json())
    .catch(() => null);

  const infos = await fetch('https://nu-portfolio.microcms.io/api/v1/information', key)
    .then((res: { json: () => any }) => res.json())
    .catch(() => null);

  const blogs = await fetch('https://uemura5683.microcms.io/api/v1/all', key_nu)
    .then((res: { json: () => any }) => res.json())
    .catch(() => null);

  let infoc = infos ? infos.contents : null,
      workc = works ? works.contents : null,
      blogc = blogs ? blogs.contents : null,
      skils = skilllist ? skilllist : null;

  return {
    props: {
      info: infoc,
      work: workc,
      blog: blogc,
      skill: skils,
    },
  };
}
export default Home;