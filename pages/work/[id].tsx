import Layout, { siteTitle }  from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'
import Head from 'next/head'
import Link from 'next/link'
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

export default function BlogId( { works, works_data, worklist } ) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link href="/style/detail.css" rel="stylesheet" />
      </Head>
  
      <div className="container">
        <div className="p-detail__inner">
          <div className="c-title white">{works.title}</div>
          <div className="p-detail__top">
            <p>{works_data}</p>
            <img src={works.image.url}></img>
          </div>
          <div
            className="p-detail__bottom"
            dangerouslySetInnerHTML={{
              __html: `${works.body}`,
            }}
          />
          <div id="p-work">
            <h3 className="c-title white">work</h3>
            <div className="card">
              <ul>
              {worklist.map(worklist => (
                  <li key={worklist.id}>
                    <Link href={`/work/${worklist.id}`}>
                      <figure>
                        <img src={worklist.image.url}></img>
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
  
  const datePlastic = data.publishedAt;

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