import { loadFbx, loadGltf } from "../utils/loaders";
import * as THREE from 'three'
import { ResourceTracker } from "../utils/ResourceTracker";
import { AnimationArr, AnimationClips, DiscardsGroup, EnemyGroup, EnemyTrailsPoints, Warrok_coefficient, box3HelperGroup, buttonState, crossbow_coefficient, crouched_coefficient, rifle_coefficient, weaponGroup } from "./variable";
import { Arrow, CROSSBOW_MODEL_TYPE, Cannonball, ENEMY_CROUCHED_NAME, ENEMY_WARROK_NAME, MAGIC_CRYSTAL, RIFLE_MODEL_TYPE, WEAPON_MODEL_TYPE } from "./dictionary";
import { scene } from "./scene";
import { Animation } from "../utils/animation";
import TWEEN, { Tween } from '@tweenjs/tween.js'

export let towerScene: THREE.Object3D
import { Timer } from 'three/examples/jsm/misc/Timer.js';
import { IntervalTime, createText, message, parabolaPoints } from "../utils";
import { wallet } from "./wallet";
import { CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer";
import { stopCallback } from "./buttonHandle";

interface GltfModel {
    scene: THREE.Object3D | undefined,
    animations: THREE.AnimationClip[]
}
let Crouched: GltfModel
let Warrok: GltfModel
// 十字弓
const Crossbow_level_1_name = 'Crossbow001';
const Crossbow_level_2_name = 'Crossbow002';
const Crossbow_level_3_name = 'Crossbow003';

// 魔法水晶
const MagicCrystal_level_1_name = 'MagicCrystal001';

const MagicCrystal_level_2_name_M = 'MagicCrystal002';
const MagicCrystal_level_2_name_C = 'MagicCrystal022';

const MagicCrystal_level_3_name_M = 'MagicCrystal000';
const MagicCrystal_level_3_name_C = 'MagicCrystal021';

// 火炮
const Rifle_level_1_name = 'Rifle001'
const Rifle_level_2_name = 'Rifle002'
const Rifle_level_3_name = 'Rifle003'


// 防御
// 围墙
const Wall_1_name = 'Wall000';
const Wall_3_name = 'Wall003'; // 直角
const Wall_2_name = 'Wall002'; // 城门
// 塔楼
const Tower_Square_Small_name = 'Tower_Square_Small_0'
const Tower_Small_name = 'Tower_Small_0'
const Tower_Square_Tall_name = 'Tower_Square_Tall001_0'

// 子弹
// 炮弹
const Cannonball01 = 'Cannonball001'
// 箭矢
const Arrow001 = 'Arrow001'



// 武器该有的属性
export type WeaponUserData = {
    Fire_Rate: number; // 射击速度
    Purchase_Price: number; // 购买价格
    Upgrade_Price: number; // 升级价格
    Highest_Level: number // 最高等级
    That_Level: number // 当前等级
}

// 模型修正
class ModelCheck {
    model: THREE.Object3D | undefined = new THREE.Object3D()
    resMgr = new ResourceTracker();
    handleModel // 处理模型 销毁和创建
    center = new THREE.Vector3()
    size = new THREE.Vector3()
    box3 = new THREE.Box3()
    position = new THREE.Vector3()
    group = new THREE.Group()
    timer = new Timer()
    clock = new THREE.Clock();
    lastTime = 0
    intervalTime: IntervalTime = new IntervalTime()
    constructor() {
        this.handleModel = this.resMgr.track.bind(this.resMgr);

    }
    /**
     * 
     * @param rotate 旋转方向 用欧拉角表示
     */
    setRotate(rotate: THREE.Euler) {
        if (this.model) {
            this.model.rotation.copy(rotate);

        }
    }
    setScale(scale: number) {
        if (this.model) {
            this.model.scale.copy(new THREE.Vector3(scale, scale, scale))
        }
    }

    // 销毁武器
    dispose() {
        this.resMgr.dispose();

    }
    getBox() {
        if (this.model) {
            this.box3.setFromObject(this.model)
            this.box3.getCenter(this.center)
            this.box3.getSize(this.size);
            const helper = new THREE.Box3Helper(this.box3, 0xffff00);
            this.handleModel(helper)
            box3HelperGroup.add(helper);
        }
    }
}

// 武器的功能从这里继承
export class Weapon extends ModelCheck {
    recentEnemy: THREE.Object3D<THREE.Object3DEventMap> | null = null
    level = 1
    levelDom: CSS3DObject | null = null
    constructor(level = 1) {
        super();
        this.level = level
    }
    // 创建武器，通过名称创建出武器
    createWeapon(name: string) {
        if (towerScene) {
            this.dispose()
            const mesh = towerScene.getObjectByName(name)
            this.getBox()
            if (mesh) {
                const weapon = mesh.clone();
                this.model = weapon
                this.group.add(weapon)
                this.group.position.copy(this.position)
                this.model.position.set(0, 0, 0)

                this.model.example = this
                this.levelDom = createText(`level：${this.level}`, 'level-text');
                this.levelDom.position.setY(1)
                this.group.add(this.levelDom)

                this.handleModel(this.group)


            } else {
                console.log('没找到模型');

            }
        }
    }

    // 检测目标
    detectionTarget() {
        let distance = Number.MAX_SAFE_INTEGER
        this.recentEnemy = null;
        for (let i = 0; i < EnemyGroup.children.length; i++) {
            const enemy = EnemyGroup.children[i]
            const enemyPos = enemy.position.clone()
            const d = this.center.distanceTo(enemyPos);
            if (d < distance) {
                distance = d;
                this.recentEnemy = enemy
            }
        }

        if (this.recentEnemy) {
            const pos = this.recentEnemy.position
            this.group.lookAt(pos.x, pos.y, pos.z)
        }
    }
    // 射击
    shoot(name: Cannonball | Arrow, coefficient: number) {
        if (this.recentEnemy && this.model) {
            this.getBox();
            const discards = new TransmitDiscards(name, this.recentEnemy?.id, this.position.clone().setY(this.size.y), this.model.rotation.clone(), this.level, coefficient);
            DiscardsGroup.add(discards.group)
        }

    }
}

// 十字弩武器
export class Crossbow_level extends Weapon {
    level: number; // 等级
    Crossbow_level_1_name = 'Crossbow001';
    Crossbow_level_2_name = 'Crossbow002';
    Crossbow_level_3_name = 'Crossbow003';
    // 系数 用来区分不同武器的
    coefficient: number = crossbow_coefficient
    rateFire = 0//发射间隔
    readonly type: RIFLE_MODEL_TYPE | CROSSBOW_MODEL_TYPE = CROSSBOW_MODEL_TYPE
    WeaponData: WeaponUserData = {
        Fire_Rate: 1,
        Purchase_Price: 1,
        Upgrade_Price: 1,
        Highest_Level: 3,
        That_Level: 1,
    }
    constructor(level = 1, pos = new THREE.Vector3()) {
        super(level)
        this.position = pos

        this.level = level;
        this.rateFire = (4 - this.level) * 1000 / 2
        this.loadCrossBow()
        this.formatModel()
        this.initInfo()
    }

    loadCrossBow() {
        if (this.level === 1) {
            this.createWeapon(this.Crossbow_level_1_name)
        }
        else if (this.level === 2) {
            this.createWeapon(this.Crossbow_level_2_name)
        }
        else if (this.level === 3) {
            this.createWeapon(this.Crossbow_level_3_name)
        }
    }
    formatModel() {
        const euler = new THREE.Euler(Math.PI * -0.5, 0, 0);
        this.setRotate(euler)
        this.setScale(0.4)
    }
    initInfo() {
        this.WeaponData.Fire_Rate = this.level * this.coefficient * 0.314
        // 购买价格
        this.WeaponData.Purchase_Price = this.coefficient * this.level;

        // 升级价格
        this.WeaponData.Upgrade_Price = this.level * (this.coefficient / 2);
        if (this.model) {
            this.model.userData.WeaponData = this.WeaponData
            this.model.userData.type = WEAPON_MODEL_TYPE
        }
    }
    upDate() {
        this.detectionTarget();
        this.intervalTime.interval(this.rateFire, () => {
            this.shoot(Arrow, this.coefficient)
        })
    }
}
// 火炮武器
export class Rifle_level extends Crossbow_level {
    level: number;
    Rifle_level_1_name = 'Rifle001'
    Rifle_level_2_name = 'Rifle002'
    Rifle_level_3_name = 'Rifle003'

    coefficient = rifle_coefficient;
    rateFire = 0//发射间隔
    readonly type: RIFLE_MODEL_TYPE | CROSSBOW_MODEL_TYPE = RIFLE_MODEL_TYPE
    constructor(level: number, pos = new THREE.Vector3()) {
        super(level)
        this.position = pos
        this.level = level;
        this.rateFire = (4 - this.level) * 1000 / 2
        this.loadCrossBow();
        this.formatModel()
        this.initInfo()

    }
    loadCrossBow() {
        if (this.level === 1) {
            this.createWeapon(this.Rifle_level_1_name)
        }
        else if (this.level === 2) {
            this.createWeapon(this.Rifle_level_2_name)
        }
        else if (this.level === 3) {
            this.createWeapon(this.Rifle_level_3_name)
        }
    }
    formatModel() {
        const euler = new THREE.Euler(Math.PI * -0.5, 0, 0);
        this.setRotate(euler)
        this.setScale(0.4)
    }
    upDate() {
        this.detectionTarget();
        this.intervalTime.interval(this.rateFire, () => {
            this.shoot(Cannonball, this.coefficient)

        })
    }
}

export class Enemy_Level extends ModelCheck {
    modelAnimation: Animation | undefined // 动画合集
    HP: number = 0 // 血量
    speed = 0
    runTween: any
    price = 0
    hpDom: CSS3DObject | null = null
    level = 1
    constructor(name: string) {
        super()
    }

    addModel() {
        if (this.model) {
            this.group.add(this.model)
            this.getBox()

            let maxScale = 1
            this.size.clone().toArray().forEach((n) => {
                if (1 / n < maxScale) {
                    maxScale = 1 / n
                }
            })

            this.setScale(maxScale * 2)
            this.position = EnemyTrailsPoints[0]

            this.group.position.copy(EnemyTrailsPoints[0]);
            this.hpDom = createText(`HP：${this.HP}`, 'hp-text');
            this.hpDom.position.setY(1)
            this.group.add(this.hpDom)
        }
    }
    run() {
        if (this.model) {
            const time = this.modelAnimation?.actions?.walking?.time || 1

            this.runTween = new TWEEN.Tween({ pace: 0 })
                .to({ pace: 1 }, this.speed * EnemyTrailsPoints.length * time)
                .onUpdate((v: any) => {
                    const index = Math.ceil((EnemyTrailsPoints.length - 1) * v.pace);
                    if (index < EnemyTrailsPoints.length - 1) {
                        const pos = EnemyTrailsPoints[index].clone();
                        const posLast = EnemyTrailsPoints[index + 1].clone();

                        this.group.position.copy(pos)

                        this.position = pos
                        this.group.lookAt(posLast.x, 0, posLast.z)
                    }
                })
                .onComplete(() => {
                    this.modelAnimation?.fadeToAction('death');
                    this.dispose()
                })
            AnimationArr.push(this.runTween)
        }

    }
    runStart() {
        this.runTween.start()
    }
    runStop() {
        this.runTween.stop()
    }
    runPause() {
        this.runTween.pause()
    }
    runPlay() {
        this.runTween.resume()
    }
    upDate() {
        this.getBox()
        if (this.modelAnimation) {
            this.modelAnimation.upDate()
        }
        if (this.HP <= 0) {
            this.dispose();
            wallet.add(this.price);
        }

    }
}
export class EnemyCrouched extends Enemy_Level {
    coefficient: number = crouched_coefficient
    constructor(level: number) {
        super(ENEMY_CROUCHED_NAME)
        this.speed = this.coefficient * 60
        this.price = this.coefficient
        this.HP = this.coefficient * level
        this.level = level

        // 骨骼在执行clone()时候，骨骼之间的位置和动画发生错位，所以每次重新拉一次模型，很不可取。
        // 但是可以重新克隆一个骨骼动画，并重新绑定骨骼动画和新的模型之间的关系
        loadGltf(import.meta.env.VITE_ASSETS_URL + '/assets/models/snowgolem/scene.gltf').then((gltf: any) => {
            this.model = gltf.scene
            this.bindAnimite(gltf.animations)
            this.addModel()
            this.group.example = this
            this.handleModel(this.group)

            this.run()
            this.runStart()
        });

    }
    bindAnimite(animations: GltfModel['animations']) {
        if (this.model) {
            this.modelAnimation = new Animation(this.model, animations);

            this.modelAnimation.once(['death'])
            this.modelAnimation.play('walking');
        }
    }

}
export class EnemyWarrok extends Enemy_Level {
    coefficient: number = Warrok_coefficient
    constructor() {
        super(ENEMY_WARROK_NAME)
        this.speed = this.coefficient * 40

        // 骨骼在执行clone()时候，骨骼之间的位置和动画发生错位，所以每次重新拉一次模型，很不可取
        loadGltf(import.meta.env.VITE_ASSETS_URL + '/assets/models/sign_enemy/scene.gltf').then((gltf: any) => {
            this.model = gltf.scene
            gltf.animations[2].name = 'walking'
            this.bindAnimite(gltf.animations)

            this.addModel()

            if (this.model) {
                this.model.position.set(0, 50, 0)

            }

            this.group.example = this
            this.handleModel(this.group)

            this.run()
            this.runStart()
        });
    }
    bindAnimite(animations: GltfModel['animations']) {
        if (this.model) {
            this.modelAnimation = new Animation(this.model, animations);

            this.modelAnimation.once(['death'])
            this.modelAnimation.play('walking');
        }

    }
}

export class TransmitDiscards extends ModelCheck {
    /**
     * @param modelName 模型名称
     * @param targetId 目标id
     * @param startPos 起始位置
     * @param startPos 炮弹数量
     */
    power = 1 // 炮弹能量  1，2
    tween
    constructor(modelName: Cannonball | Arrow, targetId: number, startPos: THREE.Vector3, rotation: THREE.Euler, level = 1, coefficient = 1) {
        super()
        this.power = level * coefficient
        const model = towerScene.getObjectByName(modelName);
        const target = EnemyGroup.getObjectById(targetId)
        this.model = model?.clone()

        if (this.model) {
            this.group.add(this.model);
            this.model.position.copy(new THREE.Vector3())
            this.group.position.copy(startPos);
            const pos = new THREE.Vector3()
            target?.getWorldPosition(pos);
            this.group.lookAt(pos)
            this.model.rotation.copy(new THREE.Euler(Math.PI * -0.5, 0, 0))
            const scale = 0.4
            this.model.scale.set(scale, scale, scale)
            this.handleModel(this.group);
            this.model.example = this;

            // 计算抛物线让扔出去的武器看起来合理一些
            const points = parabolaPoints(startPos, pos, 3)
            const length = startPos.distanceTo(pos);

            this.tween = new TWEEN.Tween({ time: 0 }).to({ time: 1 }, length * 600)
                .start()
                .onUpdate((v) => {
                    const index = Math.ceil((EnemyTrailsPoints.length - 1) * v.time);
                    if (index < points.length) {
                        this.group.position.copy(points[index].clone())
                    }
                })
                .onComplete(() => {
                    this.dispose()
                })
            AnimationArr.push(this.tween)
        }
    }
    upDate() {
        // 子弹检测敌人
        EnemyGroup.traverse((enemy) => {
            if (enemy.example) {
                if (this.model) {
                    this.getBox()
                    const worldPos = new THREE.Vector3()
                    this.model.getWorldPosition(worldPos)
                    this.position = worldPos.clone();
                    enemy.example.getBox();
                    const contains = enemy.example.box3.containsPoint(this.position)
                    // 子弹撞击敌人
                    if (contains) {
                        console.log('击中敌人');
                        let hp = enemy.example.HP - this.power
                        enemy.example.HP = hp
                        enemy.example.hpDom.element.innerHTML = `HP：${Math.max(0, hp)}`
                        this.dispose()
                    }
                }

            }
        })
    }
}

export class CreateCrystal extends ModelCheck {
    HP = 100
    hpDom: CSS3DObject | null = null
    constructor() {
        super()
        const crystal = towerScene.getObjectByName(MAGIC_CRYSTAL);

        this.model = crystal;
        if (this.model) {
            const euler = new THREE.Euler(Math.PI * -0.5, 0, 0);
            this.setRotate(euler)
            this.setScale(0.4)
            this.group.add(this.model);
            this.handleModel(this.group);

            this.hpDom = createText(`HP：${this.HP}`, 'hp-text');
            this.hpDom.position.setY(1.3)
            this.group.add(this.hpDom)
            this.model.example = this
            this.model.position.copy(new THREE.Vector3())
        }
    }
    subHP(volume: number) {
        this.HP = this.HP - volume
        if (this.hpDom) {
            const hp = Math.max(0, this.HP)
            this.hpDom.element.innerHTML = `HP：${hp}`
            if (hp <= 0) {
                message('你输了', 'error');
                stopCallback()
            }
        }
    }
    upDate() {
        EnemyGroup.traverse((enemy) => {
            if (enemy.example) {
                this.getBox();
                enemy.example.getBox();
                const intersect = this.box3.intersectsBox(enemy.example.box3);
                if (intersect) {
                    enemy.example.dispose()
                    console.log(' enemy.example.level', enemy.example.level);
                    
                    this.subHP(enemy.example.level);
                }
            }
        })
    }

}

export const loadModels = async () => {
    const tower = await loadGltf(import.meta.env.VITE_ASSETS_URL + '/assets/models/tower_defense_kit/scene.gltf') as GltfModel;

    if (tower.scene) {
        towerScene = tower.scene;
    }
}

