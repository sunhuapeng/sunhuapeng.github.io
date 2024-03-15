import { loadGltf } from '../utils/loaders';
import { initPhysics, updatePhysics, physicsWorld } from '../utils/physics';
import { createRigidBody, setPointerBttVec, } from '../utils/rigidBody';
import { castShadow } from '../utils/shadow';
import { createVehicle, vehicleUpdate } from './createVehicle';
import { init, renderer, scene, camera, light, css3dRenderer, createText } from './scene'
import * as THREE from 'three'
import { getBox3Info, getRandomInt } from './utils'
import { changeMeshPos, createLetter, createMesh } from './createLetter';
const rigidBodies: THREE.Object3D[] = []; // 刚体


let Ammo = (window as any).Ammo
let AmmoLib: any = null

// 文字组
const lettersGroup = new THREE.Group()

// 小汽车组
const carGroup = new THREE.Group()
// 障碍组
const obstacleGroup = new THREE.Group()

const textGroup: THREE.Object3D = new THREE.Object3D();

let carMesh: THREE.Object3D

// 设置背景板尺寸
const PlaneSize = 400
// 实际是使用阴影材质作为底板
var shadowMaterial = new THREE.ShadowMaterial({ opacity: 0.2, transparent: false });

const plane = new THREE.Mesh(new THREE.BoxGeometry(PlaneSize, 0.5, PlaneSize, 1, 1, 1), shadowMaterial);
plane.receiveShadow = true;

const playerClock = new THREE.Clock();

let isStart = false

window.onload = () => {
    const startBtn = document.querySelector('.startBtn');
    const loading = document.querySelector('.loading')
    if (startBtn) {
        startBtn.onclick = () => {
            if (loading) {
                loading.style.display = "none";
                isStart = true
            }

        }
    }

    Ammo().then(function (lib: any) {
        Ammo = lib;
        (window as any).Ammo = lib
        AmmoLib = lib
        init();

        scene.add(lettersGroup)
        scene.add(carGroup)
        scene.add(obstacleGroup)
        scene.add(textGroup)

        // 创建物理引擎
        initPhysics();

        createObject()

        renderer.setAnimationLoop(render);
    });

}

const render = () => {
    const dt = playerClock.getDelta();
    // 更新物理世界
    updatePhysics(dt, rigidBodies, (pos: THREE.Vector3, dir: THREE.Vector3, objectThree: THREE.Object3D) => { })
    renderer.render(scene, camera);
    if (isStart) {
        css3dRenderer.render(scene, camera);
        vehicleUpdate && vehicleUpdate()
        followCamera()
    }
}

let playerDirection = new THREE.Vector3()

const followCamera = () => {
    let xbotV3 = new THREE.Vector3();
    if (carMesh) {
        carMesh.getWorldPosition(xbotV3);
        playerDirection = new THREE.Vector3(-2, 1, -2)
        playerDirection.normalize();
        playerDirection.multiplyScalar(30)
        const pos = playerDirection.negate().setY(14).add(xbotV3)
        camera.position.copy(pos);
        camera.lookAt(xbotV3.clone().setY(1))
        camera.updateProjectionMatrix()
        light.position.copy(pos.setY(80))
    }
}
const createObject = () => {
    const { object, body } = createRigidBody(plane, true, false, new THREE.Vector3(0, -0, 0), null)
    // 将刚体添加到物理引擎
    physicsWorld.addRigidBody(body);
    // 将刚体body和object绑定 object就是plane
    setPointerBttVec(object, body)
    // 将对象添加到刚体合集，会在updatePhysics方法更新
    rigidBodies.push(object)
    scene.add(object)

    // 基于ammojs封装的创建基础汽车的方法
    const { group, chassisMesh } = createVehicle(new THREE.Vector3(0, 4, 0), new THREE.Quaternion(0, 0, 0, 1), physicsWorld)
    carMesh = chassisMesh
    // 光源追踪
    light.target = chassisMesh;
    carGroup.add(group)

    lodaCarModel()

    loadObject()

    loadText()
}

