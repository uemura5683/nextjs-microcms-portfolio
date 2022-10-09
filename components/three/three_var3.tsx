import React from 'react'
import { BoxGeometry, BufferGeometry, DoubleSide, FontLoader, HemisphereLight, Line, LineBasicMaterial, Mesh, MeshBasicMaterial, MeshPhongMaterial, Object3D, PerspectiveCamera, ShapeGeometry, Scene, WebGLRenderer
} from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'

type ParamsAnimate = {
  object: THREE.Object3D
  composer: EffectComposer
  spherebox: THREE.Object3D
  data: number
}

let xcode = null
  , ycode = null
  , zcode = null
  , circle_size = 1000
  , data = 0;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const Canvas: React.FC = () => {
  const onCanvasLoaded = (canvas: HTMLCanvasElement) => {

    if (!canvas) {
      return
    }

    const scene = new Scene()

    const camera = new PerspectiveCamera( 45, canvas.clientWidth / canvas.clientHeight);
    camera.position.set( 10, 10, 1000 );

    const renderer = new WebGLRenderer({ canvas: canvas, antialias: true, alpha: true })
    renderer.setSize(2600, 1300)

    const object = new Object3D()
    scene.add(object)

    const spheregeometry = new BoxGeometry( circle_size, circle_size, circle_size );
    const spherematerial = new MeshPhongMaterial( {
      transparent: true,
      opacity: .4,
      color: 0x4af7fa
    } );

    const spherebox = new Mesh( spheregeometry, spherematerial );

    object.add( spherebox );

    let loader = new FontLoader();
    loader.load( 'https://threejs-plactice.vercel.app/fontloader/fonts/helvetiker_regular.typeface.json', function ( font ) {
      let matDark = new LineBasicMaterial( {
        color: 0x4af7fa,
        opacity: .7,
        side: DoubleSide
      } );
      let matLite = new MeshBasicMaterial( {
        color: 0x4af7fa,
        transparent: true,
        opacity: .7,
        side: DoubleSide
      } );

      /**
       * language
       */
      for (let i = 0; i < 50; i++) {
        let message = ['HTML', 'CSS', 'JavaScript', 'PHP', 'jQuery', 'Vue.js', 'React.js', 'Node.js', 'gulp.js', 'SCSS', 'WordPress', 'Movable Type', 'microCMS', 'TypeScript', 'golang', 'Nuxt.js', 'Next.js', 'Newt', 'Strapi', 'Firebase'],
            christalNo = Math.floor( Math.random() * message.length),
            shapes = font.generateShapes( message[christalNo], 30 ),
            text_geometry = new ShapeGeometry( shapes );
        
        text_geometry.computeBoundingBox();

        switch (true) {
          case ( i % 8 == 0 ):
            xcode = getRandomArbitrary( circle_size / 1.5, -circle_size / 1.5 );
            ycode = getRandomArbitrary( circle_size / 1.5, -circle_size / 1.5 );
            zcode = getRandomArbitrary( circle_size / 1.5, -circle_size / 1.5 );
          break;
          case ( i % 8 == 1 ):
            xcode = -getRandomArbitrary( circle_size / 1.5, -circle_size / 1.5 );
            ycode = getRandomArbitrary( circle_size / 1.5, -circle_size / 1.5 );
            zcode = getRandomArbitrary( circle_size / 1.5, -circle_size / 1.5 );
          break;
          case ( i % 8 == 2 ):
            xcode = getRandomArbitrary( circle_size / 1.5, -circle_size / 1.5 );
            ycode = -getRandomArbitrary( circle_size / 1.5, -circle_size / 1.5 );
            zcode = getRandomArbitrary( circle_size / 1.5, -circle_size / 1.5 );
          break;
          case ( i % 8 == 3 ):
            xcode = getRandomArbitrary( circle_size / 1.5, -circle_size / 1.5 );
            ycode = getRandomArbitrary( circle_size / 1.5, -circle_size / 1.5 );
            zcode = -getRandomArbitrary( circle_size / 1.5, -circle_size / 1.5 );
          break;
          case ( i % 8 == 4 ):
            xcode = -getRandomArbitrary( circle_size / 1.5, -circle_size / 1.5 );
            ycode = getRandomArbitrary( circle_size / 1.5, -circle_size / 1.5 );
            zcode = -getRandomArbitrary( circle_size / 1.5, -circle_size / 1.5 );
          break;
          case ( i % 8 == 5 ):
            xcode = getRandomArbitrary( circle_size / 1.5, -circle_size / 1.5 );
            ycode = -getRandomArbitrary( circle_size / 1.5, -circle_size / 1.5 );
            zcode = -getRandomArbitrary( circle_size / 1.5, -circle_size / 1.5 );
          break;
          case ( i % 8 == 6 ):
            xcode = -getRandomArbitrary( circle_size / 1.5, -circle_size / 1.5 );
            ycode = -getRandomArbitrary( circle_size / 1.5, -circle_size / 1.5 );
            zcode = getRandomArbitrary( circle_size / 1.5, -circle_size / 1.5 );
          break;
          default:
            xcode = -getRandomArbitrary( circle_size / 1.5, -circle_size / 1.5 );
            ycode = -getRandomArbitrary( circle_size / 1.5, -circle_size / 1.5 );
            zcode = -getRandomArbitrary( circle_size / 1.5, -circle_size / 1.5 );              
          break;
        }

        text_geometry.translate(
          xcode,
          ycode,
          zcode,
        );

        let text = new Mesh( text_geometry, matLite );
            text.position.z = -5;
            object.add( text );

            let holeShapes = [];

            for ( let i = 0; i < shapes.length; i ++ ) {
              let shape = shapes[ i ];
              if ( shape.holes && shape.holes.length > 0 ) {
                for ( let j = 0; j < shape.holes.length; j ++ ) {
                  let hole = shape.holes[ j ];
                  holeShapes.push( hole );
                }
              }
            }
            shapes.push.apply( shapes, holeShapes );
            let lineText = new Object3D();
            for ( let i = 0; i < shapes.length; i ++ ) {
              let shape = shapes[ i ],
                  points = shape.getPoints(),
                  text_geometry = new BufferGeometry().setFromPoints( points );

              text_geometry.translate(
                xcode,
                ycode,
                zcode
              );
              let lineMesh = new Line( text_geometry, matDark );
              lineText.add( lineMesh );
            }
            object.add( lineText );
        }
    } );

    scene.add( new HemisphereLight( 0x443333, 0x222233, 4 ) );
  
    const composer = new EffectComposer(renderer)
    const renderPass = new RenderPass(scene, camera)
    composer.addPass(renderPass)

    animate({ object, composer, spherebox, data })

  }

  const animate = ({ object, composer, spherebox, data }: ParamsAnimate) => {
    window.requestAnimationFrame(() => animate({ object, composer, spherebox, data }))
    data += 0.001;
    object.rotation.z += 0.001 - (Math.cos(data) * 0.01);
    object.rotation.y += 0.001 - (Math.cos(data) * 0.01);
    object.rotation.x += 0.001 - (Math.cos(data) * 0.01);
    composer.render()
  }
  return (
    <>
      <style jsx>{`
        canvas {
          width: 100% !important;
          height: 50% !important;
          background: #000000;
          opacity: 1;
        }
      `}</style>
      <canvas id="canvas" ref={onCanvasLoaded} />
    </>
  )
}
export default Canvas