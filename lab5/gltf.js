import * as THREE from 'three'
import { GLTFLoader, OrbitControls } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xcccccc);

const camera = new THREE.PerspectiveCamera(
55,
window.innerWidth / window.innerHeight,
0.1,
100
)
camera.position.set(3, 2, 4)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const control = new OrbitControls(camera, renderer.domElement)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.35)
const dir = new THREE.DirectionalLight(0xffffff, 2.5)
dir.position.set(5, 8, 4)
scene.add(dir, ambientLight)

const loader = new GLTFLoader()
loader.load('/modeli.glb', (gltf) => {
    gltf.scene.rotation.y = Math.PI
    scene.add(gltf.scene)

    let meshCount = 0
    let totalVertices = 0
    let totalFaces = 0

    gltf.scene.traverse((obj) => {
        if (!obj.isMesh) return
        const geo = obj.geometry
        const vertices = geo.attributes.position.count
        const faces = geo.index ? geo.index.count / 3 : vertices / 3

        meshCount++
        totalVertices += vertices
        totalFaces += faces
        console.log(`${meshCount}. ${obj.name} | vertices: ${vertices} | faces: ${faces}`)
    })

    console.log('Total meshes:', meshCount)
    console.log('Total vertices:', totalVertices)
    console.log('Total faces:', totalFaces)
})
//TODO:ne Console Log te shfaqen te gjitha Meshes qe jan perdorur te modeli.glb bashk me numrin total te kulmeve dhe faqeve
function animate() {
requestAnimationFrame(animate)
control.update()
renderer.render(scene, camera)
}
animate()