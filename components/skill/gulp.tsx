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
      <li className="skill__zoom gulp">
        <button onClick={openModal}>
          <img
            src="/images/skill/skill_gulp.png"
            alt="gulp logo"
          />
          <div className="gage"></div>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>gulp</h2>
          <button onClick={closeModal}>close</button>          
          <div className="skill__zoom_modal">
            <img
              src="/images/skill/skill_gulp.png"
              alt="gulp logo"
            />
            <div className="skill__zoom_modal_description">
              <p className="skill_level">40% ノービス</p>
              <p className="skill_experience">3年以上</p>
              <p className="skill_detail">
                gulpはSCSS・Ejs・minify・スプライト化・pug/phpなどのhtml化などのタスクを自動化してくれるJavascriptツールキットです。<br />
                自分はSCSS・Pugの言語で実装する時によく用いります。<br />
                gulpを利用する際はNode.js・npm・gulpの順でインストールし、gulpfile.jsを生成する必要があります。<br />
              </p>
              <p className="skill_site"></p>
            </div>
          </div>          
        </Modal>
    </li>
  );
}
export default SkillContent;