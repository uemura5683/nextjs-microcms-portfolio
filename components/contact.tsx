import axios from "axios";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Complete from '../components/complete';
import ContactError from '../components/contacterror';

const Contacts = () => {

  // 初期設定
  const router = useRouter()
      , [email, setEmail] = useState("")
      , [name, setName]   = useState("")
      , [title, setTitle] = useState("")
      , [body, setBody]   = useState("")
      , [modalIsOpen,setIsOpen] = React.useState(false);
      function closeModal(){ setIsOpen(false); }

  // お問い合わせ入力の処理
  // 入力漏れの場合はエラー文言を出力し
  // 全て入力した場合はお問いあわせ内容確認のモーダルを出力
  const handleSubmit = e => {
    e.preventDefault();
    const AlertTxt        = document.getElementsByClassName( 'alert-warning' )
        , AlertInner      = document.getElementsByClassName( 'alert_inner_txt' )
        , ContactElement: Element = document.getElementById( 'p-contact' )
        , ContactPosition: number = ContactElement.getBoundingClientRect().top
        , currentPosition: number = window.pageYOffset
        , targetPosition: number = ContactPosition + currentPosition;
        
    if( name == "" || email == "" || title == "" || body == "" ) {
      const error_data = { email: email, name: name, title: title, body: body };
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
      return ReactDOM.render(
        <ContactError error_data = {error_data} />,
        AlertTxt[0]
      );
    } else{
      if( AlertInner.length > 0 ) {
        ReactDOM.unmountComponentAtNode(AlertTxt[0]);
      }
      openModal();
    }
    function openModal() {
      setIsOpen(true);
    }
    function closeModal(){
      setIsOpen(false);
    }
  };

  // お問いあわせ内容確認のDOM生成
  useEffect(() => {
    ReactDOM.render(
      <React.StrictMode>
          <ModalConfirm
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
          />
      </React.StrictMode>,
      document.getElementById("modalArea")
    );
  });

  function ModalConfirm(props) {
    const data = {
      email: email,
      name: name,
      title: title,
      body: body
    };
    if(props.isOpen == true) {      
      return (
        <>
          <div className="c-contact__conform">
            <div className="c-contact__conform_inner">
              <p className="contact__confirm-txt">入力内容が正しければ「送信する」をクリックしてください。</p>
              <table className="table table-striped">
                <tbody>
                  <tr><th>お名前</th><td>{data.name}</td></tr>
                  <tr><th>メールアドレス</th><td>{data.email}</td></tr>
                  <tr><th>お問い合わせの内容</th><td>{data.title}</td></tr>
                  <tr className="borderline"><th>お問い合わせ詳細</th><td>{data.body}</td></tr>
                </tbody>
              </table>
              <div className="c-btn-area">
                <button
                  className="btn-white form-submit"
                  type="submit"
                  onClick={FormSubmit}
                >
                  送信する
                </button>
              </div>
            </div>
            <button onClick={closeModal}>close</button> 
          </div>
          <div className="contact__form__bg" onClick={closeModal}></div>
        </>
      )
    } else {
      return null;
    }
  }

  // お問いあわせ内容確認を送信した時のイベント処理
  const FormSubmit = async e => {
    e.preventDefault();
    const datas = { email: email, name: name, title: title, body: body };
    axios({
      method: "post",
      url: "https://uemura5683.microcms.io/api/v1/contact",
      data: datas,
      headers: {
        "Content-Type": "application/json",
        "X-WRITE-API-KEY": process.env.NU_POST_API_KEY
      }
    })
    .then(() => {
      const contact_form = document.getElementsByClassName("c-contact__conform");
      const contact_form_inner = document.getElementsByClassName("c-contact__conform_inner");
      const complete_cont = ReactDOMServer.renderToStaticMarkup(<Complete />);
      contact_form_inner[0].remove();
      contact_form[0].insertAdjacentHTML(
        'afterbegin', complete_cont
      );
    })
    .catch(err => {
      console.log(err);
    });
    await axios( {
      method: "POST",
      url:'/api/send',
      data: datas,
      headers: {
        'Content-Type': 'application/json'
      },
    } ).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err)
    })
  }
  
  return (
    <>
    <div className="c-contact-form__inner">
      <p className="c-contact-form__txt">
        どんな些細でもいいですので気軽にお問い合わせください。<br/>
        <a href="https://twitter.com/uemuragame5683" target="_blank">Twitter</a>でも受け付けております。
      </p>
      <div className="alert alert-warning"></div>
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
          <textarea
            placeholder="本文を入力してください"
            name="body"
            value={body}
            onChange={e => setBody(e.target.value)}
            required
          />
        </div>
        <div className="c-btn-area">
          <button className="btn-black" type="submit" onClick={handleSubmit}>送信内容を確認する</button>
        </div>
      </form>
    </div>
    </>
  )
};

export default Contacts;
