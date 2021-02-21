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
          <li><span>趣味</span>麻雀・ボードゲーム・ゴルフ・ビートボックス</li>
          <li><span>リンク</span><a href="https://twitter.com/uemuragame5683" target="_blank">Twitter</a> / <a href="https://github.com/uemura5683" target="_blank">GitHub</a> / <a href="https://nu-blogsite.net/" target="_blank">Nu-Blog</a></li>
        </ul>
        <p className="p-about__profile--description">
          こんにちは、うえむーです！<br /><br />
          都内でフロントエンドエンジニアとして活動しています。<br /><br />
          休日はもくもく会・LT大会に積極的に参加して他のエンジニアさんと交流を積極的に深めたりしてます。<br /><br />
          エンジニアとしていろんな言語・ビジネススキルを身につけ日々精進し、<br />
          仲間が困ったことがあったら、助けたい・力になりたいと思っています。<br /><br />
          悩み事などがあったらいつでもご相談ください。<br /><br />
          一生懸命夢に向かって頑張ってる人に積極的にサポートします。
        </p>
      </article>
      <article className="p-about__profile">
        <figure>
          <img src="/images/profile.jpg" />
        </figure>
        <div className="about__profile__lesson">
        </div>
        <div className="about__profile__lessondetail">
          <p>
          2021年に公開した個人のポートフォリオサイト「NU-stack(ヌースタック)」<br /><br />
          NU-stack(ヌースタック)は 自分のイニシャルとフルスタックエンジニアを組み合わせたサイト名です。<br /><br />
          フロントエンド・サーバーサイド・インフラなど様々なスキルを身につけ、最終的にはフルスタックエンジニアになることを目指し日々努力しています。
          </p>
        </div>
      </article>
      <div className="p-about__profile__bg"></div>
    </section>
  )
}