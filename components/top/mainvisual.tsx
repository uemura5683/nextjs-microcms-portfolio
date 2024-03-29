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

  // 初期表示
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setiframe('https://nextjs-microcms-portfolio.vercel.app/three');
    }, 6700)
    return() => {
      clearTimeout(timeoutId);      
    }
  }, [])

  if(iniframe != '') {
    const Visual = () => {
      return (
        <iframe className="t-visusal-origin" loading="lazy" src={iniframe} />
      )
    }
    ReactDOM.render(
      <Visual />,
      document.getElementById("mainvisual")
    );
  }

  // WebGLを切り替えるときの処理
  function isEmpty(obj){
    for(let i in obj){
      return false;
    }
    return true;
  }
  if(isEmpty(mainvisual) !== true) {
    document.getElementById("mainvisual").classList.add('is_loading');
    const Visualtap = () => {
      return (
        <iframe loading="lazy" className={mainvisual.class} src={mainvisual.value} />
      )
    }
    ReactDOM.render(
      <Visualtap />,
      document.getElementById("mainvisual")
    );
    let timeoutId = setTimeout(() => {
      document.getElementById("mainvisual").classList.remove('is_loading');
    }, 5000);
  }

  const mainvisuallist: Meinvisuallist[] = [
    { key: "num1", class: "t-visusal-origin", value: "https://nextjs-microcms-portfolio.vercel.app/three", img: "/images/visual/three.png" },
    { key: "num2", class: "t-visusal-origin", value: "https://nextjs-microcms-portfolio.vercel.app/three_var2", img: "/images/visual/three2.png" },
    { key: "num3", class: "t-visusal-origin", value: "https://nextjs-microcms-portfolio.vercel.app/three_var3", img: "/images/visual/three3.png" },
    { key: "num4", class: "t-visusal-origin", value: "https://nextjs-microcms-portfolio.vercel.app/three_var4", img: "/images/visual/three4.png" },
    { key: "num5", class: "t-visusal-other", value: "https://threejs-plactice.vercel.app/mac2/index.html", img: "/images/visual/three6.png" },
    { key: "num6", class: "t-visusal-origin", value: "https://nextjs-microcms-portfolio.vercel.app/three", img: "/images/visual/three.png" },
    { key: "num7", class: "t-visusal-origin", value: "https://nextjs-microcms-portfolio.vercel.app/three_var2", img: "/images/visual/three2.png" },
    { key: "num8", class: "t-visusal-origin", value: "https://nextjs-microcms-portfolio.vercel.app/three_var3", img: "/images/visual/three3.png" },
    { key: "num9", class: "t-visusal-origin", value: "https://nextjs-microcms-portfolio.vercel.app/three_var4", img: "/images/visual/three4.png" },
    { key: "num10", class: "t-visusal-other", value: "https://threejs-plactice.vercel.app/mac2/index.html", img: "/images/visual/three6.png" }
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
              duration={500}
            > 
            <span></span>
            click here
          </Link> 
          </div>
        </div>
        <div className="p-select-box">
          {mainvisuallist.map ( (data: Meinvisuallist, val ) => {
            return (
              <label htmlFor={data.key} className="p-select-box-label" key={val}>
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