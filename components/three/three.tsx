import React from 'react'
import { WebGLRenderer, Scene, PerspectiveCamera, Object3D, Fog, DirectionalLight, AmbientLight, SphereGeometry, TextureLoader, MeshStandardMaterial, SphereBufferGeometry, MeshPhongMaterial, DoubleSide, Mesh
} from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass'

type ParamsAnimate = {
  object: THREE.Object3D
  composer: EffectComposer
}

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

    const e_Geometry = new SphereGeometry( 200, 64, 64 );
    const e_texture = new TextureLoader().load('https://raw.githubusercontent.com/uemura5683/threejs_plactice/master/earth_vol2/img/earch.jpg');
    const e_materials = new MeshStandardMaterial( { color: 0xffffff, map:e_texture } );
    const e_box = new Mesh(e_Geometry, e_materials);
    object.add(e_box);
  
    const m_Geometry = new SphereGeometry( 20, 32, 32 );
    const m_texture = new TextureLoader().load('https://raw.githubusercontent.com/uemura5683/threejs_plactice/master/earth_vol2/img/moon.jpg');
    const m_materials = new MeshStandardMaterial( { color: 0xffffff, map:m_texture } );
    const m_box = new Mesh( m_Geometry, m_materials );
    m_box.position.set(0, 0, 250);
    object.add(m_box);

    const s_Geometry = new SphereGeometry( 20, 32, 32 );
    const s_texture = new TextureLoader().load('https://raw.githubusercontent.com/uemura5683/threejs_plactice/master/earth_vol2/img/sun.jpg');
    const s_materials = new MeshStandardMaterial( { color: 0xffffff, map:s_texture } );
    const s_box = new Mesh( s_Geometry, s_materials );
    s_box.position.set(0, -250, 250);
    object.add(s_box);    

    const geometry = new SphereBufferGeometry(2, 3, 4),
          size = 1;

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
    animate({ object, composer })
  }

  // for animation
  const animate = ({ object, composer }: ParamsAnimate) => {

    window.requestAnimationFrame(() => animate({ object, composer }))
    object.rotation.y += 0.015
    object.rotation.z += 0.015
    composer.render()
  }

  return (
    <>
      <style jsx>{`
        canvas {
          width: 100% !important;
          height: 50% !important;
          background-image: url(https://uemu-engineer.com/images/three/planet.jpg);
          background-size: cover;
          backdrop-filter:  brightness(50%);
        }
      `}</style>
      <canvas ref={onCanvasLoaded} />
    </>
  )
}

export default Canvas