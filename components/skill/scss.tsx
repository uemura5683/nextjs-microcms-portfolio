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
      <li className="skill__zoom scss">
        <button onClick={openModal}>
          <img
            src="/images/skill/skill_scss.png"
            alt="SCSS logo"
          />
          <div className="gage"></div>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>SCSS</h2>
          <button onClick={closeModal}>close</button>          
          <div className="skill__zoom_modal">
            <img
              src="/images/skill/skill_scss.png"
              alt="SCSS logo"
            />
            <div className="skill__zoom_modal_description">
              <p className="skill_level">60% ミドル</p>
              <p className="skill_experience">3年以上</p>
              <p className="skill_detail">
                SCSSはCSSを効率良くスタイル調整する為のRubyで作られたスタイルシート言語であります。PUGと同じくRuby・node.js・gulpをインストールしてコンパイルする必要があります。<br />
                php・jsのように配列・変数などを用いることができ、(.section-00X)のようなセレクタや(color: whiteなど)よく利用する設定値などにも変数・配列を適用して効率よくスタイルシートを記述するのに適しています。<br />
                <br /><span>成果物</span><a href="https://codepen.io/uemuragame5683" target="_blank">CODEPEN</a>
                <br /><a href="https://nu-blogsite.net/" target="_blank">うえむーブログ</a>
                <br />アパレルブランドサイト 多数
              </p>
              <p className="skill_site"></p>
            </div>
          </div>          
        </Modal>
    </li>
  );
}
export default SkillContent;