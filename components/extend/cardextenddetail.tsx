import * as React from "react"
import Link  from 'next/link'

const List = (object:any) => {
  const jsondata = object.data.data
     ,  url = object.data.link;
  return (
    <>
      {url != 'nublog' ? jsondata.map(data => (
        <li className={data.id} key={data.id}>
          <Link href={`${url}/${data.id}`}>
          <figure>
            <img
              src={data.image.url}
              alt={data.title}
              width={605}
            />
          </figure>
          </Link>
          <Link href={`${url}/${data.id}`}>
            <span>{data.title}</span>
          </Link>
        </li>
      ) ) : jsondata.map((data) => (
        <li className={data.id} key={data.id}>
          <a href={`${data.link}`} target="_blank" rel="noopener noreferrer">
          <figure>
            <img
              src={data.image.url}
              alt={data.title}
              width={605}
            />
          </figure>
          </a>
          <a href={`${data.link}`} target="_blank" rel="noopener noreferrer">
              <span>{data.title}</span>
          </a>
        </li>
      ) ) }
    </>
  )
};
export default List