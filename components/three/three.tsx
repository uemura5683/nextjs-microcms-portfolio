import React from 'react'
import { WebGLRenderer, Scene, PerspectiveCamera, Object3D, Fog, DirectionalLight, AmbientLight, SphereGeometry, TextureLoader, MeshStandardMaterial, SphereBufferGeometry, MeshPhongMaterial, Mesh
} from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass'

type ParamsAnimate = {
  object: THREE.Object3D
  composer: EffectComposer
  m_box: THREE.Object3D
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

    /**
     * earth
     */
    const e_Geometry = new SphereGeometry( 200, 64, 64 );
    const e_texture = new TextureLoader().load('https://raw.githubusercontent.com/uemura5683/threejs_plactice/master/earth_vol2/img/earch.jpg');
    const e_materials = new MeshStandardMaterial( { color: 0xffffff, map:e_texture } );
    const e_box = new Mesh(e_Geometry, e_materials);
    object.add(e_box);
  
    /**
     * moon
     */
    const m_Geometry = new SphereGeometry( 20, 32, 32 );
    const m_texture = new TextureLoader().load('https://raw.githubusercontent.com/uemura5683/threejs_plactice/master/earth_vol2/img/moon.jpg');
    const m_materials = new MeshStandardMaterial( { color: 0xffffff, map:m_texture } );
    const m_box = new Mesh( m_Geometry, m_materials );
    m_box.position.set(0, 0, 250);
    object.add(m_box);

    const geometry = new SphereBufferGeometry(2, 3, 4),
          size = 1;

    /**
     * sprite
     */
    for (let i = 0; i < 1000; i++) {
      const rubble = [0X3a2424, 0X3f0a0a, 0X380e0e, 0X331233, 0X180018],
            rubbleNo = Math.floor( Math.random() * rubble.length),
            material = new MeshPhongMaterial({
              color: rubble[rubbleNo],
              flatShading: true
            })

      const mesh = new Mesh(geometry, material)
      mesh.position.set(size * Math.random() - 0.5, size * Math.random() - 0.5, size * Math.random() - 0.5).normalize()
      mesh.position.multiplyScalar(Math.random() * 500)
      mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2)
      mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 2
      object.add(mesh)
    }

    const directionalLight = new DirectionalLight( 0xffffff, 1 );
    directionalLight.position.set( 0, 100, 100 );
    scene.add( directionalLight );
  
    const ambient = new AmbientLight( 0x222222 );
    scene.add( ambient );

    const composer = new EffectComposer(renderer)
    const renderPass = new RenderPass(scene, camera)
    composer.addPass(renderPass)

    const effectGlitch = new GlitchPass()
    effectGlitch.renderToScreen = true
    composer.addPass(effectGlitch)

    const controls = new function () {
      this.goWild = false;
      this.updateEffect = function () {
          effectGlitch.goWild = controls.goWild;
      };
    };
    animate({ object, composer, m_box, m_move })
  }

  // for animation
  const animate = ({ object, composer, m_box, m_move }: ParamsAnimate) => {
    window.requestAnimationFrame(() => animate({ object, composer, m_box, m_move }))
    
    object.rotation.y += 0.005;

    m_move -= .5;
    const m_radian = ( m_move * Math.PI ) / 100;
    m_box.position.x = 300 * Math.sin( m_radian );
    m_box.position.y = 0;
    m_box.position.z = 300 * Math.cos( m_radian );

    composer.render()
  }

  return (
    <>
      <style jsx>{`
        canvas {
          width: 100% !important;
          height: 50% !important;
          background: radial-gradient(#1c1946,#000000);
          backdrop-filter:  brightness(50%);
        }
      `}</style>
      <canvas ref={onCanvasLoaded} />
    </>
  )
}

export default Canvas