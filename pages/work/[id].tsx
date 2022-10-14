import dayjs from 'dayjs';
import Head from 'next/head'
import Link from 'next/link'
import Layout  from '../../components/common/layout'
import { motion } from "framer-motion";

export default function BlogId( { works, works_data, worklist } ) {
  return (
    <Layout>
      <Head>
        <title>{works.title}</title>
      </Head>
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-detail__inner">
          { works ? (
            <div className="p-detail__inner__main">
              <div className="p-detail__top">
                <div className="p-detail__ttl">
                  <div className="c-title white">{works.title}</div>
                  <p>{works_data}</p>
                </div>
                <figure className="c-card-figure">
                  <img 
                    className="c-card-img"
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
          ) : (
            <div className="p-detail__inner__main">
                <div className="p-detail__top">
                  <div className="p-detail__ttl">
                    <div className="c-title white">記事の読み込み失敗しました</div>
                  </div>
                </div>
            </div>
          ) }
          <div className="p-detail__inner__sub" id="p-work">
            <h3 className="c-title white">work</h3>
            <div className="c-card-wrap">
              <ul className="c-card-list">
                {worklist ? worklist.map(worklist => (
                  <li className="c-card-li" key={worklist.id}>
                    <Link href={`/work/${worklist.id}`}>
                      <figure className="c-card-figure">
                        <img
                          className="c-card-img"
                          src={worklist.image.url}
                          alt={worklist.title}
                          width={476}
                        />
                      </figure>
                    </Link>
                    <Link href={`/work/${worklist.id}`}>
                      <span className="c-card-txt">{worklist.title}</span>
                    </Link>
                  </li>
                )) : (
                  <li>記事の読み込み失敗しました</li>
                )}
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
    headers: {'X-MICROCMS-API-KEY': process.env.NS_API_KEY},
  };
  const data = await fetch('https://nu-portfolio.microcms.io/api/v1/work', key)
    .then(res => res.json())
    .catch(() => null);
  const dataid = data ? data.contents : null,
        paths  = dataid ? dataid.map(content => `/work/${content.id}`) : null;
  return {paths, fallback: false};
};

export const getStaticProps = async context => {
  const id = context.params.id;
  const key = {
    headers: {'X-MICROCMS-API-KEY': process.env.NS_API_KEY},
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

  const workc = works ? works.contents : null;

  return {
    props: {
      works: data || null,
      works_data: datePlastic || null,
      worklist: workc || null,
    },
  };
};