import React from 'react'
import { WebGLRenderer, Scene, PerspectiveCamera, Object3D, Fog, AmbientLight } from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'
import styled from "@emotion/styled";
import { TWEEN } from '../../components/three/tween.js';

export const StyleWrapper = styled.div`
  canvas {
    width: 100% !important;
    height: 100% !important;
    background-color: #000;
    margin: 0;
    overflow: hidden;
  }
  a {
    color: #ffffff;
  }
  #info {
    position: absolute;
    width: 100%;
    color: #ffffff;
    padding: 5px;
    font-family: Monospace;
    font-size: 13px;
    font-weight: bold;
    text-align: center;
    z-index: 1;
  }
  #menu {
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
  }
  .element {
    width: 120px;
    height: 120px;
    box-shadow: 0px 0px 10px rgba(255,255,255,.75);
    border: 1px solid rgba(255,255,255,.75);
    text-align: center;
    cursor: default;
    border-radius: 10px;
  }
  .element:hover {
    box-shadow: 0px 0px 10px rgba(255,255,255,1);
    border: 1px solid rgba(255,255,255,1);
  }
  .element .typing_one {
    position: absolute;
    top: calc(50% - 36px);
    right: 50%;
    font-size: 30px;
    color: rgba(255,255,255,.5);
    text-shadow: 0 0 10px rgba(255,255,255,.75);
    transform: translateY(-50%) translateX(50%);
  }
  .element:hover .typing_one {
    color: rgba(255,255,255,1);
    text-shadow: 0 0 10px rgba(255,255,255,1);
  }
  .element .typing_two {
    position: absolute;
    top: 50%;
    right: calc(50% + 36px);
    font-size: 30px;
    font-weight: bold;
    color: rgba(255,255,255,.5);
    text-shadow: 0 0 10px rgba(255,255,255,.75);
    transform: translateY(-50%) translateX(50%);
  }
  .element:hover .typing_two {
    color: rgba(255,255,255,1);
    text-shadow: 0 0 10px rgba(255,255,255,1);
  }
  .element .typing_three {
    position: absolute;
    top: calc(50% + 36px);
    right: 50%;
    font-size: 30px;
    color: rgba(255,255,255,.5);
    text-shadow: 0 0 10px rgba(255,255,255,.75);
    transform: translateY(-50%) translateX(50%);
  }
  .element:hover .typing_three {
    color: rgba(255,255,255,1);
    text-shadow: 0 0 10px rgba(255,255,255,1);
  }
  .element .typing_four {
    position: absolute;
    top: 50%;
    right: calc(50% - 40px);
    font-size: 30px;
    color: rgba(255,255,255,.5);
    text-shadow: 0 0 10px rgba(255,255,255,.75);
    transform: translateY(-50%) translateX(50%);
  }
  .element:hover .typing_four {
    color: rgba(255,255,255,1);
    text-shadow: 0 0 10px rgba(255,255,255,1);
  }
  .element.element_num_0,
  .element.element_num_1,
  .element.element_num_2,
  .element.element_num_3,
  .element.element_num_4,
  .element.element_num_5,
  .element.element_num_6,
  .element.element_num_7,
  .element.element_num_8,
  .element.element_num_9,
  .element.element_num_10,
  .element.element_num_11,
  .element.element_num_12,
  .element.element_num_13 {
    height: 60px;
  }
  .element.element_num_0 .typing_three,
  .element.element_num_1 .typing_three,
  .element.element_num_2 .typing_three,
  .element.element_num_3 .typing_three,
  .element.element_num_4 .typing_three,
  .element.element_num_5 .typing_three,
  .element.element_num_6 .typing_three,
  .element.element_num_7 .typing_three,
  .element.element_num_8 .typing_three,
  .element.element_num_9 .typing_three,
  .element.element_num_10 .typing_three,
  .element.element_num_11 .typing_three,
  .element.element_num_12 .typing_three,
  .element.element_num_13 .typing_three {
      top: calc(50% + 14px);
      font-size: 20px;
  }
  .element.element_num_0 .typing_one {
    top: calc(50% + 5px);
    right: calc(50% + 20px);
  }
  .element.element_num_1{
      background-image: url(https://threejs-plactice.vercel.app/mac/img/f1.png);
      background-repeat: no-repeat;
        background-position: center 0px;
  }
  .element.element_num_2{
      background-image: url(https://threejs-plactice.vercel.app/mac/img/f2.png);
      background-repeat: no-repeat;
        background-position: center 0px;
  }
  .element.element_num_3{
      background-image: url(https://threejs-plactice.vercel.app/mac/img/f3.png);
      background-repeat: no-repeat;
        background-position: center 0px;
  }
  .element.element_num_4{
      background-image: url(https://threejs-plactice.vercel.app/mac/img/f4.png);
      background-repeat: no-repeat;
        background-position: center 0px;
  }
  .element.element_num_5{
      background-image: url(https://threejs-plactice.vercel.app/mac/img/f5.png);
      background-repeat: no-repeat;
        background-position: center 0px;
  }
  .element.element_num_6{
      background-image: url(https://threejs-plactice.vercel.app/mac/img/f6.png);
      background-repeat: no-repeat;
        background-position: center 0px;
  }
  .element.element_num_7{
      background-image: url(https://threejs-plactice.vercel.app/mac/img/f7.png);
      background-repeat: no-repeat;
        background-position: center 0px;
  }
  .element.element_num_8{
      background-image: url(https://threejs-plactice.vercel.app/mac/img/f8.png);
      background-repeat: no-repeat;
        background-position: center 0px;
  }
  .element.element_num_9{
      background-image: url(https://threejs-plactice.vercel.app/mac/img/f9.png);
      background-repeat: no-repeat;
        background-position: center 0px;
  }
  .element.element_num_10{
      background-image: url(https://threejs-plactice.vercel.app/mac/img/f10.png);
      background-repeat: no-repeat;
        background-position: center 0px;
  }
  .element.element_num_11{
      background-image: url(https://threejs-plactice.vercel.app/mac/img/f11.png);
      background-repeat: no-repeat;
        background-position: center 0px;
  }
  .element.element_num_12{
      background-image: url(https://threejs-plactice.vercel.app/mac/img/f12.png);
      background-repeat: no-repeat;
        background-position: center 0px;
  }
  .element.element_num_13 {
      background-image: url(https://threejs-plactice.vercel.app/mac/img/power.png);
      background-repeat: no-repeat;
      background-position: center;
  }
  .element.element_num_28 .typing_three {
    right: calc(50% + 25px);
  }
  .element.element_num_41 {
    height: 260px;
  }
  .element.element_num_41 .typing_one {
      right: calc(50%);
      top: calc(50% - 108px);
  }
  .element.element_num_41 .typing_four {
      right: calc(50%);
      top: calc(50% + 108px);
  }
  .element.element_num_55,
  .element.element_num_67 {
    width: 190px;
  }
  .element.element_num_55 .typing_three{
    right: calc(50% + 45px);
  }
  .element.element_num_67 .typing_three{
    right: calc(50% - 45px);
  }
  .element.element_num_69 .typing_one{
    right: calc(50% - 25px);
  }
  .element.element_num_70,
  .element.element_num_74{
      background-image: url(https://threejs-plactice.vercel.app/mac/img/command.png);
      background-repeat: no-repeat;
        background-position: 107px 10px;
  }
  .element.element_num_74{
        background-position: 10px 10px;
  }
  .element.element_num_70,
  .element.element_num_71,
  .element.element_num_73,
  .element.element_num_74 {
    width: 150px;
  }
  .element.element_num_72 {
    width: 420px;
  }
  .element.element_num_77,
  .element.element_num_78 {
    height: 60px;
  }
  .element.element_num_76 .typing_one,
  .element.element_num_77 .typing_one,
  .element.element_num_78 .typing_one,
  .element.element_num_79 .typing_one {
    top: 50%;
  }
`

