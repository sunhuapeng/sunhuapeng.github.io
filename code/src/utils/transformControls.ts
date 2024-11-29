import { Object3D } from "three";
import { TransformControls as TSC } from 'three/addons/controls/TransformControls.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { camera, renderer, scene, controls as orbit } from "../content/scene";

// 拖拽控制器
/**
 * @param mesh 受控模型
 * @param draggingChangedCallback  操控回调
 */

export const TransformControls = (mesh: Object3D, draggingChangedCallback?: (mesh: Object3D) => void) => {
    let control = new TSC(camera, renderer.domElement);
    let attachMesh = mesh
    control.attach(attachMesh);
    scene.add(control);
    control.addEventListener('dragging-changed', function (event) {
        if (orbit instanceof OrbitControls) {
            orbit.enabled = !event.value;
        }
        if (draggingChangedCallback) {
            draggingChangedCallback(mesh)
        }

    });
    let changeAttach = (mesh: Object3D) => {
        attachMesh = mesh
    }
}