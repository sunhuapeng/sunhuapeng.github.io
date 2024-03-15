"use strict";
exports.__esModule = true;
exports.v3MaxLine = exports.createMesh = exports.changeMeshPos = exports.createLetter = void 0;
var THREE = require("three");
var FontLoader_1 = require("three/examples/jsm/loaders/FontLoader");
var TextGeometry_1 = require("three/examples/jsm/geometries/TextGeometry");
var utils_1 = require("../utils");
/**
 *
 * @param l 内容
 * @param size 大小
 * @param color 颜色
 * @param height 高度
 * @param change
 * @returns THREE.Mesh
 */
exports.createLetter = function (l, size, color, height, change) {
    if (change === void 0) { change = null; }
    var loader = new FontLoader_1.FontLoader();
    return new Promise(function (resove) {
        loader.load(import.meta.env.VITE_TYPEFACE_URL, function (font) {
            var geometry = new TextGeometry_1.TextGeometry(l, {
                font: font,
                size: size || 3,
                height: height
            });
            (change === null || change === void 0 ? void 0 : change.rotateX) && geometry.rotateX(change === null || change === void 0 ? void 0 : change.rotateX);
            (change === null || change === void 0 ? void 0 : change.rotateY) && geometry.rotateY(change === null || change === void 0 ? void 0 : change.rotateY);
            var material = new THREE.MeshStandardMaterial({
                color: color
            });
            var objectToCurve = new THREE.Mesh(geometry, material);
            resove(objectToCurve);
        });
    });
};
// 用来矫正以mesh为物理模型基础时原模型的位置
exports.changeMeshPos = function (object, isBall) {
    var _a, _b, _c, _d;
    if (isBall === void 0) { isBall = false; }
    var position = ((_b = (_a = object.userData) === null || _a === void 0 ? void 0 : _a.phyTransform) === null || _b === void 0 ? void 0 : _b.position) || object.position;
    var rotation = ((_d = (_c = object.userData) === null || _c === void 0 ? void 0 : _c.phyTransform) === null || _d === void 0 ? void 0 : _d.rotation) || object.rotation;
    var _e = utils_1.getBox3Info(object), size = _e.size, center = _e.center;
    var mesh = exports.createMesh(size, undefined, undefined, isBall);
    var meshCenter = utils_1.getBox3Info(mesh).center;
    var c = meshCenter.clone().sub(center);
    object.position.copy(c);
    mesh.add(object);
    mesh.userData.size = size;
    mesh.position.copy(position);
    mesh.rotation.copy(rotation);
    return mesh;
};
/**
 *
 * @param size
 * @param color
 * @param material
 * @returns
 */
exports.createMesh = function (size, color, material, isBall) {
    if (isBall === void 0) { isBall = false; }
    var geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
    if (isBall) {
        var max = exports.v3MaxLine(size);
        geometry = new THREE.SphereGeometry(max / 2, 32, 16);
    }
    var newMaterial = new THREE.MeshStandardMaterial({ color: color || 0x00ff00, opacity: 0, transparent: true });
    var cube = new THREE.Mesh(geometry, material || newMaterial);
    return cube;
};
exports.v3MaxLine = function (size) {
    var max = 0;
    Object.keys(size).forEach(function (key, i) {
        if (i === 0)
            max = size[key];
        else
            max = max < size[key] ? size[key] : max;
    });
    return max;
};
