export default function Contact() {
  return (
    <div className="c-contact-form__inner">
      <p className="c-contact-form__txt">どんな些細でもいいですので気軽にお問い合わせください！<br></br><a href="https://twitter.com/uemuragame5683" target="_blank">Twitter</a>でも受け付けております。</p>
      <form
        action="https://api.staticforms.xyz/submit"
        method="post"
        onSubmit="">
        <div className="c-contact-form__content">
          <label>あなたの名前</label>
            <input
              type="text"
              placeholder="名前を入力してください"
              id="form_name"
              name="name"
              onChange=""
              required
            />
        </div>
        <div className="c-contact-form__content">
          <label>メールアドレス</label>
            <input
              type="email"
              placeholder="メールアドレスを入力してください"
              id="form_email"
              name="mail_address"
              onChange=""
              required
            />
        </div>
        <div className="c-contact-form__content">
          <label>お問い合わせ内容</label>
            <input
              type="text"
              placeholder="タイトルを入力してください"
              id="form_title"
              name="title"
              onChange=""
              required
            />
        </div>
        <div className="c-contact-form__content">
          <label>お問い合わせ詳細</label>
          <div>
            <textarea
              placeholder="本文を入力してください"
              type="text"
              name="body"
              onChange=""
              required
            />
          </div>
        </div>
        <div className="c-btn-area">
          <button className="btn-white" type="submit">メールアドレスを送信</button>
        </div>
      </form>
    </div>
  )
}