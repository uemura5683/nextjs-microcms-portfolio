import Head from 'next/head'
import Layout from '../components/common/layout'
import { motion } from "framer-motion";

export default function Custom500() {
  return (
    <>
    <Layout>
      <Head>
        <title>500 エラー</title>
      </Head>
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="c-title white">エラーが発生しました。</h2>
        <div className="bgimage"></div>
      </motion.div>
    </Layout>
    </>
  )
}