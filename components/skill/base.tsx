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
      <li className="skill__zoom base">
        <button onClick={openModal}>
          <img
            src="/images/skill/skill_base.png"
            alt="BASE logo"
          />
          <div className="gage"></div>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>BASE</h2>
          <button onClick={closeModal}>close</button>          
          <div className="skill__zoom_modal">
            <img
              src="/images/skill/skill_base.png"
              alt="BASE logo"
            />
            <div className="skill__zoom_modal_description">
              <p className="skill_level">70% エキスパート</p>
              <p className="skill_experience">1年未満</p>
              <p className="skill_detail">
                BASE(ベイス)は会員登録するだけで誰でも簡単にネットショップが作成できるサービスです。<br />
                気に入ったテーマを選択して、カスタマイズするだけでネットが公開できます。<br />
                また、SEO設定・クーポン・メールマガジン・レビューなど機能が充実でありほとんど無償で機能を追加できます。<br />
                もちろん、オリジナルのサイトを作成することが可能です。<br />
                必要な言語はhtml/css/jqueryです。<br />
                オリジナルのサイトを作る場合は、言語スキルを身につけることが必須なので、未経験の方はテーマ選択・カスタマイズのみで十分でしょう。<br />
                <br/><span>成果物</span><a href="https://takarabako.theshop.jp/" target="_blank">タカラバコ ECサイト</a>
              </p>
              <p className="skill_site"></p>
            </div>
          </div>          
        </Modal>
    </li>
  );
}
export default SkillContent;