const wheelNameMap: any = {
    'front_wheel_left_RGB_texture_0': 'FRONT_LEFT',
    'front_wheel_right_RGB_texture_0': 'FRONT_RIGHT',
    'rear_wheel_left_RGB_texture_0': 'BACK_LEFT',
    'rear_wheel_right_RGB_texture_0': 'BACK_RIGHT'
}
const vehicleBodyGroup: THREE.Group = new THREE.Group()

// 加载场景需要的模型
const loadObject = async () => {
    const params = {
        litters: 'helloWorld'.toUpperCase().split(''),
        size: 4,
        position: new THREE.Vector3(-16, 2, 14),
        color: new THREE.Color('0xffffff'),
        height: 2,
        change: {
            rotateY: Math.PI * 0.5
        },
    }

    // 字母
    await createLetters(params)

    loadObstacle()

    // 创建石堆object
    const size = new THREE.Vector3(1.5, 0.8, 1)
    const position = new THREE.Vector3(-5, 0.5, 10)
    createStone(6, 6, size, position, 'x')
}

const loadObstacle = async () => {
    const obstacleScene = await loadGltf(import.meta.env.VITE_ROCK_URL) as any
    const obstacle = obstacleScene.scene;
    obstacle.position.setY(2)
    const w = 20
    obstacle.traverse((obj) => {
        if (obj.isMesh) {
            castShadow(obj)
            const pos = new THREE.Vector3(getRandomInt(-w, w), 0, getRandomInt(-w / 2, -w * 2))
            const { object, body } = createRigidBody(obj, true, false, pos, null)
            physicsWorld.addRigidBody(body);
            setPointerBttVec(object, body)
            rigidBodies.push(object)
            obstacleGroup.add(object)
        }
    })

}

// 加载汽车模型
const lodaCarModel = async () => {
    const car = await loadGltf(import.meta.env.VITE_CAR_URL) as any

    // 换皮轮子
    car.scene.traverse((mesh: any) => {
        if (mesh.isMesh) {
            castShadow(mesh)
            const wheelName = wheelNameMap[mesh.name];
            if (wheelName) {
                const wheel = scene.getObjectByName(wheelName);
                if (wheel) {
                    const scale = computedScale(wheel, mesh);
                    mesh.scale.copy(scale.clone())
                    wheel?.add(mesh)
                }
            } else {
                vehicleBodyGroup.add(mesh)

            }

        }
    })
    // 换皮车身
    const vehicleBody = scene.getObjectByName('vehicleBody');
    if (vehicleBody) {
        vehicleBodyGroup.rotation.y = Math.PI;
        vehicleBodyGroup.scale.set(0.013, 0.013, 0.0111)
        vehicleBodyGroup.position.setY(-0.5)
        vehicleBody.add(vehicleBodyGroup)
    }

}

// 计算模型缩放比例
const computedScale = (mesh1: THREE.Object3D, mesh2: THREE.Object3D) => {
    const mesh1Info = getBox3Info(mesh1)
    const mesh2Info = getBox3Info(mesh2)
    const scaleV3 = new THREE.Vector3()
    scaleV3.copy(mesh1Info.size.clone()).divide(mesh2Info.size);
    return scaleV3
}

const litterPhyConf = {
    weight: 2,
    gravity: 7.8,
    friction: 11
}

interface createLitterInterface {
    litters: string[]; // 字母数组
    size: number, // 尺寸
    position: THREE.Vector3, // 初始位置
    color: THREE.Color,// 颜色
    height: number,// 高度
    change?: any  // 修改方向
    weight?: number // 模拟重力
}

