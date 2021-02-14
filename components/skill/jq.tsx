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
      <li className="skill__zoom jq">
        <button onClick={openModal}>
          <img
            src="/images/skill/skill_jq.png"
            alt="jQuery logo"
          />
          <div className="gage"></div>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>jQuery</h2>
          <button onClick={closeModal}>close</button>          
          <div className="skill__zoom_modal">
            <img
              src="/images/skill/skill_jq.png"
              alt="jQuery logo"
            />
            <div className="skill__zoom_modal_description">
              <p className="skill_level">80% エキスパート</p>
              <p className="skill_experience">5年以上</p>
              <p className="skill_detail">
                jQueryはJavascriptコードをより簡潔に記述ができるようにするために設計されたJavascriptライブラリーです。<br />
                jQueryにはハンバーガーメニュー・アコーディオンなどのアニメーションを簡単に実装できる便利なメソッドが用意されています。<br />
                アニメーションを実装するにはjQueryを適用することを推奨します、<br />
                成果物<br />
                <a href="https://takarabako.theshop.jp/" target="_blank">タカラバコ ECサイト</a><br />
                <a href="https://takarabako.tokyo/" target="_blank">タカラバコ CPサイト</a><br />
                アパレルブランドサイト 多数
              </p>
              <p className="skill_site"></p>
            </div>
          </div>          
        </Modal>
    </li>
  );
}
export default SkillContent;