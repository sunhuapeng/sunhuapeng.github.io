import * as THREE from 'three'
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { AmbientLight, DirectionalLight } from 'three'
import { data } from './data'
import { loadFbx, loadTexture } from '../utils/loaders'
let controls: OrbitControls

import { WebGLRenderer } from 'three'

import { PerspectiveCamera, Vector3 } from 'three'

import { Color, Scene } from "three";
import _ from 'lodash'
const menu: any = document.querySelector('.menu')
const helperGroup = new THREE.Group(), group2D = new THREE.Group(), earthGroup = new THREE.Group(), sphereGroup = new THREE.Group()
let earth: any = null, scene: THREE.Scene, camera: PerspectiveCamera, renderer: WebGLRenderer, ambientLight, labelRenderer: CSS2DRenderer
const loading = document.getElementsByClassName('loading')[0]



const jd = document.getElementsByClassName('jd')[0]
const panpan = document.getElementsByClassName('panpan')[0]
const btn = document.getElementsByClassName('btn')[0]
let isUpdate = true
loadEarth()

async function loadEarth() {
    earth = await loadFbx(import.meta.env.VITE_ASSETS_URL + 'assets/models/the-Earth.fbx', async (event: ProgressEvent) => {
        const { total, loaded } = event
        const count = Math.min(Math.ceil(loaded / total * 100), 100)
        rendeDom(count)
        console.log('count', count);

        // if (count === 100 && !scene) {
        // loading.style.display = "none"
        // }
    })

    // 地图贴图
    const diqiuTexture = await loadTexture(import.meta.env.VITE_ASSETS_URL + 'assets/models/the-Earth.jpeg')
    earth.children[0].material.map = diqiuTexture

    const box3 = new THREE.Box3()
    box3.expandByObject(earth)
    const size = new THREE.Vector3()
    box3.getSize(size)

    // 地球替代品用于射线判断
    const geometry = new THREE.SphereGeometry(size.y / 2.06, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sphere = new THREE.Mesh(geometry, material);
    sphereGroup.add(sphere)

    init()
    earthGroup.add(earth.children[0])
}

// 渲染2d文字
function initThreeFloorName(d: any) {
    var image = document.createElement("img");
    image.className = "country-image";
    image.setAttribute('src', d.mapUrl)
    if (d.style) {
        for (let key in d.style) {
            const s = d.style[key]
            image.style[key] = s

        }
    }
    var earthLabel = new CSS2DObject(image);
    earthLabel.position.copy(d.vector);
    group2D.add(earthLabel);
}

async function init() {
    // 场景
    scene = new THREE.Scene();
    const sceneTexture = await loadTexture(import.meta.env.VITE_ASSETS_URL + 'assets/textures/bg.jpeg')
    sceneTexture.wrapS = THREE.RepeatWrapping;
    sceneTexture.wrapT = THREE.RepeatWrapping;
    sceneTexture.repeat.set(1, 1);
    scene.background = sceneTexture

    // scene.add(helperGroup);
    scene.add(group2D);
    scene.add(earthGroup);
    // scene.add(sphereGroup);

    // 镜头
    camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.2, 2000000);
    const cameraPos = new Vector3(0.588, 1.76, 15.6);
    camera.position.copy(cameraPos)

    // 渲染器
    renderer = new WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.needsUpdate = true
    document.body.appendChild(renderer.domElement);

    labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.domElement.style.position = "absolute";
    labelRenderer.domElement.style.top = "0";
    labelRenderer.domElement.style.pointerEvents = "none";
    document.body.appendChild(labelRenderer.domElement);

    // 灯光
    ambientLight = new AmbientLight(0xffffff, 8.2);
    scene.add(ambientLight)

    // 辅助线
    const axesHelper = new THREE.AxesHelper(100);
    helperGroup.add(axesHelper);


    controls = new OrbitControls(camera, renderer.domElement);
    // controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5
    // controls.addEventListener('change',rayMesh
    //  () => {
    //     if (isUpdate) {

    //         isUpdate = false
    //         rayMesh()
    //         let timeout: any = setTimeout(() => {
    //             isUpdate = true
    //             clearInterval(timeout)
    //             timeout = null
    //         }, 100)
    //     }
    // }
    // )

    let menuHtml = ``
    for (let i = 0; i < data.length; i++) {
        const d = data[i]
        initThreeFloorName(d)
        menuHtml += appendMenuList(d)
    }
    menu.innerHTML = menuHtml
    loading.style.display = "none"
    menu.onclick = (e) => {
        e.stopPropagation()
        const node = e.target
        console.log(node.nodeName)
        if (node.nodeName === 'LI') {
            console.log(node.id)
            const d = data.find((d: any) => d.country === node.id)
            const v = d?.vector
            const v3 = new THREE.Vector3(v?.x, v?.y, v?.z)
            camera.position.copy(v3.clone().setLength(10))
            camera.lookAt(v3)
            camera.updateProjectionMatrix()


        }
    }

    ray()

    animate();

}

