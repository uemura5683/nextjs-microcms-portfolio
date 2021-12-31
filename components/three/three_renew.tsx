import React from 'react'
import { WebGLRenderer, Scene, PerspectiveCamera, Object3D, CubeTextureLoader, HemisphereLight, SphereGeometry, TextureLoader, MeshStandardMaterial, MeshPhongMaterial, Mesh
} from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass';

type ParamsAnimate = {
  object: THREE.Object3D
  composer: EffectComposer
  planesphere: THREE.Object3D
}

const Canvas: React.FC = () => {

  const onCanvasLoaded = (canvas: HTMLCanvasElement) => {

    if (!canvas) {
      return
    }

    let afterimagePass;

    // init scene
    const scene = new Scene()

    const camera = new PerspectiveCamera( 45, canvas.clientWidth / canvas.clientHeight);
    camera.position.set( 10, 10, 1000 );

    // init renderer
    const renderer = new WebGLRenderer({ canvas: canvas, antialias: true, alpha: true })
    renderer.setSize(2600, 1300)

    // init object
    const object = new Object3D()
    scene.add(object)

    // add object
    const cubeTextureLoader = new CubeTextureLoader()
    const textureCube = cubeTextureLoader.load( [
      'images/three/px.png', 'images/three/nx.png',
      'images/three/py.png', 'images/three/ny.png',
      'images/three/pz.png', 'images/three/nz.png'          
    ] );
    const planematerial = new MeshStandardMaterial( {
      color: 0xffffff,
      roughness: 0,
      metalness: 1,
      envMap: textureCube
    } );
    const planegeometry = new SphereGeometry( 200, 200, 200 );
    const planesphere = new Mesh( planegeometry, planematerial );

    object.add( planesphere );

    let planet_array = ['sun', 'jupiter', 'mars', 'mercury', 'neptune', 'pluto', 'saturn', 'uranus', 'venus', 'moon', 'earch'];

    planet_array.map(function ( planet ) {
      const p_Geometry = new SphereGeometry( 20, 20, 20 );
      const p_texture = new TextureLoader().load('images/three/' + planet + '.jpg');      
      const p_materials = new MeshStandardMaterial( { color: 0xffffff, map:p_texture } );
      const p_box = new Mesh( p_Geometry, p_materials );
      switch (planet) {
        case 'sun':       
          p_box.position.set(250, 500, 500);
          break;
        case 'jupiter':       
          p_box.position.set(-500, 0, 500);
          break;
        case 'mars':       
          p_box.position.set(250, -500, 0);
          break;
        case 'mercury':       
          p_box.position.set(0, 250, 500);
          break;
        case 'neptune':       
          p_box.position.set(500, 0, 500);
          break;
        case 'pluto':       
          p_box.position.set(-500, 500, -250);
          break;
        case 'saturn':       
          p_box.position.set(-250, 0, -250);
          break;
        case 'uranus':       
          p_box.position.set(500, 0, 0);
          break;          
        case 'venus':       
          p_box.position.set(0, -250, -250);
          break;          
        case 'moon':
          p_box.position.set(-250, -250, -500);
          break;
        case 'earch':
          p_box.position.set(0, -250, 250);
          break;
      }
      object.add(p_box);    
    });

    const geometry = new SphereGeometry(2, 2, 2),
          size = 1;
    for (let i = 0; i < 200; i++) {
      let rubble = [0Xde9ed8, 0Xe6fffe, 0Xf08100, 0Xe7f4f9, 0Xfbfcef],
          rubbleNo = Math.floor( Math.random() * rubble.length),
          material = new MeshPhongMaterial({
            color: rubble[rubbleNo]
          })

      const mesh = new Mesh(geometry, material)
      mesh.position.set(size * Math.random() - 0.5, size * Math.random() - 0.5, size * Math.random() - 0.5).normalize()
      mesh.position.multiplyScalar(Math.random() * 1000)
      mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2)
      object.add(mesh)
    }

    scene.add( new HemisphereLight( 0x443333, 0x222233, 4 ) );
  
    const composer = new EffectComposer(renderer)
    const renderPass = new RenderPass(scene, camera)
    composer.addPass(renderPass)

    afterimagePass = new AfterimagePass();
    composer.addPass( afterimagePass );

    afterimagePass.uniforms[ "damp" ].value = 0.6;

    animate({ object, composer, planesphere })
  }

  // for animation
  const animate = ({ object, composer, planesphere }: ParamsAnimate) => {

    window.requestAnimationFrame(() => animate({ object, composer, planesphere }))
    object.rotation.y += 0.025
    let number = object.rotation.y
    planesphere.position.y += 0 - (Math.sin(number) * .5);
    composer.render()
  }

  return (
    <>
      <div className="WrapCanvas">
        <canvas className="Canvas" ref={onCanvasLoaded} />
      </div>
    </>
  )
}

export default Canvas