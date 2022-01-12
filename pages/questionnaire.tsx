import Head from 'next/head'
import Layout from '../components/framework/layout'
import { motion } from "framer-motion";
import axios from "axios";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ContactError from '../components/questionnaire/contacterror';
import Complete from '../components/questionnaire/complete';

/**
 * export
 */
 const questionnaire = () => {

  // 初期設定
  const router = useRouter()
      , [email, setEmail]   = useState("")
      , [name, setName]     = useState("")
      , [select, setSelect] = useState("")
      , [body, setBody]     = useState("")
      , [modalIsOpen,setIsOpen] = React.useState(false);
      function closeModal(){ setIsOpen(false); }

  const handleSubmit = e => {
    e.preventDefault();
    const AlertTxt                     = document.getElementsByClassName( 'alert-warning' )
        , AlertInner                   = document.getElementsByClassName( 'alert_inner_txt' )
        , questionnaireElement: Element = document.getElementById( 'p-questionnaire' )
        , questionnairePosition: number = questionnaireElement.getBoundingClientRect().top
        , currentPosition: number      = window.pageYOffset
        , targetPosition: number       = questionnairePosition + currentPosition;
        
    if( name == "" || email == "" || select == "" || body == "" ) {
      const error_data = { email: email, name: name, select: select, body: body };
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
      select: select,
      body: body
    };
    if(props.isOpen == true) {      
      return (
        <>
          <div className="c-questionnaire__conform">
            <div className="c-questionnaire__conform_inner">
              <p className="questionnaire__confirm-txt">入力内容が正しければ「送信する」をクリックしてください。</p>
              <table className="table table-striped">
                <tbody>
                  <tr><th>お名前</th><td>{data.name}</td></tr>
                  <tr><th>メールアドレス</th><td>{data.email}</td></tr>
                  <tr><th>満足度</th><td>{data.select}</td></tr>
                  <tr className="borderline"><th>コメント</th><td>{data.body}</td></tr>
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
          <div className="questionnaire__form__bg" onClick={closeModal}></div>
        </>
      )
    } else {
      return null;
    }
  }

  // お問いあわせ内容確認を送信した時のイベント処理
  const FormSubmit = async e => {
    e.preventDefault();
    const datas = { email: email, name: name, body: body };
    axios({
      method: "post",
      url: "https://uemura5683.microcms.io/api/v1/questionnaire",
      data: datas,
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": process.env.NU_POST_API_KEY
      }
    })
    .then(() => {
      const questionnaire_form = document.getElementsByClassName("c-questionnaire__conform");
      const questionnaire_form_inner = document.getElementsByClassName("c-questionnaire__conform_inner");
      const complete_cont = ReactDOMServer.renderToStaticMarkup(<Complete />);
      questionnaire_form_inner[0].remove();
      questionnaire_form[0].insertAdjacentHTML(
        'afterbegin', complete_cont
      );
    })
    .catch(err => {
      console.log(err);
    });
  }
  return (
    <>
    <Layout>
      <Head>
        <title>アンケートページ</title>
        <link href="/style/questionnaire.css" rel="stylesheet" />
      </Head>
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 0, opacity: 0 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section id="p-questionnaire">
          <h2 className="c-title white">アンケート</h2>
          <div className="c-questionnaire_form__inner">
            <div className="alert alert-warning"></div>
            <form className="c-questionnaire_form__form">
              <div className="c-questionnaire_form__content">
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
              <div className="c-questionnaire_form__content">
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
              <div className="c-questionnaire_form__content">
                <label>満足度</label>
                <select
                  id="select"
                  name="select"
                  className="c-questionnaire_select"
                  onChange={e => setSelect(e.target.value)}
                  required
                >
                  <option value="">選択してください</option>
                  <option value="CdQKvtWC9H">１</option>
                  <option value="Q8EJkYwywp">２</option>
                  <option value="eziqdD_xlf">３</option>
                  <option value="o3ibOmgsWM">４</option>
                  <option value="M2z3xliVDt">５</option>
                </select>
              </div>
              <div className="c-questionnaire_form__content">
                <label>コメント</label>
                <textarea
                  placeholder="コメントを入力してください"
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
        </section>
        <div className="bgimage"></div>
      </motion.div>
    </Layout>
    </>
  )
};

export default questionnaire;