const a = () => {
    console.log('123')
}
function appendMenuList(data: any) {
    return `<li id="${data.country}">
    <img src="${data.iconUrl}"/>
        <p>
        ${data.country}
        </p>
    </li>`


}
// 循环渲染
function animate() {
    requestAnimationFrame(animate);
    render();
}

// 渲染函数
function render() {
    controls.update(); //更新控制器
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);

    if (isUpdate) {
        isUpdate = false
        rayMesh()
        let timeout: any = setTimeout(() => {
            isUpdate = true
            clearInterval(timeout)
            timeout = null
        }, 100)
    }

}

function ray() {
    let mouse = new THREE.Vector2(); //鼠标位置
    var raycaster = new THREE.Raycaster();
    window.addEventListener("click", (event) => {
        mouse.x = (event.clientX / document.body.offsetWidth) * 2 - 1;
        mouse.y = -(event.clientY / document.body.offsetHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        var raylist = raycaster.intersectObjects(earthGroup.children);
        console.log(raylist)
        // console.log(JSON.stringify({
        //     vector: new Vector3(raylist[0].point.x,
        //         raylist[0].point.y,
        //         raylist[0].point.z,),
        //     country: '日本',
        //     mapUrl: '../',
        //     iconUrl: '../'
        // }))
        // console.log(raylist[0])
    });
}

// 物体之间的射线
function rayMesh() {
    group2D.traverse((text: any) => {
        if (!text.isGroup) {
            const opt = pointRay(camera.position, text.position, sphereGroup);
            text.element.style.opacity = Number(!opt).toString();
        }
    });
}

function pointRay(star, end, children) {
    let nstar = star.clone(); // 克隆一个新的位置信息，这样不会影响传入的三维向量的值
    let nend = end.clone().sub(nstar).normalize(); // 克隆一个新的位置信息，这样不会影响传入的三维向量的值

    const raycaster = new THREE.Raycaster(nstar, nend); // 创建一个正向射线
    const intersects = raycaster.intersectObjects(
        children.children,
        true
    );
    let jclang = 0
    let textlang = 0
    if (intersects.length != 0) {
        jclang = star.distanceTo(intersects[0].point)
        textlang = star.distanceTo(end)
    }
    return jclang < textlang;
}

// function pointRay(star, end, children) {
//     // createLine(star, end);
//     let nstar = star.clone(); // 克隆一个新的位置信息，这样不会影响传入的三维向量的值
//     let nend = end.clone().sub(nstar).normalize(); // 克隆一个新的位置信息，这样不会影响传入的三维向量的值
//     console.log(nstar, nend)
//     const raycaster = new THREE.Raycaster(nstar, nend); // 创建一个正向射线
//     const intersects = raycaster.intersectObjects(
//         children.children,
//         true
//     );
//     return intersects.length != 0;

// }
function rendeDom(speed: number) {
    if (jd && panpan && btn) {
        jd.style.width = speed + '%'
        panpan.style.left = speed + '%'
        panpan.style.marginLeft = '-83px'
        btn.style.left = speed + '%'
        // console.log('speed',speed);

        // if (speed === 100) {
        //     loading.style.display = "none"
        // }
    }
}