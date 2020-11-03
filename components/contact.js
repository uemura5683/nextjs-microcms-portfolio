export default function Contact({}) {
  return (
    <div>
      <div>
        <h2>お問い合わせフォーム</h2>
        <form
          action="https://api.staticforms.xyz/submit"
          method="post"
          onSubmit="">
          <div className="field">
            <label>あなたの名前</label>
            <div>
              <input
                type="text"
                placeholder="お名前"
                name="name"
                onChange=""
                required
              />
            </div>
          </div>
          <div>
            <label>メールアドレス</label>
            <div>
              <input
                type="email"
                placeholder="メールアドレス"
                name="email"
                onChange=""
                required
              />
            </div>
          </div>
          <div style={{display: 'none'}}>
            <label className="label">Title</label>
            <div className="control">
              <input
                type="text"
                name="honeypot"
                style={{display: 'none'}}
                onChange=""
              />
              <input type="hidden" name="subject" onChange="" />
            </div>
          </div>
          <div>
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
          <button type="submit">メールアドレスを送信</button>
        </form>
      </div>
    </div>
  )
}