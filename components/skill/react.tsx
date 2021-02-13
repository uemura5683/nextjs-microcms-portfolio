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
      <li className="skill__zoom react">
        <button onClick={openModal}>
          <img src="/images/skill/skill_react.png"></img>
          <div className="gage"></div>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>React.js</h2>
          <button onClick={closeModal}>close</button>          
          <div className="skill__zoom_modal">
            <img src="/images/skill/skill_react.png"></img>
            <div className="skill__zoom_modal_description">
              <p className="skill_level">40% ノービス</p>
              <p className="skill_experience">1年未満</p>
              <p className="skill_detail">
                React は、Facebookによって開発されているユーザインタフェース構築のためのJavaScriptライブラリです。<br></br>React.jsまたはReactJSの名称でも知られております。<br></br>Reactはシングルページアプリケーションやモバイルアプリケーションの開発におけるベースとして使用することができます。 <br></br>
                また、React.jsの拡張版Next.js・Gatsby.jsも存在しており、このサイトはNext.jsで作成しております。
                <br></br>成果物<br></br><a href="https://uemu-engineer.com/">Nu stack</a>
              </p>
              <p className="skill_site"></p>
            </div>
          </div>          
        </Modal>
    </li>
  );
}
export default SkillContent;