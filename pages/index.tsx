import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Navi from '../components/nav'
import Date from '../components/date'
import Logo from '../components/logo'
import Card from '../components/card'
import Skill from '../components/skill'
import SnsLink from '../components/snslink'
import MainBnr from '../components/mainbnr'
import LinkArea from '../components/linkarea'
import Contact from '../components/contact'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link href="/style/main.css" rel="stylesheet" />
      </Head>
      <section id="p-mainvisual">
        <Logo></Logo>
        <Navi></Navi>
        <MainBnr></MainBnr>        
        <div className="p-mainvisual__click">
          <span></span>
          click here
        </div>
      </section>
      <section id="p-about">
        <h2 className="c-title">About</h2>
        <article className="p-about__profile">
          <h3 className="p-about__profile--ttl">PROFILE</h3>
          <ul className="p-about__profile--list">
            <li><span>名前</span>植村 修好　Uemura Nobuyoshi</li>
            <li><span>職業</span>フロントエンドエンジニア</li>
            <li><span>出身・在住</span>埼玉生まれ、東京在住</li>
            <li><span>趣味</span>麻雀・ボードゲーム・ゴルフ・ビートボックス</li>
            <li><span>リンク</span>Twitter / GitHub / Nu-Blog</li>
          </ul>
          <p className="p-about__profile--description">
            こんにちは、うえむーです。<br></br><br></br>
            都内でフロントエンドエンジニアとして活動しています。<br></br><br></br>
            休日はもくもく会・LT大会に積極的に参加して他のエンジニアさんと交流を積極的に深めたりしてます。<br></br><br></br>
            エンジニアとしていろんな言語・ビジネススキルを身につけ日々精進し、<br></br>仲間が困ったことがあったら、助けたい・力になりたいと思っています。<br></br><br></br>
            悩み事などがあったらいつでもご相談ください。<br></br><br></br>
            一生懸命夢に向かって頑張ってる人に積極的にサポートします。
          </p>
        </article>
        <article className="p-about__profile">
          <figure>
            <img className="/images/profile.jpg" />
          </figure>
          <div className="about__profile__lesson">
            毎日学習・仕事をしないと<br></br>気持ち悪いという気持ちで取り組む
          </div>
          <div className="about__profile__lessondetail">
            <p>
            エンジニアは技術が発展する世界。<br></br>
            毎日学習しないといけないのですが中々辛いでしょう。<br></br>
            ですが、「毎日学習・仕事をしないと気持ち悪い」という気持ちで取り組むと、学習から習慣へ変わっていき。<br></br>
            辛さがあっという間に消えてしまいます。<br></br>
            エンジニアの発展に貢献する為にも一緒に走りましょう！
            </p>
          </div>
        </article>
        <div className="p-about__profile__bg"></div>
      </section>
      <section id="p-skill" className="u-gray">
        <h2 className="c-title white">SKILL</h2>
        <Skill></Skill>
      </section>
      <section id="p-work">
        <h2 className="c-title">WORK</h2>
        <Card work></Card>
      </section>
      <section id="p-information" className="u-gray">
        <h2 className="c-title white">INFORMATION</h2>
        <Card></Card>
      </section>
      <section id="p-link">
        <h2 className="c-title">LINK</h2>
        <LinkArea></LinkArea>
      </section>
      <section id="p-contact" className="u-gray">
        <h2 className="c-title white">CONTACT</h2>
        <Contact></Contact>
      </section>    
    </Layout>
  )
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}