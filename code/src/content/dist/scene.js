"use strict";
exports.__esModule = true;
exports.createText = exports.init = exports.css3d = exports.camera = exports.light = exports.ambientLight = exports.controls = exports.css3dRenderer = exports.css2dRenderer = exports.renderer = exports.scene = void 0;
var THREE = require("three");
var CSS3DRenderer_1 = require("three/examples/jsm/renderers/CSS3DRenderer");
var CSS3DRenderer_js_1 = require("three/examples/jsm/renderers/CSS3DRenderer.js");
var cameraPos = new THREE.Vector3(30, 15, 30);
exports.init = function () {
    exports.scene = new THREE.Scene();
    // scene.add(new THREE.AxesHelper(50))
    var canvas = document.getElementsByClassName('3dCanvas');
    exports.css3d = document.getElementsByClassName('css3d');
    if (canvas) {
        exports.renderer = new THREE.WebGLRenderer({
            canvas: canvas[0],
            alpha: true,
            precision: 'highp',
            antialias: true
            // powerPreference: 'high-performance' // 高性能
        });
        exports.renderer.shadowMap.enabled = true;
        exports.renderer.shadowMap.needsUpdate = true;
        exports.renderer.shadowMap.autoUpdate = true;
    }
    exports.renderer.setSize(window.innerWidth, window.innerHeight);
    exports.css3dRenderer = new CSS3DRenderer_1.CSS3DRenderer(exports.css3d[0]);
    exports.css3dRenderer.setSize(window.innerWidth, window.innerHeight);
    exports.css3dRenderer.domElement.classList.add('css3d');
    document.body.appendChild(exports.css3dRenderer.domElement);
    exports.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.2, 2000000);
    exports.camera.position.copy(cameraPos);
    // controls = new OrbitControls(camera, renderer.domElement);
    initLight();
};
var initLight = function () {
    exports.ambientLight = new THREE.AmbientLight(0xffffff);
    var d = 30;
    exports.light = new THREE.DirectionalLight(0xffffff, 6);
    exports.light.position.set(20, 80, 40);
    exports.light.castShadow = true;
    exports.light.shadow.mapSize.width = 1024;
    exports.light.shadow.mapSize.height = 1024;
    exports.light.shadow.camera.far = 10000;
    exports.light.shadow.camera.left = -d;
    exports.light.shadow.camera.right = d;
    exports.light.shadow.camera.top = d;
    exports.light.shadow.camera.bottom = -d;
    exports.scene.add(exports.ambientLight);
    exports.scene.add(exports.light);
};
exports.createText = function (text, classname) {
    var div = document.createElement('div');
    div.innerText = text;
    classname && div.classList.add(classname);
    var object = new CSS3DRenderer_js_1.CSS3DObject(div);
    object.scale.set(0.1, 0.1, 0.1);
    return object;
};
