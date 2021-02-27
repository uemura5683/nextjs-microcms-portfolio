import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useHistory } from "react-router";

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
        conf_cont       = document.getElementsByClassName( 'skill__zoom_modal-block' );

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
      openModal();
    }
    function openModal() {
      setIsOpen(true);
    }
    function afterOpenModal() {        
        subtitle.style.color = '#333333';
    }
    function closeModal(){
        setIsOpen(false);
    }
  };

  function Modal(props) {
    const data = {
      email: email,
      name: name,
      title: title,
      body: body
    };
    if(props.isOpen == true) {      
      return (
        <>
        <motion.div
        animate={{
          x: 0,
          opacity: 1
        }}
        initial={{
          x: 0,
          opacity: 0
        }}
        exit={{
          x: 0,
          opacity: 0
        }}
        transition={{
          duration: 0.5
        }}
        >
        <div className="contact__form">
          <p className="contact__confirm">入力内容が正しければ「送信する」をクリックしてください。</p>
          <table className="table table-striped">
            <tbody>
            <tr>
              <th>お名前</th>
              <td>{data.name}</td>
            </tr>
            <tr>
              <th>メールアドレス</th>
              <td>{data.email}</td>
            </tr>
            <tr>
              <th>お問い合わせの内容</th>
              <td>{data.title}</td>
            </tr>
            <tr className="borderline">
              <th>お問い合わせ詳細</th>
              <td>{data.body}</td>
            </tr>
            </tbody>
          </table>
          <div className="c-btn-area">
            <button className="btn-white form-submit" type="submit" onClick={FormSubmit}>送信する</button>
          </div>
          <button onClick={closeModal}>close</button> 
        </div>  
        </motion.div>    
        </>
      )
    } else {
      return null;
    }
  }

  const FormSubmit = e => {
    let getbody = document.body;
    const datas = {
      email: email,
      name: name,
      title: title,
      body: body
    };
    axios({
      method: "post",
      url: "https://uemura5683.microcms.io/api/v1/contact",
      data: datas,
      headers: {
        "Content-Type": "application/json",
        "X-WRITE-API-KEY": "e4f670a9-c5f8-4b37-b85c-420c00c33675"
      }
    })
    .then(() => {
      function CompModal() {
        return (
          <>
            <motion.div
              animate={{
                x: 0,
                opacity: 1
              }}
              initial={{
                x: 0,
                opacity: 0
              }}
              exit={{
                x: 0,
                opacity: 0
              }}
              transition={{
                duration: 0.5
            }}>
              <div className='alert alert-warning'>
                <div className='alert alert-warning c-contact__complete'>
                  <p>この度はお問い合わせメールをお送りいただきありがとうございます。<br />
                  今しばらくお待ちくださいますようよろしくお願い申し上げます。<br />
                  なお、しばらくたっても返信、返答がない場合は、<br />
                  お客様によりご入力いただいたメールアドレスに誤りがある場合がございます。<br />
                  その際は、お手数ですが再度お問い合わせいただけますと幸いです。<br />
                  5秒後にリロードします。
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        ) 
      }
      let countup = function() {
        location.reload();
      }
      setTimeout(countup, 5000);
    })
    .catch(err => {
      console.log(err);
    });
  }

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
              placeholder="本文を入力してください"
              name="body"
              value={body}
              onChange={e => setBody(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="c-btn-area">
          <button className="btn-white" type="submit" onClick={handleSubmit}>送信内容を確認する</button>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
       />
      </form>
    </div>
  )
};

export default Contacts;
