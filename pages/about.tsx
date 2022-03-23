import Head from 'next/head'
import Layout from '../components/framework/layout'
import { motion } from "framer-motion";

export default function About( {info} ) {
  return (
    <>
    <Layout>
      <Head>
        <title>Aboutページ</title>
      </Head>
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-about" dangerouslySetInnerHTML={{__html: info.body}} />
        <div className="bgimage"></div>
      </motion.div>
    </Layout>
    </>
  )
}

export async function getStaticProps() {
  const key = {
    headers: {'X-MICROCMS-API-KEY': process.env.NS_API_KEY},
  };
  const infos = await fetch('https://nu-portfolio.microcms.io/api/v1/about', key)
    .then((res: { json: () => any }) => res.json())
    .catch(() => null);
  const infoc = infos ? infos.body : null;
  return {
    props: {
      info: infoc || null,
    },
  };
}