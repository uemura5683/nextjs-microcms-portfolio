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
      <li className="skill__zoom php">
        <button onClick={openModal}>
          <img
            src="/images/skill/skill_php.png"
            alt="php　ロゴ"
          />
          <div className="gage"></div>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>PHP</h2>
          <button onClick={closeModal}>close</button>          
          <div className="skill__zoom_modal">
            <img
              src="/images/skill/skill_php.png"
              alt="php　ロゴ"
            />
            <div className="skill__zoom_modal_description">
              <p className="skill_level">80% エキスパート</p>
              <p className="skill_experience">5年以上</p>
              <p className="skill_detail">
                phpは「Hypertext Preprocessor」を略したサーバーサイド言語であり、私が3番目に学んだ言語でありhtml/cssとは全く異なった記述なので結構苦労した覚えはあります。<br />
                phpの特徴はhtml/cssも同時にコーディングすることも可能です。php「symfony・lavabel」は様々なフレームワークがあり、wordpressという世界的に利用されているCMSもphpから作成されております。<br />
                <br/><span>成果物</span>アパレルブランドサイト 多数
                <br />大手受託案件 モック作成
              </p>
              <p className="skill_site"></p>
            </div>
          </div>          
        </Modal>
    </li>
  );
}
export default SkillContent;