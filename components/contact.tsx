import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Contacts = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      email: email,
      name: name,
      title: title,
      body: body
    };

    axios({
      method: "post",
      url: "https://uemura5683.microcms.io/api/v1/contacts",
      data: data,
      headers: {
        "Content-Type": "application/json",
        "X-WRITE-API-KEY": "e4f670a9-c5f8-4b37-b85c-420c00c33675"
      }
    })
      .then(() => {
        router.push("/success");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="c-contact-form__inner">
      <p className="c-contact-form__txt">どんな些細でもいいですので気軽にお問い合わせください！<br></br><a href="https://twitter.com/uemuragame5683" target="_blank">Twitter</a>でも受け付けております。</p>
      <form>
        <div className="c-contact-form__content">
          <label>あなたの名前</label>
            <input
              type="text"
              placeholder="名前を入力してください"
              id="name"
              name="name"
              value={name}
              onChange={e => setEmail(e.target.value)}
              required
            />
        </div>
        <div className="c-contact-form__content">
          <label>メールアドレス</label>
            <input
              type="email"
              placeholder="メールアドレスを入力してください"
              id="email"
              name="email"
              value={email}
              onChange={e => setName(e.target.value)}
              required
            />
        </div>
        <div className="c-contact-form__content">
          <label>お問い合わせ内容</label>
            <input
              type="text"
              placeholder="タイトルを入力してください"
              id="title"
              name="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
        </div>
        <div className="c-contact-form__content">
          <label>お問い合わせ詳細</label>
          <div>
            <textarea
              type="text"
              placeholder="本文を入力してください"
              name="body"
              value={body}
              onChange={e => setBody(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="c-btn-area">
          <button className="btn-white" type="submit" onClick={handleSubmit}>メールアドレスを送信</button>
        </div>
      </form>
    </div>
  )
};

export default Contacts;
