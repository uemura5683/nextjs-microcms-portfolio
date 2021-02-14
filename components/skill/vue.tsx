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
      <li className="skill__zoom vue">
        <button onClick={openModal}>
          <img
            src="/images/skill/skill_vue.png"
            alt="Vue.js logo"
          />
          <div className="gage"></div>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Vue.js</h2>
          <button onClick={closeModal}>close</button>          
          <div className="skill__zoom_modal">
            <img
              src="/images/skill/skill_vue.png"
              alt="Vue.js logo"
            />
            <div className="skill__zoom_modal_description">
              <p className="skill_level">50% ミドル</p>
              <p className="skill_experience">1年以上</p>
              <p className="skill_detail">
                vueはEvan You氏が開発したJavascriptのフレームワークである。デザイナーが「親しみやすい」作りとなっており、UI/UXを高める機能(アニメーション)が容易に導入できます。
                <br />
                <br />成果物
                <br /><a href="http://nu-blogsite.net/">Nu-blog</a>
                <br />アパレルブランドサイトの一部(カウントダウン機能を追加) etc...
              </p>
              <p className="skill_site"></p>
            </div>
          </div>          
        </Modal>
    </li>
  );
}
export default SkillContent;