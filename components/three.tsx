import React from 'react'
import {
  WebGLRenderer,
  Scene, 
  PerspectiveCamera,
  Object3D,
  Fog,
  DirectionalLight,
  AmbientLight,
  SphereBufferGeometry,
  MeshPhongMaterial,
  Mesh
} from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass'

import useGetWindowSize from '../components/hooks/useGetWindowSize'

type ParamsAnimate = {
  object: THREE.Object3D
  composer: EffectComposer
}

const Canvas: React.FC = () => {
  const { width, height } = useGetWindowSize()

  const onCanvasLoaded = (canvas: HTMLCanvasElement) => {
    if (!canvas) {
      return
    }

    // init scene
    const scene = new Scene()
    const camera = new PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)
    camera.position.z = 240

    // init renderer
    const renderer = new WebGLRenderer({ canvas: canvas, antialias: true })
    renderer.setClearColor('#1d1d1d')
    renderer.setSize(width, height)

    // init object
    const object = new Object3D()
    scene.add(object)

    // add fog
    scene.fog = new Fog(0xffffff, 1, 1000)

    // add light
    const spotLight = new DirectionalLight(0xffffff)
    spotLight.position.set(1, 1, 1)
    scene.add(spotLight)
    const ambientLight = new AmbientLight(0x222222)
    scene.add(ambientLight)

    // add object
    const geometry = new SphereBufferGeometry(2, 3, 4)
    for (let i = 0; i < 100; i++) {
      const material = new MeshPhongMaterial({
        color: 0x000000,
        flatShading: true
      })
      const mesh = new Mesh(geometry, material)
      mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.1).normalize()
      mesh.position.multiplyScalar(Math.random() * 400)
      mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2)
      mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 50
      object.add(mesh)
    }

    // add postprocessing
    const composer = new EffectComposer(renderer)
    const renderPass = new RenderPass(scene, camera)
    composer.addPass(renderPass)

    const effectGlitch = new GlitchPass(64)
    // true => exstreme
    effectGlitch.goWild = false
    effectGlitch.renderToScreen = true
    composer.addPass(effectGlitch)

    animate({ object, composer })
  }

  // for animation
  const animate = ({ object, composer }: ParamsAnimate) => {
    window.requestAnimationFrame(() => animate({ object, composer }))
    object.rotation.x += 0.01
    object.rotation.z += 0.01
    composer.render()
  }

  return (
    <div className="WrapCanvas">
      <canvas className="Canvas" ref={onCanvasLoaded} />
    </div>
  )
}

export default Canvas