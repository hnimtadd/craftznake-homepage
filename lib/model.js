// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'

const draco = new DRACOLoader()
draco.setDecoderConfig({ type: 'js' })
draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')

export function loadGLTFModel(
  scene,
  glbPath,
  options = {
    receiveShadow: true,
    castShadow: true,
    scale: null,
    initialPosition: null
  }
) {
  const { receiveShadow, castShadow, scale, initialPosition } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.setDRACOLoader(draco)

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'znake'
        obj.position.x = 0
        obj.position.y = 0
        obj.castShadow = castShadow
        obj.receiveShadow = receiveShadow
        if (scale != null) {
          obj.scale.copy(scale)
        }

        if (initialPosition != null) {
          obj.position.copy(initialPosition)
        }
        scene.add(obj)

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(obj)
      },
      undefined,
      err => {
        console.log(err)
        reject(err)
      }
    )
  })
}
