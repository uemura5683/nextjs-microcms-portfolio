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
      <li className="skill__zoom mcms">
        <button onClick={openModal}>
          <img
            src="/images/skill/skill_mcms.png"
            alt="Micro CMS logo"
          />
          <div className="gage"></div>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Micro CMS</h2>
          <button onClick={closeModal}>close</button>          
          <div className="skill__zoom_modal">
            <img
              src="/images/skill/skill_mcms.png"
              alt="Micro CMS logo"
            />
            <div className="skill__zoom_modal_description">
              <p className="skill_level">60% ミドル</p>
              <p className="skill_experience">1年以上</p>
              <p className="skill_detail">
                Micro CMSは2019年8月にリリースした、初の日本製のヘッドレスCMSです。ほとんどのヘッドレスCMSは英語で記載されているが、Micor CMSは日本語で記載されているため、日本語でチャットサポートが利用できるのが快適です。<br />
                ヘッドレスCMSなのでアカウントを登録するだけで利用でき、管理画面のサーバー管理はは一切不要なのでhtml/css/javascriptの技術があれば誰でも利用できます。<br />
                <br /><span>成果物</span><a href="https://nu-blogsite.net/" target="_blank">うえむーブログ</a>
                <br /><a href="http://uemu-engineer.com/" target="_blank">Nu-stack</a>
                <br />アパレルブランドサイト 多数 etc...
                <br /><span>LT資料</span><a href="https://speakerdeck.com/uemura/microcmsnituite-gai-yao-bian-a45850a4-448d-423a-9675-9be6be7c4ba7" target="_blank">micro CMSについて</a>
                <br /><a href="https://speakerdeck.com/uemura/microcms-plus-nuxt-dot-jstege-ren-hurokusaitowotehuroisitajian" target="_blank">Microcms + nuxt.jsで個人ブログサイトをデプロイした件</a>
              </p>
              <p className="skill_site"></p>
            </div>
          </div>          
        </Modal>
    </li>
  );
}
export default SkillContent;