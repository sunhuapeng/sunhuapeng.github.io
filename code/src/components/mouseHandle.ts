// 鼠标移动点击事件
import * as THREE from 'three'
import { camera, scene } from './scene'
import { buttonState, floorSize, mapUseV2, mouseState, rayCheckChildren } from './variable'
import { changeMapUseV2, floorHelperMove, planeClick } from './floor';
import { createCss3d } from './createCss3d';
import { addModel } from './addModel';
import { FLOOR_TYPE, WEAPON_MODEL_TYPE } from './dictionary';
import { message } from '../utils';
// 射线
let mouse = new THREE.Vector2(); //鼠标位置
var raycaster = new THREE.Raycaster();

window.addEventListener("click", (event) => {
    if (mouseState.MOUSE_MOVE_FLAG) {
        mouse.x = (event.clientX / document.body.offsetWidth) * 2 - 1;
        mouse.y = -(event.clientY / document.body.offsetHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);

        const rallyist = raycaster.intersectObjects(rayCheckChildren.objects, rayCheckChildren.recursive);

        if (rallyist?.length !== 0 && rallyist[0]) {

            // 点击底板时候的操作
            if (rallyist[0].object.userData.type === FLOOR_TYPE) {
                planeClick(rallyist[0], rallyist[0].object)
            } else if (rallyist[0].object.parent.userData.type === WEAPON_MODEL_TYPE) {
                // 点击英雄
                if (buttonState.UPGRADE_HERO) {
                    rallyist[0].point.round()

                    const newLevel = rallyist[0].object.parent.example.level + 1

                    if (newLevel > rallyist[0].object.parent?.userData.WeaponData.Highest_Level) {
                        console.log('已经是最高级')
                        message('已经是最高级', 'error')
                    } else {
                        const pos = new THREE.Vector3();
                        rallyist[0].object.getWorldPosition(pos)
                        const success = addModel(pos, rallyist[0].object.parent.example.type, newLevel, 'upload')
                        if (success) {
                            message('升级成功', 'success')
                            rallyist[0].object.parent.example.dispose()
                            buttonState.UPGRADE_HERO = false
                            buttonState.DISPOSE_HERO = false
                        }
                    }
                } else if (buttonState.DISPOSE_HERO) {
                    const point = rallyist[0].object.parent.position.clone()
                    console.log('rallyist[0].object', rallyist[0].object);
                    const pos = new THREE.Vector3()
                    rallyist[0].object.getWorldPosition(pos);
                    console.log('pos',pos);
                    
                    rallyist[0].object.parent?.example?.dispose?.();

                    changeMapUseV2(pos?.clone(), 1)
                    buttonState.UPGRADE_HERO = false
                    buttonState.DISPOSE_HERO = false
                }

            }
        }
    }
});

window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / document.body.offsetWidth) * 2 - 1;
    mouse.y = -(event.clientY / document.body.offsetHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const rallyist = raycaster.intersectObjects(rayCheckChildren.objects, rayCheckChildren.recursive);
    // 当前鼠标所在的位置  rallyist[0].point
    floorHelperMove(rallyist[0])
})