import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Modal from 'react-modal'

Modal.setAppElement("#p-contact");

const Contacts = () => {

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");


  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {

  let ContactConfirm  = document.getElementsByClassName( 'c-contact-form__form' ),
      alert_txt       = document.getElementsByClassName( 'alert-warning' ),
      alert_txt_inner = document.getElementsByClassName( 'alert_inner_txt' ),
      conf_name       = document.getElementsByClassName( 'confirm-name' ),
      conf_mail       = document.getElementsByClassName( 'confirm-mail' ),
      conf_ttl        = document.getElementsByClassName( 'confirm-title' ),
      conf_body       = document.getElementsByClassName( 'confirm-body' );
      
      // エラーチェック
      console.log(alert_txt);
      if( alert_txt != undefined ) {
        alert_txt[0].remove();
      }
      let alert_html = "<div ClassName='alert alert-warning'>"
      if( name == "" ) {
        alert_html += "<p ClassName='alert'>名前を入力してください。</p>";
      }
      if( email == "" ) {
        alert_html += "<p ClassName='alert_inner_txt'>メールアドレスを入力してください</p>";
      }
      if( title == "" ) {
        alert_html += "<p ClassName='alert_inner_txt'>タイトルを入力してください</p>";
      }
      if( body == "" ) {
        alert_html += "<p ClassName='alert_inner_txt'>本文を入力してください</p>";
      }
      alert_html += "</div>";

      ContactConfirm[0]
        .insertAdjacentHTML(
          'afterbegin', alert_html
        );

      // エラーがない場合はモーダルを表示する
      if( alert_txt_inner.length == 0 ) {
        setIsOpen(true);
      }
  }
  function afterOpenModal() {        
  }
  function closeModal(){
      setIsOpen(false);
  }
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
      url: "https://uemura5683.microcms.io/api/v1/contact",
      data: data,
      headers: {
        "Content-Type": "application/json",
        "X-WRITE-API-KEY": "e4f670a9-c5f8-4b37-b85c-420c00c33675"
      }
    })
    .then(() => {
      // router.push("/success");
    })
    .catch(err => {
      console.log(err);
    });
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

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>close</button>          
          <div className="skill__zoom_modal">
            <div className="c-contact-form__confirm">
              <div className="c-contact-form__confirm_txt">内容をご確認の上、よろしければ「送信する」ボタンをクリックしてください。</div>
              <table className="table">
                <tbody>
                  <tr><th>お名前</th><td className="confirm-name"></td></tr> 
                  <tr><th>メールアドレス</th><td className="confirm-mail"></td></tr>
                  <tr><th>お問い合わせ内容</th><td className="confirm-title"></td></tr>
                  <tr><th>お問い合わせ詳細</th><td className="confirm-body"></td></tr>
                  </tbody>
                </table>
              <button className="btn-white" type="submit" onClick={handleSubmit}>メールアドレスを送信</button>
            </div>
          </div>          
        </Modal>

        <div className="c-btn-area">
          <button className="btn-white" onClick={openModal}>
            メールアドレスを送信
          </button>
        </div>
      </form>
    </div>
  )
};

export default Contacts;
