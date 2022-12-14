import Logo from '../common/logo'
import Navi from '../common/nav'
import ReactDOM from "react-dom";
import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";
type Meinvisuallist = {
  key: string;
  class: string;
  value: string;
  img: string;
};
export default function Component() {
  const [iniframe, setiframe] = useState("");
  const [mainvisual, setmainvisual] = useState<any>({});

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setiframe('https://threejs-plactice.vercel.app/mac2/index.html');
    }, 6700)
    return() => {
      clearTimeout(timeoutId);      
    }
  }, [])
  if(iniframe != '') {
    ReactDOM.render(
      <React.StrictMode>
        <iframe className="t-visusal-other" loading="lazy" src={iniframe} />
      </React.StrictMode>,
      document.getElementById("mainvisual")
    );
  }

  function isEmpty(obj){
    for(let i in obj){
      return false;
    }
    return true;
  }

  if(isEmpty(mainvisual) !== true) {
    let mainvisual_dom = document.getElementById("mainvisual");
    mainvisual_dom.classList.add('is_loading');
    ReactDOM.render(
      <React.StrictMode>
        <iframe loading="lazy" className={mainvisual.class} src={mainvisual.value} />
      </React.StrictMode>,
      mainvisual_dom
    );
    let timeoutId = setTimeout(() => {
      mainvisual_dom.classList.remove('is_loading');
    }, 5000);
  }

  const mainvisuallist: Meinvisuallist[] = [
    { key: "num1", class: "t-visusal-other", value: "https://threejs-plactice.vercel.app/xmas/index.html", img: "/images/visual/three5.png" },
    { key: "num2", class: "t-visusal-origin", value: "https://uemu-engineer.com/three", img: "/images/visual/three.png" },
    { key: "num3", class: "t-visusal-origin", value: "https://uemu-engineer.com/three_var2", img: "/images/visual/three2.png" },
    { key: "num4", class: "t-visusal-origin", value: "https://uemu-engineer.com/three_var3", img: "/images/visual/three3.png" },
    { key: "num5", class: "t-visusal-origin", value: "https://uemu-engineer.com/three_var4", img: "/images/visual/three4.png" },
    { key: "num6", class: "t-visusal-other", value: "https://threejs-plactice.vercel.app/mac2/index.html", img: "/images/visual/three6.png" },
    { key: "num7", class: "t-visusal-other", value: "https://threejs-plactice.vercel.app/xmas/index.html", img: "/images/visual/three5.png" },
    { key: "num8", class: "t-visusal-origin", value: "https://uemu-engineer.com/three", img: "/images/visual/three.png" },
    { key: "num9", class: "t-visusal-origin", value: "https://uemu-engineer.com/three_var2", img: "/images/visual/three2.png" },
    { key: "num10", class: "t-visusal-origin", value: "https://uemu-engineer.com/three_var3", img: "/images/visual/three3.png" },
    { key: "num11", class: "t-visusal-origin", value: "https://uemu-engineer.com/three_var4", img: "/images/visual/three4.png" },
    { key: "num12", class: "t-visusal-other", value: "https://threejs-plactice.vercel.app/mac2/index.html", img: "/images/visual/three6.png" }
  ];
  return (
    <>
      <section id="p-mainvisual" data-set-color="dark">
        <div className="p-mainvisual-inner">
          <Logo home></Logo>
          <Navi home></Navi>
          <figure id="mainvisual" className="p-mainvisual__iframe"></figure>
          <div className="p-loading">
            <div className="circle-border">
              <div className="circle-core"></div>
            </div> 
          </div>
          <div className="p-mainvisual__click">
            <Link
              activeClass="active"
              to="p-about"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}
            > 
            <span></span>
            click here
          </Link> 
          </div>
        </div>
        <div className="p-select-box">
          {mainvisuallist.map ( (data: Meinvisuallist ) => {
            return (
              <label htmlFor={data.key} className="p-select-box-label" key={data.key}>
                <input type="radio" id={data.key} className="p-select-box-input" name="mainvisual" value={data.value} onChange={(e) => setmainvisual(data)} />
                <img className="p-select-box-img" src={data.img} />
              </label>
            )
          } ) }
        </div>
      </section>
    </>
  )
}