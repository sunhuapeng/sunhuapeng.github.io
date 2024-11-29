
// import { updateWave } from "./ground";
import { camera, controls, labelRenderer, renderer, scene } from "./scene";
import { IntervalTime } from '../utils/IntervalTime'
import dayjs from "dayjs";
import './grid'
import './map'
import './light'
import './GUI'
import "./tag";
import { points as tagLinePoints } from './tagLine'
import { unrealRender } from '../utils/unreal'
import * as TWEEN from '@tweenjs/tween.js';
// import * as THREE from 'three';
import { animateParticles, animateTornado } from './tornado';

export const intervalTime = new IntervalTime();

window.onload = function () {
    const timeDom = document.querySelector('.time')

    const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    document.body.style.transform = `scale(${scale},${scale})`;

    renderer.setAnimationLoop(animate);

    intervalTime.interval(() => {
        timeDom && updateTime(timeDom as HTMLElement)
    }, 1000)

    animateTornado(tagLinePoints)


}

function updateTime(dom: HTMLElement) {
    const time = dayjs().format('YYYY-MM-DD HH:mm:ss')
    dom.innerHTML = time
}

function animate() {
    renderer.render(scene, camera);
    TWEEN.update();
    intervalTime.update()
    controls.update(); // 更新控制器
    labelRenderer.render(scene, camera);
    unrealRender()
    animateParticles()
}