type ParamsAnimate = {
  object: THREE.Object3D
  composer: EffectComposer
  m_move: any
}

let m_move = 0;

const Canvas: React.FC = () => {

  const onCanvasLoaded = (canvas: HTMLCanvasElement) => {

    if (!canvas) {
      return
    }
    const scene = new Scene()
    const camera = new PerspectiveCamera( 75, canvas.clientWidth / canvas.clientHeight, 0.1, 1500);
    camera.position.set( 0, 0, 400 );

    const renderer = new WebGLRenderer({ canvas: canvas, antialias: true, alpha: true })
    renderer.setSize(2600, 1300)

    const object = new Object3D()
    scene.add(object)

    scene.fog = new Fog(0xffffff, 1, 1000)
  
    const ambient = new AmbientLight( 0x222222 );
    scene.add( ambient );

    const composer = new EffectComposer(renderer)
    const renderPass = new RenderPass(scene, camera)
    composer.addPass(renderPass)

    animate({ object, composer, m_move })
  }

  // for animation
  const animate = ({ object, composer, m_move }: ParamsAnimate) => {
    window.requestAnimationFrame(() => animate({ object, composer, m_move }))
    object.rotation.y += 0.005;

    composer.render()
  }

  return (
    <>
      <StyleWrapper>
        <canvas className="container" ref={onCanvasLoaded} />
      </StyleWrapper>
    </>
  )
}
export default Canvas