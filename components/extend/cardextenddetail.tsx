import * as React from "react"
import Link  from 'next/link'

const List = (object:any) => {
  const jsondata = object.data.data
     ,  url = object.data.link;
  return (
    <>
      {url != 'nublog' ? jsondata.map(data => (
        <li className="c-card-li" key={data.id}>
          <Link href={`${url}/${data.id}`}>
            <figure className="c-card-figure">
              <img
                className="c-card-img"
                src={data.image.url}
                alt={data.title}
                width={605}
              />
            </figure>
          </Link>
          <Link href={`${url}/${data.id}`}>
            <span className="c-card-txt">{data.title}</span>
          </Link>
        </li>
      ) ) : jsondata.map((data) => (
        <li className="c-card-li" key={data.id}>
          <a href={`${data.link}`} target="_blank" rel="noopener noreferrer">
            <figure className="c-card-figure">
              <img
                className="c-card-img"
                src={data.image.url}
                alt={data.title}
                width={605}
              />
            </figure>
          </a>
          <a href={`${data.link}`} target="_blank" rel="noopener noreferrer">
            <span className="c-card-txt">{data.title}</span>
          </a>
        </li>
      ) ) }
    </>
  )
};
export default List