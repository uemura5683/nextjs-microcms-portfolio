import React from 'react';
import Modal from 'react-modal'

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
      <li className="skill__zoom node">
        <button onClick={openModal}>
          <img
            src="/images/skill/skill_node.png"
            alt="Node.js logo"
          />
          <div className="gage"></div>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>node.js</h2>
          <button onClick={closeModal}>close</button>          
          <div className="skill__zoom_modal">
            <img
              src="/images/skill/skill_node.png"
              alt="Node.js logo"
            />
            <div className="skill__zoom_modal_description">
              <p className="skill_level">50% ミドル</p>
              <p className="skill_experience">1年以上</p>
              <p className="skill_detail">
                Node.jsは世界中で使われているサーバーで動くJavascriptであります。<br />
                Node.jsをインストールすることで。Ruby + RailsやPython + DjangoなどでWebアプリケーションを作成したり、<br />
                EjsとかTypescriptでクライアントサイドのプログラムをかくことも出来ます。<br />
                他にも、SCSSをCSS / Pugからhtmlに変換する為にNode.jsを使ったり、テストツールを使う為にNode.jsを使ったりと、Node.jsは様々な用途で使われています。
              </p>
              <p className="skill_site"></p>
            </div>
          </div>          
        </Modal>
    </li>
  );
}
export default SkillContent;