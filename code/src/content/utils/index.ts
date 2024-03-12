import * as THREE from 'three'
import { v3MaxLine } from '../createLetter';

export const getBox3Info = (mesh: THREE.Object3D) => {
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    const box3 = new THREE.Box3();

    box3.setFromObject(mesh)
    box3.getSize(size);
    box3.getCenter(center)
    return {
        size, center
    }
}



export function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

