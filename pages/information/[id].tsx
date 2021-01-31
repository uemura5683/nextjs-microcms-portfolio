import Layout, { siteTitle }  from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

export default function BlogId( { infos, infolist } ) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link href="/style/detail.css" rel="stylesheet" />
      </Head>
      <div className="container">
        <div className="p-detail__inner">
          <div className="c-title white">{infos.title}</div>
          <div className="p-detail__top">
            <p>{infos.publishedAt}</p>
            <img src={infos.image.url}></img>
          </div>
          <div
            className="p-detail__bottom"
            dangerouslySetInnerHTML={{
              __html: `${infos.body}`,
            }}
          />
          <div id="p-information">
            <h3 className="c-title white">information</h3>
            <div className="card">
              <ul>
              {infolist.map(infolist => (
                  <li key={infolist.id}>
                    <Link href={`/information/${infolist.id}`}>
                    <figure>
                      <img src={infolist.image.url}></img>
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
      </div>
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

  const infos = await fetch('https://nu-portfolio.microcms.io/api/v1/information', key)
    .then(res => res.json())
    .catch(() => null);

  return {
    props: {
      infos: data,
      infolist: infos.contents,
    },
  };
};