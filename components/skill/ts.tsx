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
      <li className="skill__zoom ts">
        <button onClick={openModal}>
          <img
            src="/images/skill/skill_ts.png"
            alt="React.js logo"
          />
          <div className="gage"></div>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Type Script</h2>
          <button onClick={closeModal}>close</button>          
          <div className="skill__zoom_modal">
            <img
              src="/images/skill/skill_ts.png"
              alt="React.js logo"
            />
            <div className="skill__zoom_modal_description">
              <p className="skill_level">20% ビギナー</p>
              <p className="skill_experience">1年未満</p>
              <p className="skill_detail">
                TypeScriptはJavaScriptに対して、省略も可能な静的型付けとクラスベースオブジェクト指向を加えた厳密なスーパーセットとなっております。<br />
                TypeScriptはReact.jsと相性がよく、TypeScriptとReact.jsでサイト制作する会社も増えてきています。<br />
                <br /><span>成果物</span><a href="https://uemu-engineer.com/">Nu stack</a>
              </p>
              <p className="skill_site"></p>
            </div>
          </div>          
        </Modal>
    </li>
  );
}
export default SkillContent;