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
      </Head>
      <section id="p-mainvisual">
        <div class="p-menu__btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <SnsLink></SnsLink>
        <Logo></Logo>
        <Navi></Navi>
        <MainBnr></MainBnr>        
        <div>
          click here
        </div>
      </section>
      <section id="p-about">
        <h2 class="c-title">About</h2>
        <article class="p-about__profile">
          <h3 class="p-about__profile--ttl">PROFILE</h3>
          <ul class="p-about__profile--list">
            <li><span>名前</span>植村 修好　Uemura Nobuyoshi</li>
            <li><span>職業</span>フロントエンドエンジニア</li>
            <li><span>出身・在住</span>埼玉生まれ、東京在住</li>
            <li><span>趣味</span>麻雀・ボードゲーム・ゴルフ・ビートボックス</li>
            <li><span>リンク</span>Twitter / GitHub / Nu-Blog</li>
          </ul>
          <p class="p-about__profile--description">
            こんにちは、うえむーと呼ばれています。<br></br>
            都内でフロントエンドエンジニアとして活動しています。<br></br>
            休日はもくもく会・LT大会に積極的に参加して他のエンジニアさんと交流を積極的に深めたりしてます。<br></br>
            エンジニアとしていろんな言語・ビジネススキルを身につけ日々精進し、仲間が困ったことがあったら、助けたい・力になりたいと思っています。<br></br>
            不安を感じていたらいつでもご相談ください。<br></br>
            一生懸命夢に向かって頑張ってる人に積極的にサポートします。
          </p>
        </article>
        <article class="p-about__profile">
          <figure>
            <img src="/images/profile.jpg" />
          </figure>
          <div class="about__profile__lesson">
            毎日学習・仕事をしないと<br></br>気持ち悪いという気持ちで取り組む
          </div>
          <div class="about__profile__lessondetail">
            エンジニアは技術が発展する世界。<br></br>
            毎日学習しないといけないのですが中々辛いでしょう。<br></br>
            ですが、「毎日学習・仕事をしないと気持ち悪い」という気持ちで取り組むと、学習から習慣へ変わっていき。<br></br>
            辛さがあっという間に消えてしまいます。<br></br>
            エンジニアの発展に貢献する為にも一緒に走りましょう！
          </div>
        </article>
      </section>
      <section id="p-skill" class="u-gray">
        <h2 class="c-title">SKILL</h2>
        <Skill lhtml></Skill>
      </section>
      <section id="p-work">
        <h2 class="c-title">WORK</h2>
        <Card work></Card>
      </section>
      <section id="p-information" class="u-gray">
        <h2 class="c-title">INFORMATION</h2>
        <Card></Card>
      </section>
      <section id="p-link">
        <h2 class="c-title">LINK</h2>
        <LinkArea></LinkArea>
      </section>
      <section id="p-contact" class="u-gray">
        <h2 class="c-title">CONTACT</h2>
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