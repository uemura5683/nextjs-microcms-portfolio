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
      <li className="skill__zoom php">
        <button onClick={openModal}>
          <img src="/images/skill/skill_php.png"></img>
          <div className="gage"></div>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>PHP</h2>
          <button onClick={closeModal}>close</button>          
          <div className="skill__zoom_modal">
            <img src="/images/skill/skill_php.png"></img>
            <div className="skill__zoom_modal_description">
              <p className="skill_level">75% エキスパート</p>
              <p className="skill_experience">5年以上</p>
              <p className="skill_detail">
                phpは「HyperText Markup Language」の略であり、マークアップ言語の一つであり、僕が初めて学んだ言語です。<br></br>
              </p>
              <p className="skill_site"></p>
            </div>
          </div>          
        </Modal>
    </li>
  );
}
export default SkillContent;