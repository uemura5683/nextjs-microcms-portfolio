import React from 'react';
import Modal from 'react-modal'

const SkillContent = (Jsondata, key) => {

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
  Jsondata = Jsondata.data;
  return (
    <>
      <li className={Jsondata.class}>
        <button onClick={openModal}>
          <img
            src={Jsondata.image}
            alt={Jsondata.alt}
            width="515px"
            height="346px"
          />
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>{Jsondata.name}</h2>
          <button onClick={closeModal}>close</button>          
          <div className="skill__zoom_modal">
            <img
              src={Jsondata.image}
              alt={Jsondata.alt}
              width="318px"
              height="195px"
            />
            <div className="skill__zoom_modal_description">
              <p className="skill_detail" dangerouslySetInnerHTML={{__html: `${Jsondata.desc}`,}}></p>
              <p className="skill_site"></p>
            </div>
          </div>          
        </Modal>
      </li>
    </>
  );
}
export default SkillContent;