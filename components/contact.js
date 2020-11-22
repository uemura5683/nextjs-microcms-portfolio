export default function Contact() {
  return (
    <div class="c-contact-form__inner">
      <p class="c-contact-form__txt">どんな些細でもいいですので気軽にお問い合わせください！<a href="https://twitter.com/uemuragame5683" target="_blank">Twitter</a>でも受け付けております。</p>
      <form
        action="https://api.staticforms.xyz/submit"
        method="post"
        onSubmit="">
        <div class="c-contact-form__content">
          <label>あなたの名前</label>
            <input
              type="text"
              placeholder="お名前"
              name="name"
              onChange=""
              required
            />
        </div>
        <div class="c-contact-form__content">
          <label>メールアドレス</label>
            <input
              type="email"
              placeholder="メールアドレス"
              name="email"
              onChange=""
              required
            />
        </div>
        <div class="c-contact-form__content">
          <label>メッセージ</label>
          <div>
            <textarea
              placeholder="Your Message"
              name="message"
              onChange=""
              required
            />
          </div>
        </div>
        <div class="c-btn-area">
          <button class="btn-white" type="submit">メールアドレスを送信</button>
        </div>
      </form>
    </div>
  )
}