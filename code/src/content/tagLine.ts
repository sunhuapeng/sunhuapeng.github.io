import * as THREE from 'three'
import { warningPos } from "./constData";
import { createLine } from '../utils';
import { scene } from './scene';
import * as TWEEN from '@tweenjs/tween.js';

// 从给定的点数组中获取位置数组
const getPointsFromPosition = (points: THREE.Vector3[]) => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const position = geometry.getAttribute('position');
    const array = [...position.array]
    return array
}

// 将警告位置转换为THREE.Vector3对象
const vector3s = warningPos.map((item) => new THREE.Vector3().fromArray(item.position));

// 定义贝塞尔曲线的两个控制手柄
const handle1 = new THREE.Vector3(0.352343, 0.02, -0.14313); // 控制贝塞尔曲线的手柄1
const handle2 = new THREE.Vector3(-0.352343, 0.02, 0.14313); // 控制贝塞尔曲线的手柄2

// 创建三次贝塞尔曲线
const curve = new THREE.CubicBezierCurve3(vector3s[0], handle1, handle2, vector3s[2]);

// 获取曲线上的点
export const points = curve.getPoints(50);

// 获取点的位置数组
const array = getPointsFromPosition(points.map((item, index) => index === 0 ? item : points[0]))

// 创建线条对象
const line = createLine(array, 0xff0000, 1, 4, true, true);

// line.geometry.setPositions(array);

// 获取所有点的位置数组
const allArray = getPointsFromPosition(points)

// tag连接线动画时长
const timeLine = 1

// 定义打开动画
const tweenOpen = new TWEEN.Tween({
    index: 0
}).to({
    index: allArray.length
}, timeLine * 1000).onUpdate(({ index }) => {
    update(Math.floor(index))
})
    .onComplete(() => {
        // 重新开始关闭动画
        tweenClose.start()
    })
    .start()

// 定义关闭动画
const tweenClose = new TWEEN.Tween({
    index: 0
}).to({
    index: allArray.length
}, timeLine * 1000).onUpdate(({ index }) => {
    update2(Math.floor(index))
}).onComplete(() => {
    // 重新开始打开动画
    tweenOpen.start()
})

// 更新函数，用于动画更新
const update2 = (index: number) => {
    if (index % 3 === 0) {
        const oldArr = allArray.slice(index);
        const lastArr = oldArr.slice(0, 3);
        const newArr = allArray.slice(0, index);
        const preArr = []
        for (let i = 0; i < newArr.length; i++) {
            if (i % 3 === 0) {
                preArr.push(...lastArr)
            }
        }

        const points = [...preArr, ...oldArr]
        if (points.length === allArray.length) {
            updateLine(points)
        }
    }
}

// 更新函数，用于动画更新
const update = (index: number) => {
    if (index % 3 === 0) {
        const newArray = [...allArray]
        const newArr = newArray.slice(0, index);
        const lastArr = newArr.slice(-3);
        const oldArr = array.slice(index);
        for (let i = 0; i < oldArr.length; i++) {
            if (i % 3 === 0) {
                newArr.push(...lastArr)
            }
        }
        // 更新线条位置
        if (newArr.length === allArray.length) {
            updateLine(newArr)
        }
    }
}

// 更新线条点位信息
const updateLine = (points: number[]) => {
    line.geometry.setPositions(points);
    line.computeLineDistances();
}
// 将线条添加到场景中
scene.add(line);
