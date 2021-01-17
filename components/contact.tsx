import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";


const Contacts = () => {

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function afterOpenModal() {        
  }
  function closeModal(){
      setIsOpen(false);
  }
  const handleSubmit = e => {
    e.preventDefault();

    let ContactConfirm  = document.getElementsByClassName( 'c-contact-form__form' ),
        alert_txt       = document.getElementsByClassName( 'alert-warning' ),
        alert_txt_inner = document.getElementsByClassName( 'alert_inner_txt' ),
        conf_cont       = document.getElementsByClassName( 'skill__zoom_modal-block' ),
        getbody         = document.body

    // エラーチェック
    if( alert_txt[0] != undefined ) {
      alert_txt[0].remove();
    }
    if( name == "" || email == "" || title == "" || body == "" ) {
      let alert_html = "<div class='alert alert-warning'>"
      if( name == "" ) {
        alert_html += "<p class='alert_inner_txt'>名前を入力してください。</p>";
      }
      if( email == "" ) {
        alert_html += "<p class='alert_inner_txt'>メールアドレスを入力してください</p>";
      }
      if( title == "" ) {
        alert_html += "<p class='alert_inner_txt'>タイトルを入力してください</p>";
      }
      if( body == "" ) {
        alert_html += "<p class='alert_inner_txt'>本文を入力してください</p>";
      }
      alert_html += "</div>";

      ContactConfirm[0]
      .insertAdjacentHTML(
        'afterbegin', alert_html
      );

    }

    // エラーがない場合はモーダルを表示する
    if( alert_txt_inner.length == 0 ) {
      FormSubmit();
    }

    function FormSubmit() {
      const data = {
        email: email,
        name: name,
        title: title,
        body: body
      };
      axios({
        method: "post",
        url: "https://uemura5683.microcms.io/api/v1/contact",
        data: data,
        headers: {
          "Content-Type": "application/json",
          "X-WRITE-API-KEY": "e4f670a9-c5f8-4b37-b85c-420c00c33675"
        }
      })
      .then(() => {

        let alert_html = "<div class='alert alert-warning c-contact__complete'><p>ありがとうございました。お問い合わせ完了しました。<br>5秒後にリロードします。</p></div>";

        getbody
        .insertAdjacentHTML(
          'afterbegin', alert_html
        );

        // router.push("/success");git 
        let countup = function() {
          location.reload();
        }
        setTimeout(countup, 5000);
      })
      .catch(err => {
        console.log(err);
      });
    }

  };
  return (
    <div className="c-contact-form__inner">
      <p className="c-contact-form__txt">どんな些細でもいいですので気軽にお問い合わせください！<br></br><a href="https://twitter.com/uemuragame5683" target="_blank">Twitter</a>でも受け付けております。</p>
      <form className="c-contact-form__form">
        <div className="c-contact-form__content">
          <label>あなたの名前</label>
            <input
              type="text"
              placeholder="名前を入力してください"
              id="name"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
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
              onChange={e => setEmail(e.target.value)}
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
