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
      subtitle.style.color = '#000000';
  }
  function closeModal(){
      setIsOpen(false);
  }
  return (    
      <li className="skill__zoom figma">
        <button onClick={openModal}>
          <img src="/images/skill/skill_figma.png"></img>
          <div className="gage"></div>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Figma</h2>
          <button onClick={closeModal}>close</button>          
          <div className="skill__zoom_modal">
            <img src="/images/skill/skill_figma.png"></img>
            <div className="skill__zoom_modal_description">
              <p className="skill_level">55% ミドル</p>
              <p className="skill_experience">5年以上</p>
              <p className="skill_detail">
                figmaは世界で一番使用率が高いCMSである。初学者や未エンジニアでも適用できます。<br></br>
                PHPで開発されており、データベース管理(MySQL)を利用しております。<br></br>
                <br></br>実装したサイト<br></br><a href="https://takarabako.tokyo/">タカラバコ</a>
              </p>
              <p className="skill_site"></p>
            </div>
          </div>          
        </Modal>
    </li>
  );
}
export default SkillContent;