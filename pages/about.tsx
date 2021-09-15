import Head from 'next/head'
import Layout from '../components/layout'
import { useHistory } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

/**
 * export
 */
export default function About( {info} ) {
  console.log(info);
  return (
    <Layout>
      <Head>
        <title>Aboutページ</title>
        <link href="/style/about.css" rel="stylesheet" />
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
  )
}

export async function getStaticProps() {

  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const infos = await fetch('https://nu-portfolio.microcms.io/api/v1/about', key)
    .then((res: { json: () => any }) => res.json())
    .catch(() => null);

  let infoc = infos ? infos.body : null;

  return {
    props: {
      info: infoc || null,
    },
  };
}