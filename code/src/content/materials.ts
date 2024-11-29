import * as THREE from "three";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
// 区域材质
export const mapPlaneMaterial = new THREE.MeshBasicMaterial({
    color: 0x12152e,
    // transparent: true,
    // opacity: 0.8,
    side: THREE.DoubleSide
});

// 创建线条材质
export const lineMaterial = (color: number, opacity: number, width = 1,dashed=false) => {
    const material = new LineMaterial({
        color,
        linewidth: width,
        opacity,
        transparent: true,
        vertexColors: false,
        dashed,
        dashSize: 0.05,
        gapSize: 0.05
    })
    // material.resolution.set(window.innerWidth, window.innerHeight);
    return material
};

// 创建可接收阴影的材质
export const extrudeMaterial = (color: number) => new THREE.MeshLambertMaterial({
    color,
});

export const darkMaterial = new THREE.MeshBasicMaterial({ color: 'black',opacity: 0,transparent: true });