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
      <li className="skill__zoom go">
        <button onClick={openModal}>
          <img
            src="/images/skill/skill_go.png"
            alt="go logo"
          />
          <div className="gage"></div>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>go</h2>
          <button onClick={closeModal}>close</button>          
          <div className="skill__zoom_modal">
            <img
              src="/images/skill/skill_go.png"
              alt="go logo"
            />
            <div className="skill__zoom_modal_description">
              <p className="skill_level">20% ビギナー</p>
              <p className="skill_experience">1年未満</p>
              <p className="skill_detail">
                go(go lang)はGoogle社が開発したサーバーサイド言語であり、シンプルで信頼性があり、無駄のない有能なソフトウェア開発を簡単に実現できるように設計されいます。<br/>
                ゆえに、実用性があり、効率よく作業を行うことが可能なため、Go言語は「軽量・高速・シンプル」なプログラミング言語として広く知られています。<br/>
                goのマスコットキャラクターはgopherであり、日本語で訳すと「ホリネズミ」だそうです。<br/>
                <br/>成果物<br/><a href="https://github.com/uemura5683/golang_typinggame" target="_blank">github タイピングゲーム</a>
                <br/>LT資料<br/><a href="https://speakerdeck.com/uemura/golang-dezhi-xian-shi-jian-fu-kirandamubiao-shi-falsetaipingugemuwozuo-tutemita" target="_blank">Golang で制限時間付き・ランダム表示のタイピングゲームを作ってみた。</a>
              </p>
              <p className="skill_site"></p>
            </div>
          </div>          
        </Modal>
    </li>
  );
}
export default SkillContent;