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
          <img src="/images/profile.jpg" />
        </figure>
        <div className="about__profile__lesson">
          目指せ、なんでもできるエンジニアへ
        </div>
        <div className="about__profile__lessondetail">
          <p>
          2021年に公開した個人のポートフォリオサイト「NU-stack(ヌースタック)」<br></br>
          </p>
        </div>
      </article>
      <div className="p-about__profile__bg"></div>
    </section>
  )
}