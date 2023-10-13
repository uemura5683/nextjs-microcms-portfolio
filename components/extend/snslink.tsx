export default function SnsLink() {
  return (
    <ul className="c-snslink">
      <li className="c-snslnk__list twitter">
        <a
          className="c-snslnk__link"
          href="https://twitter.com/uemuragame5683"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="c-snslnk__image"
            src="/images/header/tw_icn.png"
            alt="X(旧Twitter) Link"
            width="45"
            height="45"
          />
        </a>
      </li>
      <li className="c-snslnk__list github">
        <a
          className="c-snslnk__link"
          href="https://github.com/uemura5683"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="c-snslnk__image"
            src="/images/header/git_icn.png"
            alt="Github Link"
            width="45"
            height="45"
          />
        </a>
      </li>
      <li className="c-snslnk__list nu-blog">
        <a
          className="c-snslnk__link"
          href="https://nu-blogsite.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="c-snslnk__image"
            src="/images/header/nu_icn.png"
            alt="Nu-blog Link"
            width="45"
            height="45"
          />
        </a>
      </li>
    </ul>
  )
}