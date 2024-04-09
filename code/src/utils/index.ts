import * as THREE from 'three'

import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

// 获取随机数
export function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * 
 * @param v1 起点
 * @param v2 终点
 * @param h 高度
 */
export function parabolaPoints(v1: THREE.Vector3, v2: THREE.Vector3, h: number): THREE.Vector3[] {
    const g = new THREE.Vector3(0, -1, 0); // 假设重力方向是负y轴方向

    // 计算中点M
    const M = new THREE.Vector3().addVectors(v1, v2).multiplyScalar(0.5);

    // 选择与D垂直的向量U（这里直接取重力方向的相反数）
    const U = new THREE.Vector3().copy(g).negate(); // 假设g已经是单位向量

    const V = new THREE.Vector3().copy(M).addScaledVector(U, h);

    const curve = new THREE.QuadraticBezierCurve3(
        v1,
        V,
        v2
    );

    const points = curve.getPoints(50);
    return points

}



export class IntervalTime {
    lastTime = 0
    constructor() {
    }
    interval(time: number, callback: () => void) {
        let now = performance.now(); // 使用 performance.now() 获取高精度时间
        let deltaTime = now - this.lastTime;

        if (deltaTime > time) { // 如果已经过了一秒钟
            // 执行一秒内需要做的事情
            callback()
            // 重置时间
            this.lastTime = now;
        }
    }
}


export const createText = (text: string, classname?: string): CSS3DObject => {
    let div = document.createElement('div');
    div.innerText = text;
    classname && div.classList.add(classname)
    let object = new CSS3DObject(div);
    const scalse = 0.015
    object.scale.set(scalse, scalse, scalse)
    return object
}

export const getParams = () => {
    const search = new URLSearchParams(window.location.search);
    const searchParams: any = {}
    const etries = search.entries() as any

    for (var pair of (search.entries() as any)) {
        searchParams[pair[0]] = pair[1]
    }

    return searchParams
};

export function message(text: string, type?: 'error' | 'success') {
    let div = document.querySelector('#message_total')
    if (!div) {
        div = document.createElement('div')
        div.setAttribute('id', 'message_total');
        document.body.appendChild(div)
    } else {
        div.classList.forEach((className: string) => {
            div?.classList.remove(className)
        });
    }
    div.style.display = 'block'
    div.innerHTML = text
    div.classList.add(`message_${type}`);

    let interval = setInterval(() => {
        if (div) {
            div.style.display = 'none'
        }
        clearInterval(interval);
        interval = null
    }, 1500)

}