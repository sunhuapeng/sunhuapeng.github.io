import { message } from '../utils';
import { CROSSBOW_MODEL_TYPE, RIFLE_MODEL_TYPE } from './dictionary';
import { AnimationArr, box3HelperGroup, floorGroup, weaponGroup } from './variable';
import { rayCheckChildren } from './variable';
import { buttonState } from './variable'

// 所有的按钮操作 

const btn_crossbow = document.querySelector('#crossbow');
btn_crossbow?.addEventListener('click', (e) => {
    e.stopPropagation()
    buttonState.DOWN_HERO = true
    buttonState.HREO_TYPE = CROSSBOW_MODEL_TYPE
    rayCheckChildren.objects = floorGroup.children
    message('放置弓箭', 'success')
})

const btn_rifle = document.querySelector('#rifle');
btn_rifle?.addEventListener('click', (e) => {
    e.stopPropagation()
    buttonState.DOWN_HERO = true
    buttonState.HREO_TYPE = RIFLE_MODEL_TYPE
    rayCheckChildren.objects = floorGroup.children;
    message('放置炮塔', 'success')
})

const upgrade = document.querySelector('#upgrade')
if (upgrade) {
    upgrade?.addEventListener('click', (e) => {
        e.stopPropagation()
        buttonState.UPGRADE_HERO = true
        buttonState.DISPOSE_HERO = false
        rayCheckChildren.objects = weaponGroup.children
        message('点击武器进行升级', 'success')
    })
}
const dispose = document.querySelector('#dispose')
if (dispose) {
    dispose?.addEventListener('click', (e) => {
        e.stopPropagation()
        buttonState.UPGRADE_HERO = false
        buttonState.DISPOSE_HERO = true
        rayCheckChildren.objects = weaponGroup.children
        message('点击武器进行销毁', 'success')
    })
}
const box3HelperBtn = document.querySelector('#box3Helper')
if (box3HelperBtn) {
    // box3HelperBtn.innerHTML = `辅：${buttonState.SHOW_BOX3_HELPER ? '开' : '关'}`
    box3HelperBtn?.addEventListener('click', (e) => {
        e.stopPropagation()
        buttonState.SHOW_BOX3_HELPER = !buttonState.SHOW_BOX3_HELPER
    })
}
const stopBtn = document.querySelector('#stop')
if (stopBtn) {

    stopBtn?.addEventListener('click', (e) => {
        e.stopPropagation()
        stopCallback(stopBtn)

        // stopBtn.innerHTML = `${buttonState.GAME_STOP ? '继续' : '暂停'}`

    })
}

export const stopCallback = (stopBtn?: Element) => {
    buttonState.GAME_STOP = !buttonState.GAME_STOP
    AnimationArr.forEach((ani) => {
        if (buttonState.GAME_STOP) {
            ani.pause()
            stopBtn&&stopBtn.classList.add('start')
        } else {
            ani.resume()
            stopBtn&&stopBtn.classList.remove('start')
        }
    })
}