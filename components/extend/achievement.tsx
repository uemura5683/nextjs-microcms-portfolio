import React from 'react';

const SkillContent = (Jsondata, key) => {
  Jsondata = Jsondata.data;
  return (
    <>
    <li className={Jsondata.class} key={key}>
    { Jsondata.link !== null ? (
      <a href={`${Jsondata.link}`} target="_blank">
        <img
          src={Jsondata.image}
          alt={Jsondata.alt}
          width="515px"
          height="346px"
        />
        <span className="name">{Jsondata.name}</span>
      </a>
    ) : (
      <span>
        <img
          src={Jsondata.image}
          alt={Jsondata.alt}
          width="515px"
          height="346px"
        />
        <span className="name">{Jsondata.name}</span>
      </span>
    ) }
    </li>
    </>
  );
}
export default SkillContent;