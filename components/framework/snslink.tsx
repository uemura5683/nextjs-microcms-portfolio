export default function SnsLink() {
  return (
      <ul className="c-snslink">
        <li className="c-snslnk__list twitter">
          <a href="https://twitter.com/uemuragame5683" target="_blank">
            <img
              src="/images/header/tw_icn.png"
              alt="Twitter Link"
            />
          </a>
        </li>
        <li className="c-snslnk__list github">
          <a href="https://github.com/uemura5683" target="_blank">
            <img
                src="/images/header/git_icn.png"
                alt="Github Link"
            />
          </a>
        </li>
        <li className="c-snslnk__list nu-blog d-none">
          <a href="https://nu-blogsite.net/" target="_blank">
            <img
                src="/images/header/nu_icn.png"
                alt="Nu-blog Link"
            />
          </a>
        </li>
      </ul>
  )
}