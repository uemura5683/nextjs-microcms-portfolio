export default function LinkArea() {
  return (
    <section id="p-link" className="has-animation u-gray" data-set-color="dark">
      <h2 className="c-title white">LINK</h2>    
      <ul className="c-link__list">
        <li className="c-link__list_li">
          <a
            href="https://nu-blogsite.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="c-link__list_link"
          >
            <img
              className="c-link__list_img"
              src="/images/link/nu-blog.png" 
              alt="Nu-Blogサイト"
            />
            <span className="c-link__list_txt">Nu-Blog</span>
          </a>
        </li>
        <li className="c-link__list_li">
          <a
            href="https://twitter.com/uemuragame5683"
            target="_blank"
            rel="noopener noreferrer"
            className="c-link__list_link"
          >
            <img
              className="c-link__list_img"
              src="/images/link/twitter.png"
              alt="うえむー twitter"
            />
            <span className="c-link__list_txt">Twitter</span>
          </a>
        </li>
        <li className="c-link__list_li">
          <a
            href="https://speakerdeck.com/uemura"
            target="_blank"
            rel="noopener noreferrer"
            className="c-link__list_link"
          >
            <img
              className="c-link__list_img"
              src="/images/link/speaker-deck.png"
              alt="うえむー Speaker Deck"
            />
            <span className="c-link__list_txt">Speaker Deck</span>
          </a>
        </li>
        <li className="c-link__list_li">
          <a
            href="https://codepen.io/uemuragame5683"
            target="_blank"
            rel="noopener noreferrer"
            className="c-link__list_link"
          >
            <img
              className="c-link__list_img"
              src="/images/link/codepen.png"
              alt="うえむー Codepen"
            />
            <span className="c-link__list_txt">Codepen</span>
          </a>
        </li>
        <li className="c-link__list_li">
          <a
            href="https://github.com/uemura5683"
            target="_blank"
            rel="noopener noreferrer"
            className="c-link__list_link"
          >
            <img
              className="c-link__list_img"
              src="/images/link/github.png" 
              alt="うえむー Github"
            />
            <span className="c-link__list_txt">Github</span>
          </a>
        </li>
        <li className="c-link__list_li">
          <a
            href="https://zenn.dev/uemuragame5683"
            target="_blank"
            rel="noopener noreferrer"
            className="c-link__list_link"
          >
            <img
              className="c-link__list_img"
              src="/images/link/zenn.png"
              alt="うえむー Zenn"
            />
            <span className="c-link__list_txt">Zenn</span>
          </a>
        </li>
      </ul>
    </section>
  )
}