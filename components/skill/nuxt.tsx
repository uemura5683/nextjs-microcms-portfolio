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
      <li className="skill__zoom nuxt">
        <button onClick={openModal}>
          <img src="/images/skill/skill_nuxt.png"></img>
          <div className="gage"></div>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Nuxt.js</h2>
          <button onClick={closeModal}>close</button>          
          <div className="skill__zoom_modal">
            <img src="/images/skill/skill_nuxt.png"></img>
            <div className="skill__zoom_modal_description">
              <p className="skill_level">50% ミドル</p>
              <p className="skill_experience">1年以上</p>
              <p className="skill_detail">
                Nuxt.jsはVueの公式ガイドラインに沿って強力なアーキテクチャを提供するように作られたアーキテクチャです。<br></br>機能はたくさんあり、サーバーサイドレンダリング・JS / CSS ミニファイ化・ プリプロセッサ・モジュール構造で拡張できるなどいろんな機能があります。<br></br>成果物<br></br><a href="http://nu-blogsite.net/" target="_blank">Nu-Blog</a>
              </p>
              <p className="skill_site"></p>
            </div>
          </div>          
        </Modal>
    </li>
  );
}
export default SkillContent;