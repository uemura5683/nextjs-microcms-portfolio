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
      <li className="skill__zoom mt">
        <button onClick={openModal}>
          <img
            src="/images/skill/skill_mt.png"
            alt="Movable type logo"
          />
          <div className="gage"></div>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Movable Type</h2>
          <button onClick={closeModal}>close</button>          
          <div className="skill__zoom_modal">
            <img
              src="/images/skill/skill_mt.png"
              alt="Movable type logo"
            />
            <div className="skill__zoom_modal_description">
              <p className="skill_level">50% ミドル</p>
              <p className="skill_experience">3年以上</p>
              <p className="skill_detail">
                Movable Typeは日本の企業シックス・アパート社が開発・提供したCMSであります。このCMSの特徴はWordPressのようにデータベースを参照にしてphpで動的処理してコンテンツを出力しているのではなく、
                このCMSは記事を登録後にhtmlファイルをそのまま生成されるので、データベースを参照せずにいられるのでアクセス負荷にはとてもつよいのが特徴です。
                <br />
                <br />成果物
                <br />Webサイト / アプリと連携する為のRSS作成
                <br />HTMLメルマガ作成
                <br />LOOKBOOKページ作成 etc...
              </p>
              <p className="skill_site"></p>
            </div>
          </div>          
        </Modal>
    </li>
  );
}
export default SkillContent;