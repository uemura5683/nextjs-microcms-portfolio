export default function Profile() {
  return (
    <section id="p-about" className="has-animation animation-second" data-set-color="light">
      <h2 className="c-title">About</h2>
      <article className="p-about__profile">
        <h3 className="p-about__profile--ttl">PROFILE</h3>
        <ul className="p-about__profile--list">
          <li><span>名前</span>植村 修好　Uemura Nobuyoshi</li>
          <li><span>職業</span>フロントエンドエンジニア</li>
          <li><span>出身・在住</span>埼玉生まれ、東京在住</li>
          <li><span>趣味</span>麻雀・ボードゲーム・ゴルフ・学習</li>
          <li><span>リンク</span><a href="https://twitter.com/uemuragame5683" target="_blank" rel="noopener noreferrer">X(旧Twitter)</a> / <a href="https://github.com/uemura5683" target="_blank" rel="noopener noreferrer">GitHub</a> / <a href="https://nu-blogsite.net/" target="_blank" rel="noopener noreferrer">Nu-Blog</a></li>
        </ul>
        <p className="p-about__profile--description">
          こんにちは、うえむーです。<br />
          都内でフロントエンドエンジニアとして仕事をしています。<br />
          休日はもくもく会・LT大会に積極的に参加して他のエンジニアさんと交流を積極的に深めたりしてます。<br />
          エンジニアとしていろんな言語・ビジネススキルを身につけ日々精進しており、最終的にはフルスタックエンジニアになりたいと思います。<br />
          また、自分はフォローをするのが好きで仲間が困ったことがあったら助けたい・力になりたいと思っています。<br />
          悩み事などがあったらいつでもご相談ください。<br />
          一生懸命夢に向かって頑張ってる人に積極的にサポートします。
        </p>
      </article>
      <article className="p-about__profile">
        <figure>
          <img src="/images/profile.jpg" width="200px" height="200px"/>
        </figure>
        <div className="about__profile__lesson">
        </div>
        <div className="about__profile__lessondetail">
          <p>
          2021年に公開した個人のポートフォリオサイト「Ustack(ユースタック)」<br /><br />
          Ustack(ユースタック)は 自分のイニシャルとフルスタックエンジニアを組み合わせた造語です。<br /><br />
          フロントエンド・サーバーサイド・インフラなど様々なスキルを身につけ、フルスタックエンジニアになることを目指し日々努力しています。
          </p>
        </div>
      </article>
      <div className="p-about__profile__bg"></div>
    </section>
  )
}