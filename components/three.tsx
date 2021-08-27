import React from 'react'
import {
  WebGLRenderer,
  Scene, 
  PerspectiveCamera,
  Object3D,
  Fog,
  DirectionalLight,
  AmbientLight,
  SphereGeometry,
  TextureLoader,
  MeshStandardMaterial,
  SphereBufferGeometry,
  MeshPhongMaterial,
  Vector3,
  Points,
  AdditiveBlending,
  PointsMaterial,
  DoubleSide,
  Mesh,
  SrcAlphaSaturateFactor
} from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass'

type ParamsAnimate = {
  object: THREE.Object3D
  composer: EffectComposer
  m_box: THREE.Object3D
}

const Canvas: React.FC = () => {

  const onCanvasLoaded = (canvas: HTMLCanvasElement) => {

    if (!canvas) {
      return
    }
    if( canvas ) {

    }
    // init scene
    const scene = new Scene()

    const camera = new PerspectiveCamera( 75, canvas.clientWidth / canvas.clientHeight, 0.1, 4000);
    camera.position.set( 0, 0, 400 );

    // init renderer
    const renderer = new WebGLRenderer({ canvas: canvas, antialias: true })
    renderer.setClearColor('#000000')
    renderer.setSize(2600, 1300)

    // init object
    const object = new Object3D()
    scene.add(object)

    // add fog
    scene.fog = new Fog(0xffffff, 1, 1000)

    // add object
    const e_Geometry = new SphereGeometry( 200, 64, 64 );
    const e_texture = new TextureLoader().load('https://raw.githubusercontent.com/uemura5683/threejs_plactice/master/earth/img/earch.jpg');
    const e_materials = new MeshStandardMaterial( { color: 0xffffff, map:e_texture } );
    const e_box = new Mesh(e_Geometry, e_materials);
    object.add(e_box);
  
    const m_Geometry = new SphereGeometry( 15, 64, 64 );
    const m_texture = new TextureLoader().load('https://raw.githubusercontent.com/uemura5683/threejs_plactice/master/earth/img/moon.jpg');
    const m_materials = new MeshStandardMaterial( { color: 0xffffff, map:m_texture } );
    const m_box = new Mesh( m_Geometry, m_materials );
    object.add(m_box);
  
    const c_Geometry = new SphereGeometry( 205, 64, 64 );
    const c_texture = new TextureLoader().load('https://raw.githubusercontent.com/uemura5683/threejs_plactice/master/earth/img/crowd.png');
    const c_materials = new MeshStandardMaterial( { map:c_texture, transparent: true, side: DoubleSide } );
    const c_box = new Mesh( c_Geometry, c_materials );
    object.add(c_box);


    const geometry = new SphereBufferGeometry(2, 3, 4),
          size = 1;
    for (let i = 0; i < 2000; i++) {
      const material = new MeshPhongMaterial({
        color: 0xffffff,
        flatShading: true
      })
      const mesh = new Mesh(geometry, material)
      mesh.position.set(size * Math.random() - 0.5, size * Math.random() - 0.5, size * Math.random() - 0.5).normalize()
      mesh.position.multiplyScalar(Math.random() * 400)
      mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2)
      mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 2
      object.add(mesh)
    }

    const directionalLight = new DirectionalLight( 0xffffff, 1 );
    directionalLight.position.set( 205, 1300, 80 );
    scene.add( directionalLight );
  
    const ambient = new AmbientLight( 0x222222 );
    scene.add( ambient );

    // add postprocessing
    const composer = new EffectComposer(renderer)
    const renderPass = new RenderPass(scene, camera)
    composer.addPass(renderPass)

    const effectGlitch = new GlitchPass(64)
    effectGlitch.renderToScreen = true
    composer.addPass(effectGlitch)


    var controls = new function () {
      this.goWild = false;
      this.updateEffect = function () {
          effectGlitch.goWild = controls.goWild;
      };
    };


    animate({ object, composer, m_box })

  }


  // for animation
  const animate = ({ object, composer, m_box }: ParamsAnimate) => {
    window.requestAnimationFrame(() => animate({ object, composer, m_box }))

    const m_radian = ( .5 * Math.PI ) / 1000;  
    m_box.position.x = 300 * Math.sin( m_radian );
    m_box.position.y = 50;
    m_box.position.z = 300 * Math.cos( m_radian );

    object.rotation.y += 0.01
    composer.render()
  }

  return (
    <div className="WrapCanvas">
      <canvas className="Canvas" ref={onCanvasLoaded} />
      <div className="lazyload"></div>
    </div>
  )
}

export default Canvas