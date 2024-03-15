"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var THREE = require("three");
var CSS2DRenderer_1 = require("three/examples/jsm/renderers/CSS2DRenderer");
var OrbitControls_1 = require("three/examples/jsm/controls/OrbitControls");
var three_1 = require("three");
var data_1 = require("./data");
var loaders_1 = require("../utils/loaders");
var controls;
var three_2 = require("three");
var three_3 = require("three");
var menu = document.querySelector('.menu');
var helperGroup = new THREE.Group(), group2D = new THREE.Group(), earthGroup = new THREE.Group(), sphereGroup = new THREE.Group();
var earth = null, scene, camera, renderer, ambientLight, labelRenderer;
var loading = document.getElementsByClassName('loading')[0];
var jd = document.getElementsByClassName('jd')[0];
var panpan = document.getElementsByClassName('panpan')[0];
var btn = document.getElementsByClassName('btn')[0];
var isUpdate = true;
loadEarth();
function loadEarth() {
    return __awaiter(this, void 0, void 0, function () {
        var diqiuTexture, box3, size, geometry, material, sphere;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loaders_1.loadFbx(import.meta.env.VITE_ASSETS_URL + 'assets/models/the-Earth.fbx', function (event) { return __awaiter(_this, void 0, void 0, function () {
                        var total, loaded, count;
                        return __generator(this, function (_a) {
                            total = event.total, loaded = event.loaded;
                            count = Math.min(Math.ceil(loaded / total * 100), 100);
                            rendeDom(count);
                            console.log('count', count);
                            return [2 /*return*/];
                        });
                    }); })
                    // 地图贴图
                ];
                case 1:
                    earth = _a.sent();
                    return [4 /*yield*/, loaders_1.loadTexture(import.meta.env.VITE_ASSETS_URL + 'assets/models/the-Earth.jpeg')];
                case 2:
                    diqiuTexture = _a.sent();
                    earth.children[0].material.map = diqiuTexture;
                    box3 = new THREE.Box3();
                    box3.expandByObject(earth);
                    size = new THREE.Vector3();
                    box3.getSize(size);
                    geometry = new THREE.SphereGeometry(size.y / 2.06, 32, 32);
                    material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
                    sphere = new THREE.Mesh(geometry, material);
                    sphereGroup.add(sphere);
                    init();
                    earthGroup.add(earth.children[0]);
                    return [2 /*return*/];
            }
        });
    });
}
// 渲染2d文字
function initThreeFloorName(d) {
    var image = document.createElement("img");
    image.className = "country-image";
    image.setAttribute('src', d.mapUrl);
    if (d.style) {
        for (var key in d.style) {
            var s = d.style[key];
            image.style[key] = s;
        }
    }
    var earthLabel = new CSS2DRenderer_1.CSS2DObject(image);
    earthLabel.position.copy(d.vector);
    group2D.add(earthLabel);
}
function init() {
    return __awaiter(this, void 0, void 0, function () {
        var sceneTexture, cameraPos, axesHelper, menuHtml, i, d;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // 场景
                    scene = new THREE.Scene();
                    return [4 /*yield*/, loaders_1.loadTexture(import.meta.env.VITE_ASSETS_URL + 'assets/textures/bg.jpeg')];
                case 1:
                    sceneTexture = _a.sent();
                    sceneTexture.wrapS = THREE.RepeatWrapping;
                    sceneTexture.wrapT = THREE.RepeatWrapping;
                    sceneTexture.repeat.set(1, 1);
                    scene.background = sceneTexture;
                    // scene.add(helperGroup);
                    scene.add(group2D);
                    scene.add(earthGroup);
                    // scene.add(sphereGroup);
                    // 镜头
                    camera = new three_3.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.2, 2000000);
                    cameraPos = new three_3.Vector3(0.588, 1.76, 15.6);
                    camera.position.copy(cameraPos);
                    // 渲染器
                    renderer = new three_2.WebGLRenderer();
                    renderer.setPixelRatio(window.devicePixelRatio);
                    renderer.setSize(window.innerWidth, window.innerHeight);
                    renderer.shadowMap.enabled = true;
                    renderer.shadowMap.needsUpdate = true;
                    document.body.appendChild(renderer.domElement);
                    labelRenderer = new CSS2DRenderer_1.CSS2DRenderer();
                    labelRenderer.setSize(window.innerWidth, window.innerHeight);
                    labelRenderer.domElement.style.position = "absolute";
                    labelRenderer.domElement.style.top = "0";
                    labelRenderer.domElement.style.pointerEvents = "none";
                    document.body.appendChild(labelRenderer.domElement);
                    // 灯光
                    ambientLight = new three_1.AmbientLight(0xffffff, 8.2);
                    scene.add(ambientLight);
                    axesHelper = new THREE.AxesHelper(100);
                    helperGroup.add(axesHelper);
                    controls = new OrbitControls_1.OrbitControls(camera, renderer.domElement);
                    // controls.autoRotate = true;
                    controls.autoRotateSpeed = 0.5;
                    menuHtml = "";
                    for (i = 0; i < data_1.data.length; i++) {
                        d = data_1.data[i];
                        initThreeFloorName(d);
                        menuHtml += appendMenuList(d);
                    }
                    menu.innerHTML = menuHtml;
                    loading.style.display = "none";
                    menu.onclick = function (e) {
                        e.stopPropagation();
                        var node = e.target;
                        console.log(node.nodeName);
                        if (node.nodeName === 'LI') {
                            console.log(node.id);
                            var d = data_1.data.find(function (d) { return d.country === node.id; });
                            var v = d === null || d === void 0 ? void 0 : d.vector;
                            var v3 = new THREE.Vector3(v === null || v === void 0 ? void 0 : v.x, v === null || v === void 0 ? void 0 : v.y, v === null || v === void 0 ? void 0 : v.z);
                            camera.position.copy(v3.clone().setLength(10));
                            camera.lookAt(v3);
                            camera.updateProjectionMatrix();
                        }
                    };
                    ray();
                    animate();
                    return [2 /*return*/];
            }
        });
    });
}
var a = function () {
    console.log('123');
};
function appendMenuList(data) {
    return "<li id=\"" + data.country + "\">\n    <img src=\"" + data.iconUrl + "\"/>\n        <p>\n        " + data.country + "\n        </p>\n    </li>";
}
// 循环渲染
function animate() {
    requestAnimationFrame(animate);
    render();
}
// 渲染函数
function render() {
    controls.update(); //更新控制器
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
    if (isUpdate) {
        isUpdate = false;
        rayMesh();
        var timeout_1 = setTimeout(function () {
            isUpdate = true;
            clearInterval(timeout_1);
            timeout_1 = null;
        }, 100);
    }
}
function ray() {
    var mouse = new THREE.Vector2(); //鼠标位置
    var raycaster = new THREE.Raycaster();
    window.addEventListener("click", function (event) {
        mouse.x = (event.clientX / document.body.offsetWidth) * 2 - 1;
        mouse.y = -(event.clientY / document.body.offsetHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        var raylist = raycaster.intersectObjects(earthGroup.children);
        console.log(raylist);
        // console.log(JSON.stringify({
        //     vector: new Vector3(raylist[0].point.x,
        //         raylist[0].point.y,
        //         raylist[0].point.z,),
        //     country: '日本',
        //     mapUrl: '../',
        //     iconUrl: '../'
        // }))
        // console.log(raylist[0])
    });
}
// 物体之间的射线
function rayMesh() {
    group2D.traverse(function (text) {
        if (!text.isGroup) {
            var opt = pointRay(camera.position, text.position, sphereGroup);
            text.element.style.opacity = Number(!opt).toString();
        }
    });
}
function pointRay(star, end, children) {
    var nstar = star.clone(); // 克隆一个新的位置信息，这样不会影响传入的三维向量的值
    var nend = end.clone().sub(nstar).normalize(); // 克隆一个新的位置信息，这样不会影响传入的三维向量的值
    var raycaster = new THREE.Raycaster(nstar, nend); // 创建一个正向射线
    var intersects = raycaster.intersectObjects(children.children, true);
    var jclang = 0;
    var textlang = 0;
    if (intersects.length != 0) {
        jclang = star.distanceTo(intersects[0].point);
        textlang = star.distanceTo(end);
    }
    return jclang < textlang;
}
// function pointRay(star, end, children) {
//     // createLine(star, end);
//     let nstar = star.clone(); // 克隆一个新的位置信息，这样不会影响传入的三维向量的值
//     let nend = end.clone().sub(nstar).normalize(); // 克隆一个新的位置信息，这样不会影响传入的三维向量的值
//     console.log(nstar, nend)
//     const raycaster = new THREE.Raycaster(nstar, nend); // 创建一个正向射线
//     const intersects = raycaster.intersectObjects(
//         children.children,
//         true
//     );
//     return intersects.length != 0;
// }
function rendeDom(speed) {
    if (jd && panpan && btn) {
        jd.style.width = speed + '%';
        panpan.style.left = speed + '%';
        panpan.style.marginLeft = '-83px';
        btn.style.left = speed + '%';
        // console.log('speed',speed);
        // if (speed === 100) {
        //     loading.style.display = "none"
        // }
    }
}
