import Layout, { siteTitle }  from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'
import Head from 'next/head'
import Link from 'next/link'
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { AnimatePresence, motion } from "framer-motion";
import { useHistory } from "react-router";

export default function BlogId( { infos, info_data, infolist } ) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link href="/style/detail.css" rel="stylesheet" />
      </Head>
      <motion.div
        animate={{
          x: 0,
          opacity: 1
        }}
        initial={{
          x: 0,
          opacity: 0
        }}
        exit={{
          x: 0,
          opacity: 0
        }}
        transition={{
          duration: 0.5
        }}
      >
        <div className="p-detail__inner">
          <div className="p-detail__inner__main">
            <div className="p-detail__top">
              <div className="p-detail__ttl">
                <div className="c-title white">{infos.title}</div>
                <p>{info_data}</p>
              </div>
              <figure>
                <img
                  src={infos.image.url}
                  alt={infos.title}
                  width={605}
                />
              </figure>
            </div>
            <div
              className="p-detail__bottom"
              dangerouslySetInnerHTML={{
                __html: `${infos.body}`,
              }}
            />
          </div>
          <div className="p-detail__inner__sub"  id="p-information">
            <h3 className="c-title white">information</h3>
            <div className="card">
              <ul>
              {infolist.map(infolist => (
                  <li key={infolist.id}>
                    <Link href={`/information/${infolist.id}`}>
                    <figure>
                      <img 
                        src={infolist.image.url}
                        alt={infolist.title}
                        width={476}
                      />
                    </figure>
                    </Link>
                    <Link href={`/information/${infolist.id}`}>
                      <span>{infolist.title}</span>
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
  const data = await fetch('https://nu-portfolio.microcms.io/api/v1/information', key)
    .then(res => res.json())
    .catch(() => null);
  const paths = data.contents.map(content => `/information/${content.id}`);
  return {paths, fallback: false};
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async context => {
  const id = context.params.id;
  const key = {
    headers: {'X-API-KEY': '778ce6aa-1e13-4d06-af56-096c0f6b01d4'},
  };
  const data = await fetch(
    'https://nu-portfolio.microcms.io/api/v1/information/' + id,
    key,
  )
    .then(res => res.json())
    .catch(() => null);

    console.log(data);

    const publishatformat = dayjs(data.UpdateAt).format()
    , jstDate         = dayjs(publishatformat)
    , datePlastic     = jstDate.year() + '/' + jstDate.month() + '/' + jstDate.date(); 



  const infos = await fetch('https://nu-portfolio.microcms.io/api/v1/information', key)
    .then(res => res.json())
    .catch(() => null);

  return {
    props: {
      infos: data,
      info_data: datePlastic,
      infolist: infos.contents,
    },
  };
};