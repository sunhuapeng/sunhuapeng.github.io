import { scene,camera } from "./scene";
import * as THREE from 'three'

const d = 1700
let dirLight = new THREE.DirectionalLight(0xffffff, 6);
dirLight.position.copy(camera.position);
dirLight.castShadow = true;
dirLight.shadow.camera.near = 0.1;
dirLight.shadow.camera.far = 5000;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.left = - d;
dirLight.shadow.camera.top = d;
dirLight.shadow.camera.bottom = - d;
dirLight.shadow.mapSize.width = 5120;
dirLight.shadow.mapSize.height = 5120;
dirLight.shadow.radius = 4;
dirLight.shadow.bias = - 0.00005;

// let dirGroup = new THREE.Group();
scene.add(dirLight);

const ambientLight = new THREE.AmbientLight(0xffffff);
// dirGroup.add(dirLight);
scene.add(ambientLight);
// scene.add(dirGroup);
