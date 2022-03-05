import Skilllist from "../extend/skilllist";
import React from "react";

export default function Skill({ skill }) {
  return (
    <section id="p-skill" className="u-gray has-animation" data-set-color="dark">
      <h2 className="c-title white">SKILL</h2>
      <ul className="skill__list">
        {skill ? skill.map((Jsondata, index) => 
            <Skilllist
              data={Jsondata}
              key={index}>
            </Skilllist>
          ): null}
      </ul>
    </section>
  )
}