import React from 'react';

const SkillContent = (Jsondata, key) => {
  Jsondata = Jsondata.data;
  const linkflag = Jsondata.link !== null ? true : false;
  return (
    <>
      <li className={Jsondata.class} key={key}>
      { linkflag ? (
        <a href={`${Jsondata.link}`} target="_blank" rel="noopener noreferrer">
          <img
            src={Jsondata.image}
            alt={Jsondata.alt}
            width="515px"
            height="346px"
          />
          {Jsondata.remarks !== null ? (
            <span className="name">
                {Jsondata.name}<br/>
                {Jsondata.remarks}
            </span>
          ) : (
            <span className="name">
                {Jsondata.name}
            </span>
          ) }
        </a>
      ) : (
        <span>
          <img
            src={Jsondata.image}
            alt={Jsondata.alt}
            width="515px"
            height="346px"
          />
          {Jsondata.remarks !== null ? (
            <span className="name">
                {Jsondata.name}<br/>
                {Jsondata.remarks}
            </span>
          ) : (
            <span className="name">
                {Jsondata.name}
            </span>
          ) }
        </span>
      ) }
      </li>
    </>
  );
}
export default SkillContent;