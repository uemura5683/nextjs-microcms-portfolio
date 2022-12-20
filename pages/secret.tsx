import React from 'react'
import Head  from 'next/head'
import fetch from 'node-fetch'
import { motion }  from "framer-motion";
import Achievement from '../components/secret/achievement'
import Layout, { siteTitle } from '../components/common/layout'
import { GetServerSideProps } from 'next'

function Secret( { achievement } ) {
  return (
    <Layout>
      <Head>
        <meta name="robots" content="noindex" />
        <title>実績一覧 | {siteTitle}</title>
      </Head>
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Achievement skill={ achievement }></Achievement>
        <div className="bgimage"></div>
      </motion.div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context
        , split = req.url.split("=");

  if( split[1] === process.env.PARAM ) {
    const achievement = await fetch(process.env.ACHIEVEMENT)
      .then((res: { json: () => any }) => res.json())
      .catch(() => null);
    const achievements = achievement ? achievement : null;
    return {
      props: {
        achievement: achievements,
      },
    }
  } else {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    }
  }
}

export default Secret