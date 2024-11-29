import * as THREE from "three";
import { scene } from "./scene";
// import { loadTexture } from "../utils/loaders";

const grid = new THREE.GridHelper(200, 500, 0x1c252d, 0x1c252d);
grid.userData.isLight = true
scene.add(grid);