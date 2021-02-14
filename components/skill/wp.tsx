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
      <li className="skill__zoom wp">
        <button onClick={openModal}>
          <img src="/images/skill/skill_wp.png"></img>
          <div className="gage"></div>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Word Press</h2>
          <button onClick={closeModal}>close</button>          
          <div className="skill__zoom_modal">
            <img src="/images/skill/skill_wp.png"></img>
            <div className="skill__zoom_modal_description">
              <p className="skill_level">60% ミドル</p>
              <p className="skill_experience">3年以上</p>
              <p className="skill_detail">
                Word PressはCMSの一つでであり、初学者や未エンジニアでも無料でダウンロードできて適用できます。<br></br>
                また、お名前.com / Xserverなどのドメイン会社を契約すればサーバー・ドメイン・WPで一気にインストール・有効になりすぐに使えるようになり、世界で一番使用率が高いCMSです。<br></br>
                Word PressはPHPで開発されており、データベース管理(MySQL)を利用しております。<br></br>
                <br></br>成果物<br></br><a href="https://takarabako.tokyo/">タカラバコ</a>
                              <br></br>実家の自営業(製作中)
              </p>
              <p className="skill_site"></p>
            </div>
          </div>
        </Modal>
    </li>
  );
}
export default SkillContent;