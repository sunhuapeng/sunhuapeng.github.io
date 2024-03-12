import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer'
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer'
const cameraPos = new THREE.Vector3(30, 15, 30);

export let scene: THREE.Scene,
    renderer: THREE.WebGLRenderer,
    css2dRenderer: CSS2DRenderer,
    css3dRenderer: CSS3DRenderer,
    controls: OrbitControls,
    ambientLight: THREE.AmbientLight,
    light: THREE.DirectionalLight,
    camera: THREE.PerspectiveCamera

export const init = () => {
    scene = new THREE.Scene()
    scene.add(new THREE.AxesHelper(50))
    const canvas = document.getElementsByClassName('3dCanvas')

    if (canvas) {
        renderer = new THREE.WebGLRenderer({
            canvas: canvas[0],
            alpha: true,
            precision: 'highp',
            antialias: true
            // powerPreference: 'high-performance' // 高性能
        });
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.needsUpdate = true
        renderer.shadowMap.autoUpdate = true
    }

    renderer.setSize(window.innerWidth, window.innerHeight);


    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.2, 2000000);
    camera.position.copy(cameraPos)
    controls =  new OrbitControls(camera, renderer.domElement);
    initLight()

    



}
const initLight = () => {
    ambientLight = new THREE.AmbientLight(0xffffff);

    const d = 30;
    light = new THREE.DirectionalLight(0xffffff, 6);
    light.position.set(20, 80, 40);

    light.castShadow = true;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    light.shadow.camera.far = 10000;

    light.shadow.camera.left = - d;
    light.shadow.camera.right = d;
    light.shadow.camera.top = d;
    light.shadow.camera.bottom = - d;

    scene.add(ambientLight)
    scene.add(light)

}




