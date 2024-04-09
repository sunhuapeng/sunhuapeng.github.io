import * as THREE from 'three'
import { scene } from './scene'
import { BOX3_HELPER_GROUP, DISCARDS_GROUP_NAME, ENEMY_GROUP_NAME, FLOOR_GROUP_NAME, WEAPON_GROUP_NAME } from './dictionary'
import { getParams } from '../utils'

// 存放全局变量的
export const buttonState = {
    DOWN_HERO: false, // 是否可以放置模型
    CHECK_HERO: true, // 是否可以选中模型
    HREO_TYPE: 'crossbow' as "crossbow" | "rifle",
    UPGRADE_HERO: false, // 是否升级英雄
    DISPOSE_HERO: false, // 是否销毁英雄
    SHOW_BOX3_HELPER: true, // 是否显示辅助线
    GAME_STOP: false // 暂停游戏
}

export const sceneState = {
    RENDER_SPEED: 1, // 当前速度
}


export const mouseState = {
    MOUSE_MOVE_FLAG: true, // 按下和抬起之间鼠标是否移动过
    MAP_CAN_PLACE: true // 鼠标是否支持放置 新增武器时候用的
}

// 数字数字，代表当前哪些地方可以放置武器和防御
export const mapUseV2: number[][] = []

const searchParams = getParams()

const getValue = (field: string, def: number): number => {
    console.log('searchParams',searchParams);
    
    const f = searchParams[field]
    let fz = f ? Number(f) : def;
    return fz
}

export const floorSize = getValue('floorSize', 8)  // 必须双数，不然后面的计算有问题

// 系数
// 十字弩系数
export const crossbow_coefficient = getValue('crossbow_coefficient', 10)

// 火炮系数
export const rifle_coefficient = getValue('rifle_coefficient', 10) * 2
// 初始化金币
export const Money: number = getValue('money', 100);

// 敌人系数
export const crouched_coefficient = 10
export const Warrok_coefficient = 5

// 地图组
export const floorGroup = new THREE.Group();
floorGroup.name = FLOOR_GROUP_NAME

// 武器组
export const weaponGroup = new THREE.Group();
weaponGroup.name = WEAPON_GROUP_NAME

// 射线检测的组
export const rayCheckChildren = {
    recursive: true,
    objects: weaponGroup.children
}


// 敌人动线
export const EnemyTrailsPoints: THREE.Vector3[] = []
export const EnemyGroup = new THREE.Group()
EnemyGroup.name = ENEMY_GROUP_NAME

export let AnimationClips: THREE.AnimationClip[] = []
// 子弹组
export let DiscardsGroup = new THREE.Group()
DiscardsGroup.name = DISCARDS_GROUP_NAME

export const box3HelperGroup = new THREE.Group();
box3HelperGroup.name = BOX3_HELPER_GROUP

export const AnimationArr: any[] = []


// 水晶塔组
export const CrystalGroup = new THREE.Group();
