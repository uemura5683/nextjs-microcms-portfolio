import dayjs from 'dayjs';
import Head from 'next/head'
import Link from 'next/link'
import Layout  from '../../components/framework/layout'
import { motion } from "framer-motion";

export default function BlogId( { infos, info_data, infolist } ) {
  return (
    <Layout>
      <Head>
        <title>{infos.title}</title>
        <link href="/style/detail.css" rel="stylesheet" />
      </Head>
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-detail__inner">
            { infos ? (
              <>
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
            </>
          ) : (
              <div className="p-detail__inner__main">
                  <div className="p-detail__top">
                    <div className="p-detail__ttl">
                      <div className="c-title white">記事の読み込み失敗しました</div>
                    </div>
                  </div>
              </div>
          ) }
          <div className="p-detail__inner__sub"  id="p-information">
            <h3 className="c-title white">information</h3>
            <div className="card">
              <ul>
                {infolist ? infolist.map(infolist => (
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
                  )) : (
                      <li>記事の読み込み失敗しました</li>
                  )
                }
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
  const data = await fetch('https://nu-portfolio.microcms.io/api/v1/information', key)
    .then(res => res.json())
    .catch(() => null);
  const dataid = data ? data.contents : null,
        paths  = dataid ? data.contents.map(content => `/information/${content.id}`) : null;
  return {paths, fallback: false};
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async context => {
  const id = context.params.id;
  const key = {
    headers: {'X-MICROCMS-API-KEY': process.env.NS_API_KEY},
  };
  const data = await fetch(
    'https://nu-portfolio.microcms.io/api/v1/information/' + id,
    key,
  )
    .then(res => res.json())
    .catch(() => null);

    const publishatformat = dayjs(data.UpdateAt).format()
    , jstDate         = dayjs(publishatformat)
    , datePlastic     = jstDate.year() + '/' + jstDate.month() + '/' + jstDate.date(); 

  const infos = await fetch('https://nu-portfolio.microcms.io/api/v1/information', key)
    .then(res => res.json())
    .catch(() => null);

  let infoc = infos ? infos.contents : null;

  return {
    props: {
      infos: data || null,
      info_data: datePlastic || null,
      infolist: infoc || null,
    },
  };
};