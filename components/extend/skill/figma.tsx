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
      <li className="skill__zoom figma">
        <button onClick={openModal}>
          <img
            src="/images/skill/skill_figma.png"
            alt="figma logo"
          />
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
            <img
              src="/images/skill/skill_figma.png"
              alt="figma logo"
            />
            <div className="skill__zoom_modal_description">
              <p className="skill_level">60% ミドル</p>
              <p className="skill_experience">1年未満</p>
              <p className="skill_detail">
                figmaはアカウント登録するだけで利用できる。サーバーレスUX/ULデザインカンプ作成ツールです。<br/>
                仕様がXDと少しにており、XDに慣れている方はサクッと使いこなせると思います。<br/>
                作成したデザインカンプを仲間に招待するだけで共有することができます。<br/>
                <br/><span>成果物</span><a href="https://takarabako.tokyo/" target="_blank">タカラバコ</a>
                <br/><a href="https://uemu-engineer.com/" target="_blank">NU-stack</a>
                <br/>
                <br/><span>参考資料</span><a href="https://www.figma.com/" target="_blank">figma</a>
                <br/><a href="https://web-design.school/tutorials/figma/getting-started" target="_blank">チュートリアル</a>
              </p>
              <p className="skill_site"></p>
            </div>
          </div>          
        </Modal>
    </li>
  );
}
export default SkillContent;