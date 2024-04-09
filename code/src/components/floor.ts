import * as THREE from 'three'
import { buttonState, floorSize, mapUseV2, rayCheckChildren, floorGroup, weaponGroup, mouseState, EnemyTrailsPoints, CrystalGroup } from './variable'
import { createCss3d } from './createCss3d';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';
import { addModel } from './addModel';
import { scene } from './scene';
import { FLOOR_TYPE, MAP_USE_COLOR, MAP_USE_NOT_COLOR, OTHER_MODEL_NAME } from './dictionary';
import { getRandomInt, message } from '../utils';
import { CreateCrystal, towerScene } from './loadmodels';
import { castShadow } from '../utils/shadow';
// 创建底板
const textureLoader = new THREE.TextureLoader();

const createPlane = (texture: THREE.Texture): THREE.Mesh => {
    const geometry = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    let plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = Math.PI * 0.5;

    plane.material.map = texture;
    plane.material.needsUpdate = true;
    castShadow(plane)
    return plane
}


export const getRoadTexture = (name: string): Promise<THREE.Texture> => {
    return new Promise((res) => {
        textureLoader.load(`${import.meta.env.VITE_ASSETS_URL}/assets/images/${name}.png`, function (texture) {
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(1, 1);
            res(texture)
        });

    })
}

export let floorHelper: CSS3DObject
// 渲染一个底板
export async function createFloor() {
    // 加载不同贴图
    const canText: THREE.Texture = await getRoadTexture('grass1')
    const notText: THREE.Texture = await getRoadTexture('grid1')
    // 根据floorsize创建出地图数据
    for (let i = 0; i < floorSize; i++) {
        let x: number[] = []
        for (let j = 0; j < floorSize; j++) {
            x.push(1)
        }
        mapUseV2[i] = x
    }

    const startPoint = new THREE.Vector2(0, 0)
    const endPoint = new THREE.Vector2(floorSize - 1, floorSize - 1)
    // 加入阻碍的随机点位，目的是为了不直接生成一条直线路线
    for (let i = 0; i < floorSize; i++) {
        const x = getRandomInt(1, floorSize - 2), y = getRandomInt(1, floorSize - 2)
        mapUseV2[x][y] = 0
        const otherName = OTHER_MODEL_NAME[getRandomInt(0, OTHER_MODEL_NAME.length - 1)]
        const otherModel = towerScene.getObjectByName(otherName)
        if (otherModel) {
            const cloneModel = otherModel.clone()
            const euler = new THREE.Euler(Math.PI * -0.5, 0, 0);
            cloneModel.rotation.copy(euler);
            const v2pos = analysisVector(x, y)
            cloneModel.position.copy(new THREE.Vector3(v2pos.x, 0, v2pos.y))
            scene.add(cloneModel)
        } else {
            console.log('otherName', otherName);

        }
    }

    const maps = new (window as any).Graph(mapUseV2);
    // 夸过阻碍的随机点位，生成怪物的路线图 
    var starPosition = maps.grid[startPoint.x][startPoint.y];
    var endPosition = maps.grid[endPoint.x][endPoint.y];

    // 计算路线图
    let trailPoints = (window as any).astar.search(maps, starPosition, endPosition, {
        closest: false
    });

    for (let i = 0; i < trailPoints.length - 1; i++) {
        mapUseV2[trailPoints[i].x][trailPoints[i].y] = 0;
        const v2 = analysisVector(trailPoints[i].x, trailPoints[i].y);
        // 细分路线，如果跨度太大 敌人行走看起来不是很好，也可以用插值的方式实现
        for (let j = 0; j < 1; j += 0.1) {
            if (trailPoints[i].x === trailPoints[i + 1].x) {
                EnemyTrailsPoints.push(new THREE.Vector3(v2.x, 0, v2.y + j))
            } else {
                EnemyTrailsPoints.push(new THREE.Vector3(v2.x + j, 0, v2.y))
            }
        }

    }
    // 根据地图数据生成地图
    for (let i = 0; i < mapUseV2.length; i++) {
        for (let j = 0; j < mapUseV2[i].length; j++) {
            const floor = createPlane(mapUseV2[i][j] === 1 ? canText : notText);
            const v2 = analysisVector(i, j)
            floor.position.set(v2.x, 0, v2.y)
            floor.userData.coordinate = { x: i, y: j }
            floor.userData.type = FLOOR_TYPE;
            floorGroup.add(floor)
        }
    }

    console.log('mapUseV2',mapUseV2);
    

    floorHelper = createCss3d('', 'floor-helper');
    floorHelper.visible = false
    floorHelper.rotation.x = - Math.PI * 0.5;
    floorGroup.add(floorHelper)


    // 底板创建完立即创建一个水晶
    const posv2 = analysisVector(floorSize-1, floorSize-1);
    const posv3 = new THREE.Vector3(posv2.x, 0, posv2.y)
    const crystal = new CreateCrystal();
    crystal.group?.position.copy(posv3)
    CrystalGroup.add(crystal.group)
}

// 点击地图放置武器
export const planeClick = (rayInfo: THREE.Intersection<THREE.Object3D>, _that: THREE.Object3D) => {
    if (buttonState.DOWN_HERO && mouseState.MAP_CAN_PLACE) {
        rayInfo.point.round()
        const success = addModel(rayInfo.point, buttonState.HREO_TYPE);
        if (success) {
            message('放置成功', 'success')
        }
        floorHelper.visible = false;
        buttonState.DOWN_HERO = false;

        rayCheckChildren.objects = weaponGroup.children;
        rayCheckChildren.recursive = true
        changeMapUseV2(rayInfo.point.clone(), 0)
    }
}

export const floorHelperMove = (rayInfo: THREE.Intersection<THREE.Object3D>) => {
    if (buttonState.DOWN_HERO && rayInfo) {
        if (rayInfo.point && rayInfo.object.userData.type === FLOOR_TYPE) {
            rayInfo.point.round()
            const newPoint = rayInfo.point.round().clone()

            const canTag = checkFloorUse(newPoint)
            floorHelper.visible = true;
            floorHelper.position.copy(newPoint)
            mouseState.MAP_CAN_PLACE = canTag
            if (canTag) {
                floorHelper.element.style.background = MAP_USE_COLOR
            } else {
                floorHelper.element.style.background = MAP_USE_NOT_COLOR
            }

        }

    }
}

// 判断当前地图瓦片是否有效
export const checkFloorUse = (v3: THREE.Vector3): boolean => {
    const mapNotClick = v3.clone().addScalar(floorSize / 2);
    return mapUseV2[mapNotClick.x][mapNotClick.z] === 1
}

// 改变地图瓦片属性
export const changeMapUseV2 = (v3: THREE.Vector3, type: 0 | 1) => {
    const mapNotClick = v3.clone().addScalar(floorSize / 2);
    console.log('v3,type', v3, type);

    mapUseV2[mapNotClick.x][mapNotClick.z] = type
}

// 逆解析，将索引解析为坐标
function analysisVector(i: number, j: number): THREE.Vector2 {
    return new THREE.Vector2(-floorSize / 2 + i, -floorSize / 2 + j)
}