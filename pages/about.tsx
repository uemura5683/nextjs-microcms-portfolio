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
          <h2 className="c-title white">フルスタックエンジニアを目指して</h2>
          <div className="p-about__inner">
            <p>
            僕は、現職はフロントエンドエンジニアですが、サーバーサイド・インフラのスキルを身につけ最終的にはフルスタックエンジニアになることを目指します<br />
            その為に、仕事・プライベートで時間がある時に技術を少しづつ身につけ色々とアプトプットをしています。<br />
            アウトプットして自分の成果物が完成したら本サイトにドンドン投稿してエビデンスを残していきたいと思います。<br />
            </p>
          </div>
          <h2 className="c-title white">自分が一番重要視していること</h2>
          <div className="p-about__inner">
            <p>
            僕が一番重要視しているのは、最終目標を決めること<br />
            最終目標を設定せず、ただなんとなく学習するのは時間・お金の無駄だと思っています。<br />
            まず、一番決めることは最終目標を決めて<br />
            その次に、最終目標を達成する為には、まず何をクリアしなければいけないのかを自分で思いつくことをどんどん書いて焦らず、ゆっくり進めるが大事です。<br />
            年収1000万円、部長になる、フォロワー数5万人以上のインフルエンサーになるなどなんでもいいので、最終目標を決めてどんどん前を進んでください。<br />
            その順序で行くと、自分の将来の夢がどんどん近づいて行くと思います。ただし、実行しないと無意味なので<br />
            最終目標を達成する為に、まず何をするのかを小分類に区分けしてそれぞれ小さい目標を設定して目標を進んでください。<br />
            もし、何か作業が滞っている場合などがあったらいつでも連絡ください。サポートをします。
            </p>
          </div>
          <h2 className="c-title white">経歴</h2>
          <div className="p-about-history">
            <h3 className="c-title white">大卒して設備工事の会社に入社</h3>
            <div className="p-about__inner">
              <span>2010</span>
              <p>
                僕は、前職は全く異なる業界で設備工事の会社に入社してました。<br/>
                この日は研修する以外が現場に直行し、月曜日〜土曜日に仕事をして<br/>
                休みは週に一回、繁忙期に迎えた時は月に1回しか休めず結構過酷でした。<br/>
                職人・上司にほぼ毎日怒られ、この業界に向いていないのでは？と思い前々から得意だったPC関連の仕事をしていこうと思いました。
              </p>
            </div>
            <h3 className="c-title white">IT・Web業界で仕事をする為、パソコンスクールに通う</h3>
            <div className="p-about__inner">
              <span>2011-2012</span>
              <p>
                2011年の4月からKEN SCHOOLというパソコンスクールに通い、休みの日は必ず通っていました。<br/>
                最初はDTPオペレーターの仕事しようと思ったが、いろんなコースがあるのをしり色々と検討して、Webデザイン・Webプログラミングのコースをとり<br/>
                html/css/javascript/jQuery/php/Photoshop/Illustratorなどを学習していました。<br/>
                仕事が忙しくてなかなか通えず、気がついたら1年半もかかりました。<br/>
              </p>
            </div>
            <h3 className="c-title white">ポートフォリオを作成し、転職活動へ</h3>
            <div className="p-about__inner">
              <span>2012</span>
              <p>
                2012年の夏頃にポートフォリオを完成し、転職活動しました。
              </p>
            </div>
          </div>
        </div>
        <div className="bgimage"></div>
      </div>
    </Layout>
  )
}
