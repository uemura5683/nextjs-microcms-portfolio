import Layout, { siteTitle }  from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

export default function BlogId({ works, worklist }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link href="/style/detail.css" rel="stylesheet" />
      </Head>
      <div className="p-detail__inner">
        <div className="c-title white">{works.title}</div>
        <div className="p-detail__top">
          <p>{works.publishedAt}</p>
          <img src={works.image.url}></img>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: `${works.body}`,
          }}
        />
        <div id="p-information">
          <h2 className="c-title white">INFORMATION</h2>
          <div className="card">
            <ul>
            {worklist.map(worklist => (
                <li key={worklist.id}>
                  <Link href={`work/${worklist.id}`}>
                  <img src={worklist.image.url}></img>
                  </Link>
                  <Link href={`work/${worklist.id}`}>
                    <span>{worklist.title}</span>
                  </Link>
                </li>
            ))}
            </ul>
          </div>
        </div>
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
      works: data,
      worklist: infos.contents,
    },
  };
};