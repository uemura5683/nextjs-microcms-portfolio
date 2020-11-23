export default function Sard({ work }) {
  return (
      <div className="card">
        { work ? (
          <>
          <ul className="work__list">
            <li>
              <a href="">
                <img src="/images/noimage.png"></img>
                <span>テキストテキスト</span>
              </a>
            </li>
            <li>
              <img src="/images/noimage.png"></img>
              <span>テキストテキスト</span>
            </li>
          </ul>
          </>
          ) : (
          <>
          <ul className="info__list">
            <li>
                <img src="/images/noimage.png"></img>
                <span>テキストテキスト</span>
              </li>
              <li>
                <img src="/images/noimage.png"></img>
                <span>テキストテキスト</span>
              </li>
          </ul>
          </>
        )}
      </div>
  )
}