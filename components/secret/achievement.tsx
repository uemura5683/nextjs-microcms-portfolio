import Achievent from "../extend/achievement";
import React from "react";

export default function Skill({ skill }) {
  return (
    <>
    <section id="p-acivement">
      <h2 className="c-title white">ACHIEVEMENT</h2>
      <ul className="skill__list">
        {skill ? skill.map((Jsondata, index) => 
            <Achievent
              data={Jsondata}
              key={index}>
            </Achievent>
          ): null}
      </ul>
    </section>
    </>
  )
}