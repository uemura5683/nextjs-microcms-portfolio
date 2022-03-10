import React, { useState, useEffect, useMemo, useRef } from 'react';
import Head from 'next/head'
import Layout from '../components/framework/layout'
import { motion } from "framer-motion";
import db from "../utils/firebase";

const Chat: React.FC = () => {
  return (
    <Layout>
      <Head>
        <meta name="robots" content="noindex" />
        <title>Chat</title>
      </Head>
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bgimage"></div>
      </motion.div>
    </Layout>
  );
};

 export default Chat;