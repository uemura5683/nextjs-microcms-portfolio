import React from 'react';

const SkillContent = (Jsondata, key) => {

  Jsondata = Jsondata.data;

  return (
    <>
    <li className={Jsondata.class}>
    { Jsondata.link !== null ? (
      <a href={`${Jsondata.link}`} target="_blank">
        <img
          src={Jsondata.image}
          alt={Jsondata.alt}
          width="515px"
          height="346px"
        />
      </a>
    ) : (
      <img
        src={Jsondata.image}
        alt={Jsondata.alt}
        width="515px"
        height="346px"
      />
    ) }
    </li>
    </>
  );
}
export default SkillContent;