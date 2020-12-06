import Layout, { siteTitle }  from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

export default function BlogId({}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link href="/style/detail.css" rel="stylesheet" />
      </Head>
      <div className="detail__inner">
        <h1>{works.title}</h1>
        <p>{works.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${works.body}`,
          }}
        />
      </div>
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
  return {
    props: {
      works: data,
    },
  };
};