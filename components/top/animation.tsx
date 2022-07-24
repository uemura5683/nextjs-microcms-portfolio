import styled from "@emotion/styled";

export const StyleWrapper = styled.div`
  @keyframes bodyfadeout {
    0% { opacity: 1; }
    60% { opacity: 1; }
    100% { opacity: 0; z-index: -1; }
  }
  .c-animation {
    width: 100%;
    height: 100vh;
    z-index: 10000000;
    position: fixed;
    top: 0;
    left: 0;
    animation: bodyfadeout 1s linear 6.5s infinite;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    background-color: black;
    color: white;
  }
  
  /**
  * logo
  **/
  .c-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 232px;
    height: 96px;
    transform: translate(-50%, -50%);
  }
  .c-logo-left {
    position: absolute;
    width: 95.5px;
    height: 95px;
    animation: logoleftfade .5s ease-in-out 5.7s infinite;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }
  .c-logo-left > * {
    position: absolute;
  }
  @keyframes logoleftfade {
    0% { opacity: 1; top: 0px; }
    100% { opacity: 0; top: -100px; }
  }
  .c-logo-left .c-logo-left-one{
    background: url('https://css-modan.vercel.app/ustack/img/parts1.png');
    width: calc(23px / 2);
    height: 0px;
    top: 0;
    left: 0;
    opacity: 0;
    background-size: calc(23px / 2) calc(191px / 2);
    background-repeat: no-repeat;
    animation: logoleftone .3s ease-in-out 2.1s infinite;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }
  @keyframes logoleftone {
    0% { opacity: 0; height: 0; }
    100% { opacity: 1; height: calc(191px / 2); }
  }
  .c-logo-left .c-logo-left-two{
    background: url('https://css-modan.vercel.app/ustack/img/parts2.png');
    width: calc(22px / 2);
    height: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    background-size: calc(22px / 2) calc(191px / 2);
    background-repeat: no-repeat;
    animation: logolefttwo .3s ease-in-out 2.7s infinite;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;  
  }
  @keyframes logolefttwo {
    0% { opacity: 0; height: 0; }
    100% { opacity: 1; height: calc(191px / 2); }
  }
  .c-logo-left .c-logo-left-three{
    background: url('https://css-modan.vercel.app/ustack/img/parts3.png');
    width: calc(190px / 2);
    height: calc(22px / 2);
    bottom: 0;
    left: 1px;
    opacity: 0;
    background-size: calc(190px / 2) calc(22px / 2);
    background-repeat: no-repeat;
    animation: logoleftthree .3s ease-in-out 2.4s infinite;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;   
  }
  @keyframes logoleftthree {
    0% { opacity: 0; width: 0px; }
    100% { opacity: 1; width: calc(190px / 2); }
  }
  .c-logo-left .c-logo-left-four{
    background: url('https://css-modan.vercel.app/ustack/img/parts4.png');
    width: calc(121px / 2);
    height: calc(133px / 2);
    top: 0;
    left: 50%;
    opacity: 0;
    background-size: calc(121px / 2) calc(133px / 2);
    transform: translate(-50%, 0px);
    background-repeat: no-repeat;
    animation: logoleftfour .3s ease-in-out 3.3s infinite;
    animation-fill-mode: forwards;
    animation-iteration-count: 1; 
  }
  @keyframes logoleftfour {
    0% { opacity: 0; top: -100px; }
    100% { opacity: 1; top: 0; }
  }
  .c-logo-left .c-logo-left-five{
    background: url('https://css-modan.vercel.app/ustack/img/parts5.png');
    width: 62px;
    height: 68px;
    top: 8px;
    left: 50%;
    opacity: 0;
    background-size: 62px 68px;
    transform: translate(-50%, 0px);
    animation: logoleftfive .3s ease-in-out 3.0s infinite;
    animation-fill-mode: forwards;
    animation-iteration-count: 1; 
  }
  @keyframes logoleftfive {
    0% { opacity: 0; top: -92px; }
    100% { opacity: 1; top: 8px; }
  }
  .c-logo-right {
    position: absolute;
    left: 105px;
    bottom: 0;
    height: 48px;
  }
  .c-logo-right span {
    font-size: 48px;
    letter-spacing: -0.3rem;
    line-height: 48px;
    font-family: 'M PLUS Rounded 1c', sans-serif;
  }
  .c-logo-right .c-logo-right-one {
    opacity: 0;
    animation: logorightone .3s ease-in-out 1.0s infinite
            , logorightonefade .5s ease-in-out 5.2s infinite;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    position: absolute;
    left: 0;
  }
  @keyframes logorightone {
    0% { opacity: 0;}
    100% { opacity: 1; }
  }
  @keyframes logorightonefade {
    0% { opacity: 1; transform: rotate(0deg); left: 0; }
    100% { opacity: 0; transform: rotate(-90deg); left: 50px; }
  }
  .c-logo-right .c-logo-right-two {
    opacity: 0;
    animation: logorighttwo .3s ease-in-out 1.2s infinite
            , logorighttwofade .5s ease-in-out 4.9s infinite;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    position: absolute;
    left: 24px;
  }
  @keyframes logorighttwo {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes logorighttwofade {
    0% { opacity: 1; transform: rotate(0deg); left: 24px; }
    100% { opacity: 0; transform: rotate(-90deg); left: calc(24px + 50px); }
  }
  .c-logo-right .c-logo-right-three {
    opacity: 0;
    animation: logorightthree .3s ease-in-out 1.4s infinite
            , logorightthreefade .5s ease-in-out 4.6s infinite;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    position: absolute;
    left: 49px;
  }
  @keyframes logorightthree {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes logorightthreefade {
    0% { opacity: 1; transform: rotate(0deg); left: 49px; }
    100% { opacity: 0; transform: rotate(-90deg); left: calc(49px + 50px);}
  }
  .c-logo-right .c-logo-right-four {
    opacity: 0;
    animation: logorightfour .3s ease-in-out 1.6s infinite
            , logorightfourfade .5s ease-in-out 4.3s infinite;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    position: absolute;
    left: 77px;
  }
  @keyframes logorightfour {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes logorightfourfade {
    0% { opacity: 1; transform: rotate(0deg); left: 77px; }
    100% { opacity: 0; transform: rotate(-90deg); left: calc(77px + 50px); }
  }
  .c-logo-right .c-logo-right-five {
    opacity: 0;
    animation: logorightfive .3s ease-in-out 1.8s infinite
            , logorightfivefade .5s ease-in-out 4.0s infinite;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    position: absolute;
    left: 102px;
  }
  @keyframes logorightfive {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes logorightfivefade {
    0% { opacity: 1; transform: rotate(0deg); left: 102px; }
    100% { opacity: 0; transform: rotate(-90deg); left: calc(102px + 50px); }
  }
`

export default function AnimationArea() {
  return (
    <StyleWrapper>
    <div className="c-animation">
      <div className="c-main">
        <div className="c-logo">
          <div className="c-logo-left">
            <div className="c-logo-left-one"></div>
            <div className="c-logo-left-two"></div>
            <div className="c-logo-left-three"></div>
            <div className="c-logo-left-four"></div>
            <div className="c-logo-left-five"></div>
          </div>
          <div className="c-logo-right">
            <span className="c-logo-right-one">s</span>
            <span className="c-logo-right-two">t</span>
            <span className="c-logo-right-three">a</span>
            <span className="c-logo-right-four">c</span>
            <span className="c-logo-right-five">k</span>
          </div>
        </div>
      </div>
    </div>
    </StyleWrapper>
  )
}