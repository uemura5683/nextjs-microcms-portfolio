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
      <li className="skill__zoom next">
        <button onClick={openModal}>
          <img
            src="/images/skill/skill_next.png"
            alt="Next.js logo"
          />
          <div className="gage"></div>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>NEXT.js</h2>
          <button onClick={closeModal}>close</button>          
          <div className="skill__zoom_modal">
            <img
              src="/images/skill/skill_next.png"
              alt="Next.js logo"
            />
            <div className="skill__zoom_modal_description">
              <p className="skill_level">40% ノービス</p>
              <p className="skill_experience">1年未満</p>
              <p className="skill_detail">
                NEXT.jsは、ZEIT社によって開発されたJavascriptのフレームワークであり、Reactベースにしたフロントエンドのフレームワークあります。SSR/SSG、ファイルベースルーティング、開発サーバの部分的な高速リロードなど様々な機能を持っています。<br />
                <br /><span>成果物</span><a href="http://uemu-engineer.com/" target="_blank">Nu stack</a>
              </p>
              <p className="skill_site"></p>
            </div>
          </div>          
        </Modal>
    </li>
  );
}
export default SkillContent;