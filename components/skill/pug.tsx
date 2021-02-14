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
      <li className="skill__zoom pug">
        <button onClick={openModal}>
          <img src="/images/skill/skill_pug.png"
          />
          <div className="gage"></div>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>pug</h2>
          <button onClick={closeModal}>close</button>          
          <div className="skill__zoom_modal">
            <img
              src="/images/skill/skill_pug.png"
              alt="pug logo"
            />
            <div className="skill__zoom_modal_description">
              <p className="skill_level">50% ミドル</p>
              <p className="skill_experience">1年未満</p>
              <p className="skill_detail">
                pugはHTMLを効率よくコーディングする為のテンプレートエンジンです。SCSSと似てコンパイルが必要になります。<br />
                共通パーツ(ヘッダー・フッター)付きの3ページ以上をコーディングをする時とか、同じコンポーネントを3桁以上コーディングしなければいけない時に適した言語です。<br />
                成果物<br />
                <a href="https://codepen.io/uemuragame5683" target="_blank">CODEPEN</a>
              </p>
              <p className="skill_site"></p>
            </div>
          </div>          
        </Modal>
    </li>
  );
}
export default SkillContent;