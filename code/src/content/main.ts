import { createFloor } from '../components/floor'
import { scene, camera, renderer, init, css3dRenderer } from '../components/scene'
import '../components/mouseHandle'
import '../components/buttonHandle'
import '../components/wallet'
import { EnemyCrouched, loadModels } from '../components/loadmodels'
import { CrystalGroup, DiscardsGroup, EnemyGroup, box3HelperGroup, buttonState, weaponGroup } from '../components/variable'
import TWEEN, { Tween } from '@tweenjs/tween.js'
import { IntervalTime } from '../utils'
import { renderShadow } from '../utils/shadow'

let intervalTime = new IntervalTime();
let level = 1, maxLevel = 10, round = 1, maxRound = 3

const levelDom = document.querySelector('#level')
const render = () => {
    renderer.render(scene, camera)
    css3dRenderer.render(scene, camera);
    if (!buttonState.GAME_STOP) {
        try {
            if (EnemyGroup.children.length === 0) {
                const crouched = new EnemyCrouched(10 * level);
                crouched.model && EnemyGroup.add(crouched.group)
            } else {
                EnemyGroup.traverse((enemy) => {
                    if (enemy.example) {
                        enemy.example.upDate()
                    }
                })
            }
            weaponGroup.traverse((weapon) => {
                if (weapon.example) {
                    weapon.example.upDate()
                }
            })
            DiscardsGroup.traverse((discards) => {
                if (discards.example) {
                    discards.example.upDate()
                }
            })
            TWEEN && TWEEN.update();

            intervalTime.interval((maxLevel - level) * 1000, () => {
                if (level < maxLevel) {
                    const crouched = new EnemyCrouched(level * 10);
                    crouched.model && EnemyGroup.add(crouched.group)
                    round++
                    if (round > maxRound) {
                        level++;
                        round = 0
                    }
                    if (levelDom) {
                        levelDom.innerHTML = `${level}`
                    }
                }
            })

            if (CrystalGroup) {
                CrystalGroup.traverse((crystal) => {
                    if (crystal.example) {
                        crystal.example.upDate()
                    }
                })
            }

        } catch (error) {

        }

    }
    box3HelperGroup.visible = buttonState.SHOW_BOX3_HELPER
}


window.onload = async () => {
    init()
    await loadModels()
    renderer.setAnimationLoop(render)
    createFloor()
    const crouched = new EnemyCrouched(10);
    crouched.model && EnemyGroup.add(crouched.group)

    
}