// 创建多个字母
const createLetters = async (params: createLitterInterface) => {
    let i = 0;

    while (i < params.litters.length) {
        const l = params.litters[i]
        // 创建字母
        const letters = await createLetter(l, params.size, params.color, params.height, params.change)
        // 用来矫正以mesh为物理模型基础时原模型的位置
        const mesh = changeMeshPos(letters)

        let x = 0
        for (let j = 0; j < lettersGroup.children.length; j++) {
            x = x + lettersGroup.children[j].userData.size.z + 1
        }

        mesh.position.z = -x
        mesh.position.y = 0.2
        mesh.position.add(params.position)
        const { object: object, body: body } = createRigidBody(mesh, true, true, null, null, undefined, undefined)

        body.setFriction(litterPhyConf.friction)

        object.name = l + i
        castShadow(letters)

        physicsWorld.addRigidBody(body);
        object.userData.PhysUpdate = true

        setPointerBttVec(object, body)
        // object.userData.rotateLock = ['y', 'z']
        body.setGravity(new AmmoLib.btVector3(0, - litterPhyConf.gravity, 0));
        rigidBodies.push(object);

        lettersGroup.add(object)

        i++
    }
}
// 创建石头
const stoneMaterial = new THREE.MeshStandardMaterial({ color: new THREE.Color(0xffffff) });
const createStone = (low: number, hig: number, size: THREE.Vector3, pos: THREE.Vector3, d?: 'x' | 'z') => {
    const dir = d || 'x'
    const { x, y, z } = size
    // low底层砖数量，hig是层数，从最上层开始摆 i=0，一直摆到对下层i=hig
    for (let j = 0; j < hig; j++) {
        const v3 = pos.clone()
        v3.y = y * (j + 0.1) + 0.1
        for (let i = 0; i < low - j; i++) {
            v3[dir] = i * (size[dir] + 0.1)
            if (j > 0) v3[dir] = v3[dir] + size[dir] / 2 * j
            v3[dir] = v3[dir] + pos[dir]
            const stone = createMesh(size, undefined, stoneMaterial)
            stone.position.copy(v3)

            const { object, body } = createRigidBody(stone, true, true, null, null, undefined, undefined)
            castShadow(object)

            physicsWorld.addRigidBody(body);
            object.userData.PhysUpdate = true
            setPointerBttVec(object, body)
            body.setGravity(new AmmoLib.btVector3(0, - 17.8, 0));
            body.setFriction(200)
            rigidBodies.push(object);

            scene.add(object)


        }
    }
}

const loadText = () => {
    const textGroupPos = new THREE.Vector3(10, 0, -5);

    const ctx = document.createElement('canvas').getContext('2d');
    if (ctx) {
        ctx.canvas.width = 256;
        ctx.canvas.height = 256;
        ctx.fillStyle = '#FFF';

        ctx.font = "30px Arial"; // 设置字体和大小  
        ctx.fillText("请操作键盘", 0, 50); // 在画布上添加文字  
        ctx.fillText("开始游戏", 0, 180); // 在画布上添加文字  


        const texture = new THREE.CanvasTexture(ctx.canvas);

        const material = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true
        });
        const geometry = new THREE.PlaneGeometry(20, 20);
        const textPlane = new THREE.Mesh(geometry, material);
        textPlane.position.set(15, 0.5, 2)
        textPlane.rotation.x = - Math.PI * 0.5
        scene.add(textPlane);


    }



    const dirStr = ['A', 'S', 'D', 'W']
    for (let i = -1; i < dirStr.length - 1; i++) {
        const letter = dirStr[i + 1];
        const cubeSize = 2
        const cube = createMesh(new THREE.Vector3(cubeSize, 0.5, cubeSize), undefined, stoneMaterial)
        castShadow(cube);
        const pos = new THREE.Vector3(i * (cubeSize + 0.5), 1, 6).add(textGroupPos)
        if (i === 2) {
            pos.set(0, 1, 3).add(textGroupPos)
        }
        const { object, body } = createRigidBody(cube, true, true, pos, null)
        object.userData.PhysUpdate = true
        physicsWorld.addRigidBody(body);
        setPointerBttVec(object, body)
        rigidBodies.push(object)
        const textObject = createText(letter, 'letter');
        textObject.rotation.x = - Math.PI * 0.5
        object.add(textObject)
        textObject.position.set(0, 0, 0)
        scene.add(object)
    }




}