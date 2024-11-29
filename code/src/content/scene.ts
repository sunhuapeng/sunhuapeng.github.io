import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";

let controlsStartPos = new THREE.Vector3();
let controlsMoveFlag = false;

const canvas = document.getElementById('three') as any
const width = canvas.offsetWidth
const height = canvas.offsetHeight
const renderer = new THREE.WebGLRenderer({
    // antialias: true,
    //  alpha: true,
    canvas
}
); // 创建WebGL渲染器
renderer.setPixelRatio(window.devicePixelRatio); // 设置像素比
renderer.setSize(width, height); // 设置渲染器尺寸
renderer.toneMapping = THREE.ACESFilmicToneMapping; // 设置色调映射
// renderer.outputColorSpace = THREE.LinearSRGBColorSpace; // 设置输出颜色空间为线性sRGB
// renderer.toneMapping = THREE.ACESFilmicToneMapping; // 设置色调映射为ACES电影级
// renderer.toneMappingExposure = 0.8; // 设置色调映射曝光度
// renderer.shadowMap.enabled = true; // 启用阴影
// renderer.shadowMap.type = THREE.PCFSoftShadowMap; // 使用PCF柔和阴影

// document.body.appendChild(renderer.domElement); // 将渲染器添加到DOM

const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(width, height);
labelRenderer.domElement.classList.add('label-renderer');
const main = document.querySelector('main')
main && main.appendChild( labelRenderer.domElement );

const camera = new THREE.PerspectiveCamera(
    45, // 增大视场角实现鱼眼效果
    width / height,
    0.001, // 减小近裁剪面距离
    1000
); // 创建透视相机

camera.position.set(-1.6707507035914162, 1.261964142736961, 1.219912908011162); // 设置相机位置

const scene = new THREE.Scene(); // 创建场景

scene.background = new THREE.Color(0x0f1319); // 设置场景背景
// scene.add(new THREE.AxesHelper(100))

// 创建立方体渲染目标
const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256);
cubeRenderTarget.texture.type = THREE.HalfFloatType; // 设置纹理类型


const controls = new OrbitControls(camera, renderer.domElement); // 创建轨道控制器


controls.addEventListener('start', () => {
    controlsStartPos.copy(camera.position)
})


controls.addEventListener('end', () => {
    controlsMoveFlag = controlsStartPos.distanceToSquared(camera.position) === 0
})


// const stats = new Stats(); // 创建性能监控实例
// document.body.appendChild(stats.dom); // 将性能监控添加到DOM

controls.addEventListener('change', () => {
    // console.log('change', camera.position);
})
export {
    scene,
    renderer,
    camera,
    controls,
    cubeRenderTarget,
    controlsMoveFlag,
    labelRenderer,
    width,height
}
