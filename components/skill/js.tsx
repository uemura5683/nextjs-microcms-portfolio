import React from 'react';
import Modal from 'react-modal'

Modal.setAppElement("#p-skill");

const SkillContent = () => {
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
      setIsOpen(true);
  }
  function afterOpenModal() {        
      subtitle.style.color = '#333333';
  }
  function closeModal(){
      setIsOpen(false);
  }
  return (    
      <li className="skill__zoom js">
        <button onClick={openModal}>
          <img
            src="/images/skill/skill_js.png"
            alt="Javascript logo"
          />
          <div className="gage"></div>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Javascript</h2>
          <button onClick={closeModal}>close</button>          
          <div className="skill__zoom_modal">
            <img
              src="/images/skill/skill_js.png"
              alt="Javascript logo"
            />
            <div className="skill__zoom_modal_description">
              <p className="skill_level">80% マスター</p>
              <p className="skill_experience">5年以上</p>
              <p className="skill_detail">
                JavascriptはWebページをコンテンツをアニメーション・拡大表示・アコーディオンさせたり、フォームに文字列を入力し送信できたりできます。<br />
                Javascriptは様々なバリエーションがあり、jQuery・Vue.jsなどのフレームワークやGulpなどのツールキット、3Dアニメーションを実現できるthree.jsなどもあり、開発者が学びたい言語トップ10に入る程ものすごい人気のある言語です。<br />
                <br />
                成果物<br />
                <a href="https://takarabako.theshop.jp/" target="_blank">タカラバコ ECサイト</a><br />
                <a href="https://takarabako.tokyo/" target="_blank">タカラバコ CPサイト</a><br />
                <a href="https://nu-blogsite.net/" target="_blank">うえむーブログ</a><br />
                <a href="https://codepen.io/uemuragame5683/pen/YzWGEKv" target="_blank">Codepen Three.js</a><br />
                アパレルブランドサイト<br />
                サードパーティツール導入<br />
                Google Analyticsタグ実装 多数
              </p>
              <p className="skill_site"></p>
            </div>
          </div>          
        </Modal>
    </li>
  );
}
export default SkillContent;