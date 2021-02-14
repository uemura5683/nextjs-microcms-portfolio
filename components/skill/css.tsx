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
      <li className="skill__zoom css">
        <button onClick={openModal}>
          <img
            src="/images/skill/skill_css.png" 
            alt="CSS logo"
          />
          <div className="gage"></div>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>CSS</h2>
          <button onClick={closeModal}>close</button>          
          <div className="skill__zoom_modal">
            <img
              src="/images/skill/skill_css.png" 
              alt="CSS logo"
            />
            <div className="skill__zoom_modal_description">
              <p className="skill_level">90% マスター</p>
              <p className="skill_experience">5年以上</p>
              <p className="skill_detail">
                cssは「Cascading Style Sheets」の略であり、Webページをどのように装飾するかを調整する為の言語であり、パソコンスクールで学んだ言語です。<br />
                cssを学んでいく上で難しいのはCSS設計・レスポンシブ対応です。<br />
                最初の頃は不慣れで時間が滞ることもありますが、トライアンドエラーを繰り替えすことで結構上達しますので、諦めずに頑張ってください。<br />
                <br />
                <br />成果物<br /><a href="https://takarabako.theshop.jp/" target="_blank">タカラバコ ECサイト</a>
                           <br /><a href="https://takarabako.tokyo/" target="_blank">タカラバコ CPサイト</a>
                           <br />アパレルブランドサイト 何件か
              </p>
              <p className="skill_site"></p>
            </div>
          </div>          
        </Modal>
    </li>
  );
}
export default SkillContent;