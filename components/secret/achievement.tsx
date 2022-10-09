import Achievent from "../extend/cardachievement";
import React from "react";

export default function Skill({ skill }) {
  return (
    <>
      <section className="has-animation slide-animation" id="p-acivement">
        <h2 className="c-title white">ACHIEVEMENT</h2>
        <ul className="c-acivement__list">
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