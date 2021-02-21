import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'

/**
 * export
 */
export default function About() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link href="/style/about.css" rel="stylesheet" />
      </Head>
      <div className="container">
        <div className="p-about">
          <h2>フルスタックエンジニアを目指して</h2>
          <div className="p-about__inner">
            僕は、現職はフロントエンドエンジニアですが、サーバーサイド・インフラのスキルを身につけ最終的にはフルスタックエンジニアになることを目指します<br />
            その為に、仕事・プライベートで時間がある時に技術を少しづつ身につけ色々とアプトプットをしています。<br />
            アウトプットして自分の成果物が完成したら本サイトにドンドン投稿してエビデンスを残していきたいと思います。<br />
          </div>
          <h2>自分が一番重要視していること</h2>
          <div className="p-about__inner">
            僕が一番重要視しているのは、最終目標を決めること<br />
            最終目標を設定せず、ただなんとなく学習するのは時間・お金の無駄だと思っています。<br />
            まず、一番決めることは最終目標を決めて<br />
            その次に、最終目標を達成する為には、まず何をクリアしなければいけないのかを自分で思いつくことをどんどん書いて焦らず、ゆっくり進めるが大事です。<br />
            年収1000万円、部長になる、フォロワー数5万人以上のインフルエンサーになるなどなんでもいいので、最終目標を決めてどんどん前を進んでください。<br />
            その順序で行くと、自分の将来の夢がどんどん近づいて行くと思います。<br />
            ただし、実行しないと無意味なので<br />
            自分の無理のない範囲で小さいステップからやれることをどんどんやって行ってください。<br />
            もし、何か作業が滞っている場合などがあったらいつでも連絡ください。<br />
            サポートをします。
          </div>
        </div>
        <div className="bgimage"></div>
      </div>
    </Layout>
  )
}
