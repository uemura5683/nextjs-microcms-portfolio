import Head from 'next/head'
import Layout from '../components/framework/layout'
import { motion } from "framer-motion";

export default function Custom404() {
  return (
    <>
    <Layout>
      <Head>
        <title>Notfoundページ</title>
      </Head>
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="c-title white">申し訳ございません。ページが見つかりませんでした。</h2>
        <div className="bgimage"></div>
      </motion.div>
    </Layout>
    </>
  )
}