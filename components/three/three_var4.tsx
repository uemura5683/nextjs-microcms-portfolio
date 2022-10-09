import React from 'react'
import { Vector3, Points, Shape, ShapeGeometry, AdditiveBlending, SphereGeometry, BufferGeometry, PointsMaterial, BufferAttribute, TextureLoader, MeshStandardMaterial, HemisphereLight, Mesh, MeshBasicMaterial, PlaneGeometry, Object3D, DoubleSide, PerspectiveCamera, Scene, WebGLRenderer
} from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'

type ParamsAnimate = {
  object: THREE.Object3D
  composer: EffectComposer
  data: number
  horizon: number
  speed: number
  e_box: THREE.Object3D
  s_box: THREE.Object3D
  points: THREE.Object3D
  planes: any
  paused: boolean
}

let paused = false
  , horizon = 3000
  , speed = 5
  , data = 0;

const Canvas: React.FC = () => {
  const onCanvasLoaded = (canvas: HTMLCanvasElement) => {

    if (!canvas) {
      return
    }

    const camera = new PerspectiveCamera( 45, canvas.clientWidth / canvas.clientHeight);
    camera.position.set( 0, -500, 20 );
    camera.lookAt(new Vector3(0,0,20));

    const renderer = new WebGLRenderer({ canvas: canvas, antialias: true, alpha: true })
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize(2600, 1300);
    renderer.shadowMap.enabled = true;

    const scene = new Scene();
    const object = new Object3D()
    scene.add(object)


    /**
    * earch
    **/
    const e_Geometry = new SphereGeometry( 100, 100, 100 );
    const e_texture = new TextureLoader().load('https://raw.githubusercontent.com/uemura5683/threejs_plactice/master/earth_vol2/img/earch.jpg');
    const e_materials = new MeshStandardMaterial( { color: 0xffffff, map:e_texture } );
    const e_box = new Mesh(e_Geometry, e_materials );
    scene.add(e_box);

    /**
    * sun
    **/
    const s_Geometry = new SphereGeometry( 200, 200, 200 );
    const s_texture = new TextureLoader().load('https://raw.githubusercontent.com/uemura5683/threejs_plactice/master/earth_vol2/img/sun.jpg');
    const s_materials = new MeshStandardMaterial( { color: 0xffffff, map:s_texture } );
    const s_box = new Mesh(s_Geometry, s_materials );
    scene.add(s_box);

    scene.add( new HemisphereLight( 0x443333, 0x222233, 3 ) );

    /**
     * mountains
     */
    const mountains_material = new MeshBasicMaterial( { color:0x666666, wireframe:true, transparent:false } );
    const mountains_shape = new Shape();
    mountains_shape.moveTo( -800, 0 );
    mountains_shape.lineTo( -650, 100 );
    mountains_shape.lineTo( -650, 0 );
    mountains_shape.lineTo( -650, 100 );
    mountains_shape.lineTo( -500, 25 );
    mountains_shape.lineTo( -400, 100 );
    mountains_shape.lineTo( -400, 0 );
    mountains_shape.lineTo( -400, 100 );
    mountains_shape.lineTo( -250, 25 );
    mountains_shape.lineTo( -75, 150 );
    mountains_shape.lineTo( -75, 0 );
    mountains_shape.lineTo( -75, 150 );
    mountains_shape.lineTo( 100, 50 );
    mountains_shape.lineTo( 100, 0 );
    mountains_shape.lineTo( 100, 50 );
    mountains_shape.lineTo( 350, 150 );
    mountains_shape.lineTo( 350, 0 );
    mountains_shape.lineTo( 350, 150 );
    mountains_shape.lineTo( 700, 50 );
    mountains_shape.lineTo( 700, 0 );
    mountains_shape.lineTo( 700, 50 );
    mountains_shape.lineTo( 800, 150 );
    mountains_shape.lineTo( 900, 0 );

    const mountains_geometry = new ShapeGeometry( mountains_shape );
    const mountains = new Mesh( mountains_geometry, mountains_material );
    mountains.rotation.x = degree(90);
    mountains.position.y = 450;
    scene.add( mountains );

    function degree(degrees) {
      return degrees * (Math.PI / 180);
    }

    /**
     * stars
     */
    let points;
    const r = 700;
    const starsNum = 1000;
    const stargeometry = new BufferGeometry();
    const positions = new Float32Array(starsNum * 3);
    const colors = new Float32Array(starsNum * 3);
    const sizes = new Float32Array(starsNum);
  
    for(let i = 0; i < starsNum; i++){
      const theta = Math.PI * Math.random();
      const phi = Math.PI * Math.random() * 2;
      positions[i * 3] = r * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = r * Math.cos(theta);
      colors[i * 3] = 1.0;
      colors[i * 3 + 1] = 1.0;
      colors[i * 3 + 2] = 1.0;
      sizes[i] = 200;
    }
  
    stargeometry.setAttribute('position',new BufferAttribute(positions,3));
    stargeometry.setAttribute('customColor',new BufferAttribute(colors,3));
    stargeometry.setAttribute('size',new BufferAttribute(sizes,1));
    const starmaterial = new PointsMaterial( {
      size: 2,
      blending: AdditiveBlending,
      color: 0xffffff
    } );
    points = new Points(stargeometry,starmaterial);
    points.position.y = 0;
    scene.add(points);

    /**
     * plane
     */
    const plane_back = new PlaneGeometry(2400, 2400, 64, 64);
    const material = new MeshStandardMaterial( {color: 0x000000, side: DoubleSide} );
    const plane_back_box =  new Mesh( plane_back, material);
    plane_back_box.position.z = -22;
    scene.add(plane_back_box);

    /**
     * plane2
     */
    let planes = [];
    let planeSegments = 60;
    let plane = new Mesh(
      new PlaneGeometry(horizon, horizon, planeSegments, planeSegments),
      new MeshBasicMaterial({ color:0x666666, wireframe:true, transparent:true })
    );
    plane.position.z = -20;
    planes[0] = plane;
    planes[1] = plane.clone();
    planes[1].position.y = plane.position.y + horizon;
    planes[2] = plane.clone();
    planes[2].position.y = plane.position.y + horizon * 2;
    scene.add(planes[0]);
    scene.add(planes[1]);
    scene.add(planes[2]);

  
    const composer = new EffectComposer(renderer)
    const renderPass = new RenderPass(scene, camera)
    composer.addPass(renderPass)

    animate({ object, composer, data, e_box, s_box, planes, paused, horizon,speed, points })
  }

  const animate = ({ object, composer, data, e_box, s_box, planes, paused, horizon, points }: ParamsAnimate) => {
    window.requestAnimationFrame(() => animate({ object, composer, data, e_box, s_box, planes, paused, horizon, speed, points }))
    data += .1;

    /**
     * plane
     */
    if (!paused) {
      if(planes[0].position.y < - horizon ){
        planes[0].position.y = planes[2].position.y + horizon;
      }
      if(planes[1].position.y < - horizon ){
        planes[1].position.y = planes[0].position.y + horizon;
      }
      if(planes[2].position.y < - horizon ){
        planes[2].position.y = planes[1].position.y + horizon;
      }
      planes[0].position.y +=- speed ;
      planes[1].position.y +=- speed ;
      planes[2].position.y +=- speed ;
    }

    /**
    * sun
    **/
    const s_radian = ( data * Math.PI ) / 50;
    s_box.position.x = 0;
    s_box.position.y = -1500 * Math.cos( s_radian );
    s_box.position.z = -1000 * Math.sin( s_radian );

    /**
    * earch
    **/
    const e_radian = ( data * Math.PI ) / 50;
    e_box.position.x = 0;
    e_box.position.y = 1500 * Math.cos( e_radian );
    e_box.position.z = 1000 * Math.sin( e_radian );

    /**
     * star
    **/
    points.rotation.x += 0.005;

    composer.render()
  }
  return (
    <>
      <style jsx>{`
        canvas {
          width: 100% !important;
          height: 50% !important;
          background-color: #000000;
          background-size: cover;
          opacity: 1;
        }
      `}</style>
      <canvas ref={onCanvasLoaded} />
    </>
  )
}
export default Canvas