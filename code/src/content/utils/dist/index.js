"use strict";
exports.__esModule = true;
exports.getRandomInt = exports.getBox3Info = void 0;
var THREE = require("three");
exports.getBox3Info = function (mesh) {
    var size = new THREE.Vector3();
    var center = new THREE.Vector3();
    var box3 = new THREE.Box3();
    box3.setFromObject(mesh);
    box3.getSize(size);
    box3.getCenter(center);
    return {
        size: size, center: center
    };
};
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
exports.getRandomInt = getRandomInt;
