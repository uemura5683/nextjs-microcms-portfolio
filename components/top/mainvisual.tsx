import Logo from '../common/logo'
import Navi from '../common/nav'
import ReactDOM from "react-dom";
import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";


export default function Component() {
  const [iniframe, setiframe] = useState("");
  const [onchange, onchanges] = useState("");

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setiframe('https://uemu-engineer.com/three');
    }, 6700)
    return() => {
      clearTimeout(timeoutId);      
    }
  }, [])

  if(iniframe != '') {
    ReactDOM.render(
      <React.StrictMode>
        <iframe loading="lazy" src={iniframe} />
      </React.StrictMode>,
      document.getElementById("mainvisual")
    );
  }

  if(onchange != '') {
    let mainvisual = document.getElementById("mainvisual");
    mainvisual.classList.add('is_loading');
    ReactDOM.render(
      <React.StrictMode>
        <iframe loading="lazy" src={onchange} />
      </React.StrictMode>,
      mainvisual
    );
    let timeoutId = setTimeout(() => {
      mainvisual.classList.remove('is_loading');
    }, 5000);
  }

  return (
    <>
      <section id="p-mainvisual" data-set-color="dark">
        <div className="p-mainvisual-inner">
          <Logo home></Logo>
          <Navi home></Navi>
          <figure id="mainvisual" className="p-mainvisual__iframe"></figure>
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
          <label key="mainvisual">
            <input type="radio" name="mainvisual" value="https://uemu-engineer.com/three" onChange={(e) => onchanges(e.currentTarget.value)} />
            <img src="/images/visual/three.png" />
          </label>
          <label key="mainvisual">
            <input type="radio" name="mainvisual" value="https://uemu-engineer.com/three_var2" onChange={(e) => onchanges(e.currentTarget.value)} />
            <img src="/images/visual/three2.png" />
          </label>
          <label key="mainvisual">
            <input type="radio" name="mainvisual" value="https://uemu-engineer.com/three_var3" onChange={(e) => onchanges(e.currentTarget.value)} />
            <img src="/images/visual/three3.png" />
          </label>
          <label key="mainvisual">
            <input type="radio" name="mainvisual" value="https://uemu-engineer.com/three_var4" onChange={(e) => onchanges(e.currentTarget.value)} />
            <img src="/images/visual/three4.png" />
          </label>
          <label key="mainvisual">
            <input type="radio" name="mainvisual" value="https://uemu-engineer.com/three" onChange={(e) => onchanges(e.currentTarget.value)} />
            <img src="/images/visual/three.png" />
          </label>
          <label key="mainvisual">
            <input type="radio" name="mainvisual" value="https://uemu-engineer.com/three_var2" onChange={(e) => onchanges(e.currentTarget.value)} />
            <img src="/images/visual/three2.png" />
          </label>
          <label key="mainvisual">
            <input type="radio" name="mainvisual" value="https://uemu-engineer.com/three_var3" onChange={(e) => onchanges(e.currentTarget.value)} />
            <img src="/images/visual/three3.png" />
          </label>
          <label key="mainvisual">
            <input type="radio" name="mainvisual" value="https://uemu-engineer.com/three_var4" onChange={(e) => onchanges(e.currentTarget.value)} />
            <img src="/images/visual/three4.png" />
          </label>
        </div>
      </section>
    </>
  )
}