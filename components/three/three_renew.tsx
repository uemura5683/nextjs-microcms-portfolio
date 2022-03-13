import React from 'react'
import { WebGLRenderer, Texture, PointsMaterial, AdditiveBlending, Scene, PerspectiveCamera, Object3D, CubeTextureLoader, HemisphereLight, SphereGeometry, TextureLoader, MeshStandardMaterial, MeshPhongMaterial, Mesh
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

    const scene = new Scene()

    const camera = new PerspectiveCamera( 45, canvas.clientWidth / canvas.clientHeight);
    camera.position.set( 10, 10, 1000 );

    const renderer = new WebGLRenderer({ canvas: canvas, antialias: true, alpha: true })
    renderer.setSize(2600, 1300)

    const object = new Object3D()
    scene.add(object)

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
      const p_Geometry = new SphereGeometry( 20 * Math.random(), 20, 20 );
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

    function generateSprite(colors) {
      var canvas = document.createElement('canvas');
      canvas.width = 16;
      canvas.height = 16;
      var context = canvas.getContext('2d');
      var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(.8, colors);
      gradient.addColorStop(1, 'rgba(0,0,64,1)');
      gradient.addColorStop(1, 'rgba(0,0,0,1)');
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
      var texture = new Texture(canvas);
      texture.needsUpdate = true;
      return texture;
   }

    for (let i = 0; i < 200; i++) {
      let rubble = ['rgba(128,255,255,1)', 'rgba(255,255,255,1)', 'rgba(255,255,128,1)', 'rgba(255,128,255,1)'],
          rubbleNo = Math.floor( Math.random() * rubble.length),
          sprite_material = new PointsMaterial({
            color: 0xffffff,
            size: 3,
            transparent: true,
            blending: AdditiveBlending,
            map: generateSprite(rubble[rubbleNo])
          });
      const mesh = new Mesh(new SphereGeometry(1, 10, 10), sprite_material)
      mesh.position.set(1 * Math.random() - 0.5, 1 * Math.random() - 0.5, 1 * Math.random() - 0.5).normalize()
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

  const animate = ({ object, composer, planesphere }: ParamsAnimate) => {
    window.requestAnimationFrame(() => animate({ object, composer, planesphere }))
    object.rotation.y += 0.025;
    object.rotation.x += 0.025;
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