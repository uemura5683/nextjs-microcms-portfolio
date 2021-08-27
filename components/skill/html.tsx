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
      <li className="skill__zoom html">
        <button onClick={openModal}>
          <img
            src="/images/skill/skill_html.png"
            alt="HTML logo"
          />
          <div className="gage"></div>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={_subtitle => (subtitle = _subtitle)}>HTML</h2>
          <button onClick={closeModal}>close</button>          
          <div className="skill__zoom_modal">
            <img
              src="/images/skill/skill_html.png"
              alt="HTML logo"
            />
            <div className="skill__zoom_modal_description">
              <p className="skill_level">80% エキスパート</p>
              <p className="skill_experience">5年以上</p>
              <p className="skill_detail">
                htmlは「HyperText Markup Language」の略であり、マークアップ言語の一つであり、僕が初めて学んだ言語です。<br />
                HTMLは比較的自由にかける言語であり、初学者さんでもすぐに覚えられるマークアップ言語ですが、基礎やルールをしっかり覚える必要があります。<br />
                それに反すると保守性が悪くなったり、レイアウトが任意通りに反映されなくなることがあります。<br />
                また、W3Cと言ってWeb標準規格を準すること推奨されており、それを準しないと同じWebページでもブラウザによってレイアウトなどが変わってしまうという問題を抱えています。<br />
                なので、基礎やルールをしっかり把握し、W3Cを準するようにマークアップして行きましょう。<br />
                <br /><span>成果物</span><a href="https://takarabako.theshop.jp/" target="_blank">タカラバコ ECサイト</a>
                <br /><a href="https://takarabako.tokyo/" target="_blank">タカラバコ CPサイト</a>
                <br /><a href="https://nu-blogsite.net/" target="_blank">Nu-Blog</a>
                <br /><a href="http://uemu-engineer.com/" target="_blank">Nu-stack</a>
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