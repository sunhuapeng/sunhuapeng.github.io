
import * as THREE from '../../../node_modules/@types/three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'

import { getBox3Info } from '../utils';
import { createRigidBody } from '../../utils/rigidBody';
import { castShadow } from '../../utils/shadow';

/**
 * 
 * @param l 内容
 * @param size 大小
 * @param color 颜色
 * @param height 高度
 * @param change 
 * @returns THREE.Mesh
 */
export const createLetter = (l: string, size: number, color: THREE.Color, height: number, change = null) => {
    const loader = new FontLoader();
    return new Promise((resove) => {
        loader.load('../../../src/assets/typeface.json', function (font) {
            const geometry = new TextGeometry(l, {
                font: font,
                size: size || 3,
                height: height,
            });

            change?.rotateX && geometry.rotateX(change?.rotateX);
            change?.rotateY && geometry.rotateY(change?.rotateY);

            const material = new THREE.MeshStandardMaterial({
                color
            });

            const objectToCurve = new THREE.Mesh(geometry, material);
            resove(objectToCurve)
        })

    });
}


// 用来矫正以mesh为物理模型基础时原模型的位置
export const changeMeshPos = (object: any, isBall = false) => {
    const position = object.userData?.phyTransform?.position || object.position
    const rotation = object.userData?.phyTransform?.rotation || object.rotation

    const { size, center } = getBox3Info(object)
    const mesh = createMesh(size, undefined, undefined, isBall)

    const { center: meshCenter } = getBox3Info(mesh)
    const c = meshCenter.clone().sub(center)
    object.position.copy(c)
    mesh.add(object)
    mesh.userData.size = size
    mesh.position.copy(position)
    mesh.rotation.copy(rotation)
    return mesh
}


/**
 * 
 * @param size 
 * @param color 
 * @param material 
 * @returns 
 */
export const createMesh = (size: THREE.Vector3, color?: THREE.Color, material?: THREE.Material, isBall = false): THREE.Mesh => {
    let geometry = new THREE.BoxGeometry(size.x, size.y, size.z) as any;
    if (isBall) {
        const max = v3MaxLine(size)
        geometry = new THREE.SphereGeometry(max / 2, 32, 16);
    }
    const newMaterial = new THREE.MeshStandardMaterial({ color: color || 0x00ff00, opacity: 0, transparent: true });
    const cube = new THREE.Mesh(geometry, material || newMaterial);
    return cube
}


export const v3MaxLine = (size: THREE.Vector3) => {
    let max = 0
    Object.keys(size).forEach((key: string, i:number) => {
        if (i === 0) max = size[key]
        else max = max < size[key] ? size[key] : max
    })
    return max
}