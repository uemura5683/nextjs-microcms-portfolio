import dayjs from 'dayjs';
import Head from 'next/head'
import Link from 'next/link'
import utc from 'dayjs/plugin/utc';
import Layout  from '../../components/layout'
import timezone from 'dayjs/plugin/timezone';
import { useHistory } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function BlogId( { works, works_data, worklist } ) {
  return (
    <Layout>
      <Head>
        <title>{works.title}</title>
        <link href="/style/detail.css" rel="stylesheet" />
      </Head>
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-detail__inner">
          <div className="p-detail__inner__main">
            <div className="p-detail__top">
              <div className="p-detail__ttl">
                <div className="c-title white">{works.title}</div>
                <p>{works_data}</p>
              </div>
              <figure>
                <img 
                  alt={works.title}
                  src={works.image.url}
                  width={605}
                />
              </figure>
            </div>
            <div
              className="p-detail__bottom"
              dangerouslySetInnerHTML={{
                __html: `${works.body}`,
              }}
            />
          </div>
          <div className="p-detail__inner__sub" id="p-work">
            <h3 className="c-title white">work</h3>
            <div className="card">
              <ul>
              {worklist.map(worklist => (
                  <li key={worklist.id}>
                    <Link href={`/work/${worklist.id}`}>
                      <figure>
                        <img
                          src={worklist.image.url}
                          alt={worklist.title}
                          width={476}
                        />
                      </figure>
                    </Link>
                    <Link href={`/work/${worklist.id}`}>
                      <span>{worklist.title}</span>
                    </Link>
                  </li>
              ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="bgimage"></div>
      </motion.div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const key = {
    headers: {'X-API-KEY': '778ce6aa-1e13-4d06-af56-096c0f6b01d4'},
  };
  const data = await fetch('https://nu-portfolio.microcms.io/api/v1/work', key)
    .then(res => res.json())
    .catch(() => null);
  const paths = data.contents.map(content => `/work/${content.id}`);
  return {paths, fallback: false};
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async context => {
  const id = context.params.id;
  const key = {
    headers: {'X-API-KEY': '778ce6aa-1e13-4d06-af56-096c0f6b01d4'},
  };
  const data = await fetch(
    'https://nu-portfolio.microcms.io/api/v1/work/' + id,
    key,
  )
    .then(res => res.json())
    .catch(() => null);
  
  const publishatformat = dayjs(data.UpdateAt).format()
      , jstDate         = dayjs(publishatformat)
      , datePlastic     = jstDate.year() + '/' + jstDate.month() + '/' + jstDate.date(); 

  const works = await fetch('https://nu-portfolio.microcms.io/api/v1/work', key)
  .then(res => res.json())
  .catch(() => null);
  return {
    props: {
      works: data,
      works_data: datePlastic,
      worklist: works.contents,
    },
  };
};