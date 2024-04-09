import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer'
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer'
import { CrystalGroup, DiscardsGroup, EnemyGroup, box3HelperGroup, floorGroup, mouseState, weaponGroup } from './variable'
import { getRoadTexture } from './floor';

const cameraPos = new THREE.Vector3(5, 10, 5);

export let scene: THREE.Scene,
    renderer: THREE.WebGLRenderer,
    css2dRenderer: CSS2DRenderer,
    css3dRenderer: CSS3DRenderer,
    controls: OrbitControls,
    ambientLight: THREE.AmbientLight,
    light: THREE.DirectionalLight,
    camera: THREE.PerspectiveCamera


export const init = async () => {
    scene = new THREE.Scene()
    scene.background = await getRoadTexture('taylor-van-riper-yQorCngxzwI-unsplash')
    const canvas = document.getElementsByClassName('main3d')
    if (canvas) {
        renderer = new THREE.WebGLRenderer({
            canvas: canvas[0],
            alpha: true,
            powerPreference: 'high-performance' // 高性能
        });
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.needsUpdate = true
        renderer.shadowMap.autoUpdate = true
    }

    css3dRenderer = new CSS3DRenderer();
    css3dRenderer.setSize(window.innerWidth, window.innerHeight);
    css3dRenderer.domElement.classList.add('css3d')
    document.body.appendChild(css3dRenderer.domElement);

    renderer.setSize(window.innerWidth, window.innerHeight);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.2, 2000000);
    camera.position.copy(cameraPos)

    // 控制器
    let controlsStartPos = new THREE.Vector3()

    controls = new OrbitControls(camera, renderer.domElement)
    controls.addEventListener('start', () => {
        controlsStartPos.copy(camera.position)
    })

    controls.addEventListener('end', () => {
        mouseState.MOUSE_MOVE_FLAG = controlsStartPos.distanceToSquared(camera.position) === 0
    })
    controls.addEventListener('change', () => {
        // console.log(camera.position);

    })

    initLight()
    scene.add(floorGroup)
    scene.add(weaponGroup)
    scene.add(EnemyGroup)
    scene.add(DiscardsGroup)
    scene.add(box3HelperGroup)
    scene.add(CrystalGroup)
}
const initLight = () => {
    ambientLight = new THREE.AmbientLight(0x707070);

    light = new THREE.DirectionalLight(0xffffff, 4);
    light.position.set(1181.4843537287065, 1580.039682987524, 1809.053759094986);
    light.castShadow = true;
    const d = 140;
    light.shadow.camera.left = - d;
    light.shadow.camera.right = d;
    light.shadow.camera.top = d;
    light.shadow.camera.bottom = - d;

    light.shadow.camera.near = 2;
    light.shadow.camera.far = 10;

    light.shadow.mapSize.x = 102;
    light.shadow.mapSize.y = 102;

    scene.add(light)
    scene.add(ambientLight)
}


