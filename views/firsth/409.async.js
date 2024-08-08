"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[409],{

/***/ 54852:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97857);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14422);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68872);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73935);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85893);







var iconStype = {
  width: 48,
  height: 48
};
var Logo2d = function Logo2d(props) {
  var map = props.map;
  var AMap = props.AMap;
  var logo = props === null || props === void 0 ? void 0 : props.logo;
  var name = props === null || props === void 0 ? void 0 : props.name;
  var markData = props === null || props === void 0 ? void 0 : props.markData;
  var callback = props === null || props === void 0 ? void 0 : props.callback;
  var onClick = props === null || props === void 0 ? void 0 : props.onClick;
  var checkMark = function checkMark() {
    console.log(markData);
    antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.success(markData.name || _dictionary__WEBPACK_IMPORTED_MODULE_1__/* .STORE_ATTRIBUTE_MAP */ .I2.get(markData.attribute));
    onClick && onClick(markData);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var _markData$lnglat;
    if (AMap && map && markData && markData !== null && markData !== void 0 && markData.lnglat && (markData === null || markData === void 0 || (_markData$lnglat = markData.lnglat) === null || _markData$lnglat === void 0 ? void 0 : _markData$lnglat.length) !== 0) {
      var _markData$lnglat2, _markData$lnglat3;
      var position = new AMap.LngLat(markData === null || markData === void 0 || (_markData$lnglat2 = markData.lnglat) === null || _markData$lnglat2 === void 0 ? void 0 : _markData$lnglat2[0], markData === null || markData === void 0 || (_markData$lnglat3 = markData.lnglat) === null || _markData$lnglat3 === void 0 ? void 0 : _markData$lnglat3[1]); //Marker 经纬度
      var element = document.createElement('div');
      var root = react_dom__WEBPACK_IMPORTED_MODULE_3__.createRoot(element);
      root.render(getComponent());
      var marker = new AMap.Marker({
        position: position,
        content: element,
        //将 html 传给 content
        offset: new AMap.Pixel(-iconStype.width / 2, -iconStype.height / 2) //以 icon 的 [center bottom] 为原点
      });
      map.add(marker);
    }
  }, []);
  var getComponent = function getComponent() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "bind-store",
      style: _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()({}, iconStype),
      onClick: checkMark,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "img-main",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
          src: logo,
          alt: ""
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: name
      })]
    });
  };
  return null;
};
/* harmony default export */ __webpack_exports__.Z = (Logo2d);

/***/ }),

/***/ 79497:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ae: function() { return /* binding */ floorMaterial; },
/* harmony export */   Lh: function() { return /* binding */ toiletMaterial; },
/* harmony export */   QD: function() { return /* binding */ unBindStoreMaterial; },
/* harmony export */   Tk: function() { return /* binding */ liftMaterial; },
/* harmony export */   j6: function() { return /* binding */ bindStoreMaterial; },
/* harmony export */   kg: function() { return /* binding */ chooseStoreMaterial; }
/* harmony export */ });
/* unused harmony export DEFAULT_MATERIAL */
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99477);


// 选中店铺
var chooseStoreMaterial = new three__WEBPACK_IMPORTED_MODULE_0__/* .MeshLambertMaterial */ .YBo({
  color: 0xe4a360
});

// 绑定过的店铺
var bindStoreMaterial = new three__WEBPACK_IMPORTED_MODULE_0__/* .MeshLambertMaterial */ .YBo({
  color: 0xff8790
});

// 没绑定的店铺
var unBindStoreMaterial = new three__WEBPACK_IMPORTED_MODULE_0__/* .MeshLambertMaterial */ .YBo({
  color: 0xc2c2c4
});

// 卫生间
var toiletMaterial = new three__WEBPACK_IMPORTED_MODULE_0__/* .MeshLambertMaterial */ .YBo({
  color: 0xd58261
});

// 电梯
var liftMaterial = new three__WEBPACK_IMPORTED_MODULE_0__/* .MeshLambertMaterial */ .YBo({
  color: 0x92657b
});

// 地面
var floorMaterial = new three__WEBPACK_IMPORTED_MODULE_0__/* .MeshLambertMaterial */ .YBo({
  color: 0x85888c
});
var DEFAULT_MATERIAL = /*#__PURE__*/function (DEFAULT_MATERIAL) {
  DEFAULT_MATERIAL[DEFAULT_MATERIAL["chooseStoreMaterial"] = 0] = "chooseStoreMaterial";
  DEFAULT_MATERIAL[DEFAULT_MATERIAL["bindStoreMaterial"] = 1] = "bindStoreMaterial";
  DEFAULT_MATERIAL[DEFAULT_MATERIAL["unBindStoreMaterial"] = 2] = "unBindStoreMaterial";
  DEFAULT_MATERIAL[DEFAULT_MATERIAL["toiletMaterial"] = 3] = "toiletMaterial";
  DEFAULT_MATERIAL[DEFAULT_MATERIAL["liftMaterial"] = 4] = "liftMaterial";
  DEFAULT_MATERIAL[DEFAULT_MATERIAL["floorMaterial"] = 5] = "floorMaterial";
  return DEFAULT_MATERIAL;
}({});

/***/ }),

/***/ 24712:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ah: function() { return /* binding */ scene; },
/* harmony export */   S1: function() { return /* binding */ init; },
/* harmony export */   jG: function() { return /* binding */ renderer; },
/* harmony export */   nS: function() { return /* binding */ camera; },
/* harmony export */   tf: function() { return /* binding */ labelRenderer; }
/* harmony export */ });
/* unused harmony exports css2dRenderer, css3dRenderer, controls, ambientLight, light */
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15009);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99289);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14422);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99477);
/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69365);
/* harmony import */ var three_examples_jsm_renderers_CSS2DRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81764);
/* harmony import */ var three_examples_jsm_renderers_CSS3DRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79471);







var cameraPos = new three__WEBPACK_IMPORTED_MODULE_3__/* .Vector3 */ .Pa4(4.422351251620849, -305.6440071261069, 645.7196773323486);
var scene, renderer, css2dRenderer, css3dRenderer, controls, ambientLight, light, camera, labelRenderer;
var init = /*#__PURE__*/function () {
  var _ref = _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee(canvas, css2dRenderDom) {
    var controlsStartPos;
    return _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          scene = new three__WEBPACK_IMPORTED_MODULE_3__/* .Scene */ .xsS();
          scene.background = new three__WEBPACK_IMPORTED_MODULE_3__/* .Color */ .Ilk('#e4e4e4');
          if (canvas) {
            renderer = new three__WEBPACK_IMPORTED_MODULE_3__/* .WebGLRenderer */ .CP7({
              canvas: canvas,
              // alpha: true,
              antialias: true,
              powerPreference: 'high-performance' // 高性能
            });
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.needsUpdate = true;
            renderer.shadowMap.autoUpdate = true;
          }
          css3dRenderer = new three_examples_jsm_renderers_CSS3DRenderer_js__WEBPACK_IMPORTED_MODULE_4__/* .CSS3DRenderer */ .lX();
          css3dRenderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
          css3dRenderer.domElement.classList.add('css3d');
          // document.body.appendChild(css3dRenderer.domElement);

          labelRenderer = new three_examples_jsm_renderers_CSS2DRenderer_js__WEBPACK_IMPORTED_MODULE_5__/* .CSS2DRenderer */ .M();
          labelRenderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
          labelRenderer.domElement.style.position = "absolute";
          labelRenderer.domElement.style.top = "0";
          labelRenderer.domElement.style.pointerEvents = "none";
          css2dRenderDom && css2dRenderDom.appendChild(labelRenderer.domElement);
          renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
          camera = new three__WEBPACK_IMPORTED_MODULE_3__/* .PerspectiveCamera */ .cPb(45, canvas.offsetWidth / canvas.offsetHeight, 0.2, 2000000);
          camera.position.copy(cameraPos);

          // 控制器
          controlsStartPos = new three__WEBPACK_IMPORTED_MODULE_3__/* .Vector3 */ .Pa4();
          controls = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_6__/* .OrbitControls */ .z(camera, renderer.domElement);
          controls.addEventListener('start', function () {
            controlsStartPos.copy(camera.position);
          });
          controls.addEventListener('end', function () {
            _dictionary__WEBPACK_IMPORTED_MODULE_2__/* .MouseState */ .TM.effective = controlsStartPos.distanceToSquared(camera.position) === 0;
          });
          controls.addEventListener('change', function () {
            console.log(camera.position);
          });
          initLight();
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function init(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var initLight = function initLight() {
  ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__/* .AmbientLight */ .Mig(0x707070, 3);
  light = new three__WEBPACK_IMPORTED_MODULE_3__/* .DirectionalLight */ .Ox3(0xffffff, 1);
  light.position.set(1181.4843537287065, 1580.039682987524, 1809.053759094986);
  light.castShadow = true;
  var d = 140;
  light.shadow.camera.left = -d;
  light.shadow.camera.right = d;
  light.shadow.camera.top = d;
  light.shadow.camera.bottom = -d;
  light.shadow.camera.near = 2;
  light.shadow.camera.far = 10;
  light.shadow.mapSize.x = 102;
  light.shadow.mapSize.y = 102;
  scene.add(light);
  scene.add(ambientLight);
};

/***/ }),

/***/ 71262:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: function() { return /* binding */ getSVG2Model; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(15009);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__(64599);
var createForOfIteratorHelper_default = /*#__PURE__*/__webpack_require__.n(createForOfIteratorHelper);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(99289);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/three/examples/jsm/loaders/FBXLoader.js + 3 modules
var FBXLoader = __webpack_require__(61411);
// EXTERNAL MODULE: ./node_modules/three/examples/jsm/loaders/GLTFLoader.js + 1 modules
var GLTFLoader = __webpack_require__(77836);
// EXTERNAL MODULE: ./node_modules/three/examples/jsm/loaders/SVGLoader.js
var SVGLoader = __webpack_require__(81367);
// EXTERNAL MODULE: ./node_modules/three/build/three.module.js
var three_module = __webpack_require__(99477);
;// CONCATENATED MODULE: ./src/components/three/loader.ts






var fbxLoader = new FBXLoader/* FBXLoader */.y();
var textureLoader = new three_module/* TextureLoader */.dpR();
var gltfLoader = new GLTFLoader/* GLTFLoader */.E();
var svgLoader = new SVGLoader/* SVGLoader */.u();
/**
 * 
 * @param modelUrl 模型地址
 * @param textureUrl 贴图地址
 * @returns 
 */
// 加载FBX模型
function loadFbx(modelUrl, cb) {
  return new Promise(function (resolve, reject) {
    fbxLoader.load(modelUrl, function (loadedModel) {
      resolve(loadedModel);
    }, function (a) {
      cb && cb(a);
    });
  });
}

// 加载OBJ模型
function loadObj(url) {
  return new Promise(function (resolve, reject) {
    new OBJLoader().load(url, function (object) {
      resolve(object);
    });
  });
}

// 加载纹理
function loadTexture(grid) {
  return new Promise(function (resolve, reject) {
    textureLoader.load(grid, function (texture) {
      resolve(texture);
    });
  });
}

// 加载gltf
function loadGltf(url) {
  return new Promise(function (resolve, reject) {
    gltfLoader.load(url, function (gltf) {
      resolve(gltf);
    });
  });
}
function loadObjMtl(objUrl, mtlUrl) {
  return new Promise(function (resolve, reject) {
    new MTLLoader().load(mtlUrl, function (materials) {
      materials.preload();
      new OBJLoader().setMaterials(materials).load(objUrl, function (object) {
        resolve(object);
      });
    });
  });
}
function loadSVG(url) {
  return new Promise(function (res, reg) {
    svgLoader.load(url, function (data) {
      res(data);
    });
  });
}
// EXTERNAL MODULE: ./src/components/three/utils.ts
var utils = __webpack_require__(91111);
// EXTERNAL MODULE: ./src/components/three/material.ts
var material = __webpack_require__(79497);
;// CONCATENATED MODULE: ./src/components/three/svg2Model.ts








var getSVG2Model = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(url) {
    var back,
      svgPaths,
      floorGroup,
      _iterator,
      _step,
      path,
      shapes,
      _iterator2,
      _step2,
      shape,
      logoShape,
      _iterator3,
      _step3,
      curve,
      length,
      points,
      i,
      v2,
      v3,
      mesh,
      _mesh$userData$box3In,
      center,
      _args = arguments;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          back = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
          _context.next = 3;
          return loadSVG(url);
        case 3:
          svgPaths = _context.sent;
          floorGroup = new three_module/* Group */.ZAu();
          _iterator = createForOfIteratorHelper_default()(svgPaths.paths);
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              path = _step.value;
              shapes = SVGLoader/* SVGLoader */.u.createShapes(path);
              _iterator2 = createForOfIteratorHelper_default()(shapes);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  shape = _step2.value;
                  logoShape = new three_module/* Shape */.bnF();
                  _iterator3 = createForOfIteratorHelper_default()(shape.curves);
                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                      curve = _step3.value;
                      length = curve.getLength();
                      points = curve.getPoints(Math.floor(length / 20));
                      for (i = 0; i < points.length - 1; i++) {
                        v2 = points[i];
                        if (v2.x !== 0 && v2.x && v2.y !== 0 && v2.y) {
                          // v2.divideScalar(10)
                          v3 = new three_module/* Vector3 */.Pa4(v2.x, 0, v2.y);
                          if (i === 0) {
                            logoShape.moveTo(v2.x, v2.y);
                          } else {
                            logoShape.lineTo(v2.x, v2.y);
                          }
                        }
                      }
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }
                  mesh = paths2Mesh(shape, path.userData.node.id); // mesh.rotation.copy(new THREE.Euler(Math.PI * 0.5, 0, 0))
                  console.log(mesh.name);
                  if (mesh.name === 'floor' && mesh.isMesh) {
                    mesh.position.z = back ? 8 : -8;
                    mesh.material = material/* floorMaterial */.Ae;
                  } else {
                    center = (_mesh$userData$box3In = mesh.userData.box3Info) === null || _mesh$userData$box3In === void 0 ? void 0 : _mesh$userData$box3In.center;
                    console.log('center', center);
                    mesh.storeId = "".concat(center.x, "_").concat(center.y);
                  }
                  floorGroup.add(mesh);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return _context.abrupt("return", floorGroup);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getSVG2Model(_x) {
    return _ref.apply(this, arguments);
  };
}();

// 路径挤压为模型
var paths2Mesh = function paths2Mesh(shape, name) {
  var extrudeSettings = {
    depth: name === 'floor' ? 8 : (0,utils/* getRandomInt */.X)(6, 60)
  };
  var geometry = new three_module/* ExtrudeGeometry */.O7d(shape, extrudeSettings);
  var mesh = new three_module/* Mesh */.Kj0(geometry, material/* unBindStoreMaterial */.QD.clone());
  if (name === 'floor') {
    mesh.receiveShadow = true;
  } else {
    mesh.castShadow = true;
  }
  mesh.name = name;
  var box3Info = (0,utils/* getBox3Info */.R)(mesh);
  mesh.userData.box3Info = box3Info;
  return mesh;
};

/***/ }),

/***/ 91111:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: function() { return /* binding */ getBox3Info; },
/* harmony export */   X: function() { return /* binding */ getRandomInt; }
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99477);

var getBox3Info = function getBox3Info(mesh) {
  if (mesh.isObject3D) {
    var box3 = new three__WEBPACK_IMPORTED_MODULE_0__/* .Box3 */ .ZzF();
    box3.setFromObject(mesh);
    var size = new three__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pa4();
    var center = new three__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pa4();
    box3.getSize(size);
    box3.getCenter(center);
    return {
      size: size,
      center: center,
      box3: box3
    };
  } else {
    throw new Error('对象错误');
  }
};
function getRandomInt(min, max) {
  // 确保min小于max  
  if (min >= max) {
    throw new Error('min must be less than max');
  }
  // Math.random() 生成 [0, 1) 范围内的浮点数  
  // 乘以 (max - min + 1) 并向下取整，以生成从 0 到 (max - min) 的整数  
  // 然后加上 min，得到 min 到 max 的整数  
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/***/ }),

/***/ 14422:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DE: function() { return /* binding */ OSS_URL; },
/* harmony export */   I2: function() { return /* binding */ STORE_ATTRIBUTE_MAP; },
/* harmony export */   Qt: function() { return /* binding */ FLOOR_MAP_URL; },
/* harmony export */   S$: function() { return /* binding */ STORE_TYPE_MAP; },
/* harmony export */   TM: function() { return /* binding */ MouseState; },
/* harmony export */   Yc: function() { return /* binding */ PROMOSE_RESPONSE; },
/* harmony export */   ag: function() { return /* binding */ STORE_ATTRIBUTE_ICON_MAP; },
/* harmony export */   cl: function() { return /* binding */ formLayout; },
/* harmony export */   qn: function() { return /* binding */ rulesRequired; }
/* harmony export */ });
var OSS_URL = 'https://three-statices.oss-cn-hangzhou.aliyuncs.com';
var PROMOSE_RESPONSE = /*#__PURE__*/function (PROMOSE_RESPONSE) {
  PROMOSE_RESPONSE["PROMOSE_ERROR_MSG"] = "\u64CD\u4F5C\u5931\u8D25";
  PROMOSE_RESPONSE["PROMOSE_SUCCESS_MSG"] = "\u64CD\u4F5C\u6210\u529F";
  PROMOSE_RESPONSE["PROMOSE_ERROR_DELEETE_MSG"] = "\u64CD\u4F5C\u6210\u529F";
  PROMOSE_RESPONSE["PROMOSE_ERROR_GETBYID_MSG"] = "\u6807\u8BC6\u4E0D\u5B58\u5728";
  PROMOSE_RESPONSE["PROMOSE_ERROR_ISHAVE_MSG"] = "\u6570\u636E\u4E0D\u5B58\u5728";
  return PROMOSE_RESPONSE;
}({});
var STORE_TYPE_MAP = new Map([['floor', '餐饮'], ['game', '娱乐'], ['clothing', '服装'], ['education', '教育'], ['algo', '人工智能'], ['other', '其他']]);
var STORE_ATTRIBUTE_MAP = new Map([['fire', '消防'], ['wc', '卫生间'], ['shops', '商铺'], ['rest', '休息区'], ['visitorCenter', '游客中心'], ['parking', '停车场'], ['myposition', '我的位置']]);
var STORE_ATTRIBUTE_ICON_MAP = new Map([['fire', '/floor-map/icon/xiaofangshuan.png'], ['wc', '/floor-map/icon/ziyuan.png'], ['shops', '/floor-map/icon/shangpuzhuanrang-.png'], ['rest', '/floor-map/icon/xiuxiqu2.png'], ['visitorCenter', '/floor-map/icon/kefu.png'], ['parking', '/floor-map/icon/tingchechang.png']]);
var FLOOR_MAP_URL = [{
  name: '闲林埠',
  url: '/floor-map/%E8%A5%BF%E5%8D%95%E5%A4%A7%E6%82%A6%E5%9F%8E/F1-01.svg'
}];
var rulesRequired = {
  rules: [{
    required: true,
    message: '${label}必填'
  }]
};
var formLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 12
  }
};
var MouseState = {
  effective: true
};

/***/ }),

/***/ 77572:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15009);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97857);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99289);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5574);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14422);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23323);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68872);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63620);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5062);
/* harmony import */ var _request_point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87177);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85893);









/**
 * 
 * @param props 
 * -
 * @returns 
 */
var PointEditModal = function PointEditModal(props) {
  var open = props.open,
    setOpen = props.setOpen,
    floorId = props.floorId,
    pointId = props.pointId,
    floorList = props.floorList,
    refreshPoint = props.refreshPoint,
    lnglat = props.lnglat;
  var pointV3 = props === null || props === void 0 ? void 0 : props.pointV3;
  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.useForm(),
    _Form$useForm2 = _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var cancel = function cancel() {
    setOpen(false);
  };
  var save = function save() {
    form.validateFields().then( /*#__PURE__*/function () {
      var _ref = _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee(values) {
        var params, res;
        return _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              params = _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default()(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default()({
                pointId: pointId,
                position: pointV3
              }, values), {}, {
                lnglat: lnglat
              });
              _context.next = 3;
              return (0,_request_point__WEBPACK_IMPORTED_MODULE_5__/* .createPointInfo */ .oF)(params);
            case 3:
              res = _context.sent;
              if (res.success) {
                antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP.success(res.msg);
                refreshPoint && refreshPoint(floorId);
                cancel();
              }
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
    open: open,
    onCancel: cancel,
    onOk: save,
    title: "\u70B9\u4F4D\u8BBE\u65BD",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default()(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default()({
      form: form
    }, _dictionary__WEBPACK_IMPORTED_MODULE_4__/* .formLayout */ .cl), {}, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Item, _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default()(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default()({
        label: "\u6240\u5C5E\u666F\u533A"
      }, _dictionary__WEBPACK_IMPORTED_MODULE_4__/* .rulesRequired */ .qn), {}, {
        name: "floorId",
        initialValue: floorId,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          disabled: true,
          fieldNames: {
            label: 'name',
            value: 'floorId'
          },
          options: floorList
        })
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Item, _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default()(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default()({
        label: "\u7C7B\u578B"
      }, _dictionary__WEBPACK_IMPORTED_MODULE_4__/* .rulesRequired */ .qn), {}, {
        name: "attribute",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
          options: Array.from(_dictionary__WEBPACK_IMPORTED_MODULE_4__/* .STORE_ATTRIBUTE_MAP */ .I2).map(function (item) {
            return {
              label: item[1],
              value: item[0]
            };
          })
        })
      }))]
    }))
  });
};
/* harmony default export */ __webpack_exports__.Z = (PointEditModal);

/***/ }),

/***/ 43842:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97857);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5574);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14422);
/* harmony import */ var _request_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93178);
/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36158);
/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96638);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23323);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68872);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63620);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(98086);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5062);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85893);









var StoreEditModal = function StoreEditModal(props) {
  var floorId = props.floorId,
    storeId = props.storeId,
    open = props.open,
    setOpen = props.setOpen,
    floorList = props.floorList,
    lnglat = props.lnglat;
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (storeId) {
      getStoreInfo(storeId);
      setStoreState({
        storeId: storeId,
        title: '编辑店铺',
        isEdit: true
      });
    } else {
      setStoreState({
        storeId: storeId,
        title: '新增店铺',
        isEdit: false
      });
      form.resetFields();
    }
    setStoreState({
      open: open
    });
  }, [open]);
  var _useRequest = (0,ahooks__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(_request_store__WEBPACK_IMPORTED_MODULE_3__/* .getStoreInfoByStoreId */ .gX, {
      manual: true,
      onSuccess: function onSuccess(res) {
        if (res.success) {
          form.setFieldsValue(res.data);
        }
      }
    }),
    getStoreInfo = _useRequest.run;

  // 数据状态
  var _useSetState = (0,ahooks__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({
      open: false,
      title: '新增店铺',
      isEdit: false
    }),
    _useSetState2 = _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_useSetState, 2),
    storeState = _useSetState2[0],
    setStoreState = _useSetState2[1];
  // 表单
  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.useForm(),
    _Form$useForm2 = _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_Form$useForm, 1),
    form = _Form$useForm2[0];

  // 添加接口
  var _useRequest2 = (0,ahooks__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(_request_store__WEBPACK_IMPORTED_MODULE_3__/* .createStoreInfo */ .up, {
      manual: true,
      onSuccess: function onSuccess(res) {
        if (res.success) {
          (props === null || props === void 0 ? void 0 : props.refreshStore) && (props === null || props === void 0 ? void 0 : props.refreshStore(floorId));
          form.resetFields();
          antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP.success(res.msg);
          cancel();
        }
      }
    }),
    addStore = _useRequest2.run;
  var _useRequest3 = (0,ahooks__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(_request_store__WEBPACK_IMPORTED_MODULE_3__/* .setStoreByStoreId */ .oQ, {
      manual: true,
      onSuccess: function onSuccess(res) {
        if (res.success) {
          (props === null || props === void 0 ? void 0 : props.refreshStore) && (props === null || props === void 0 ? void 0 : props.refreshStore(floorId));
          antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP.success(res.msg);
          cancel();
        } else {
          antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP.error(res.msg);
        }
      }
    }),
    editStore = _useRequest3.run;
  // 弹窗确定按钮
  var add = function add() {
    form.validateFields().then(function (values) {
      if (storeState.isEdit) {
        editStore(storeState.storeId || '', values);
      } else {
        if (props.addId) {
          addStore(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()({}, values), {}, {
            lnglat: lnglat,
            storeId: props.addId
          }));
        }
      }
    });
  };
  var cancel = function cancel() {
    setOpen(false);
    form.resetFields();
    (props === null || props === void 0 ? void 0 : props.refreshStore) && (props === null || props === void 0 ? void 0 : props.refreshStore(floorId));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
    open: storeState.open,
    onOk: add,
    title: storeState.title,
    onCancel: cancel,
    maskClosable: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()({
      form: form
    }, _dictionary__WEBPACK_IMPORTED_MODULE_2__/* .formLayout */ .cl), {}, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Item, _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()({
        label: "\u540D\u79F0"
      }, _dictionary__WEBPACK_IMPORTED_MODULE_2__/* .rulesRequired */ .qn), {}, {
        name: "name",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Item, _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()({
        label: "\u6240\u5C5E\u666F\u533A"
      }, _dictionary__WEBPACK_IMPORTED_MODULE_2__/* .rulesRequired */ .qn), {}, {
        name: "floorId",
        initialValue: floorId,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          disabled: true,
          fieldNames: {
            label: 'name',
            value: 'floorId'
          },
          options: floorList
        })
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Item, {
        label: "\u4E1A\u6001",
        name: "type",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
          options: Array.from(_dictionary__WEBPACK_IMPORTED_MODULE_2__/* .STORE_TYPE_MAP */ .S$).map(function (item) {
            return {
              label: item[1],
              value: item[0]
            };
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Item, {
        label: "\u7F16\u53F7",
        name: "no",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Item, {
        label: "logo",
        name: "logo",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
      })]
    }))
  });
};
/* harmony default export */ __webpack_exports__.Z = (StoreEditModal);

/***/ }),

/***/ 22759:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5574);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14422);
/* harmony import */ var _request_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93178);
/* harmony import */ var ahooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36158);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85265);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45093);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86738);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71230);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15746);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85893);









var WatchStoreInfo = function WatchStoreInfo(props) {
  var _floorList$find;
  var open = props.open,
    setOpen = props.setOpen,
    storeId = props.storeId,
    floorList = props.floorList,
    editBtnCallback = props.editBtnCallback,
    delBtnCallback = props.delBtnCallback;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
    _useState2 = _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    storeInfo = _useState2[0],
    setStoreInfo = _useState2[1];
  var _useRequest = (0,ahooks__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_request_store__WEBPACK_IMPORTED_MODULE_2__/* .getStoreInfoByStoreId */ .gX, {
      manual: true,
      onSuccess: function onSuccess(res) {
        if (res.success) {
          setStoreInfo(res.data);
        }
      }
    }),
    getStoreInfo = _useRequest.run;
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (open) {
      getStoreInfo(storeId || '');
    }
  }, [open]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    title: storeInfo === null || storeInfo === void 0 ? void 0 : storeInfo.name,
    onClose: function onClose() {
      return setOpen && setOpen(false);
    },
    open: open,
    extra: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [editBtnCallback && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
        type: "link",
        onClick: function onClick() {
          return editBtnCallback && editBtnCallback();
        },
        children: "\u7F16\u8F91"
      }), delBtnCallback && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        title: "\u5220\u9664\u5E97\u94FA",
        description: "\u662F\u5426\u5220\u9664\u5E97\u94FA",
        onConfirm: function onConfirm() {
          return delBtnCallback && delBtnCallback();
        },
        okText: "\u662F",
        cancelText: "\u5426",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
          type: "link",
          danger: true,
          children: "\u5220\u9664"
        })
      })]
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        span: 6,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
          children: "\u540D\u79F0"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        span: 18,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          children: (storeInfo === null || storeInfo === void 0 ? void 0 : storeInfo.name) || '-'
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        span: 6,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
          children: "\u6240\u5C5E\u666F\u533A"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        span: 18,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          children: (floorList === null || floorList === void 0 || (_floorList$find = floorList.find(function (floorInfo) {
            return floorInfo.floorId === (storeInfo === null || storeInfo === void 0 ? void 0 : storeInfo.floorId);
          })) === null || _floorList$find === void 0 ? void 0 : _floorList$find.name) || '-'
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        span: 6,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
          children: "\u4E1A\u6001"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        span: 18,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          children: _dictionary__WEBPACK_IMPORTED_MODULE_1__/* .STORE_TYPE_MAP */ .S$.get((storeInfo === null || storeInfo === void 0 ? void 0 : storeInfo.type) || '') || '-'
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        span: 6,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
          children: "\u7F16\u53F7"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        span: 18,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          children: (storeInfo === null || storeInfo === void 0 ? void 0 : storeInfo.no) || '-'
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        span: 6,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
          children: "logo"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        span: 18,
        children: storeInfo !== null && storeInfo !== void 0 && storeInfo.logo ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
          style: {
            width: 64,
            height: 64
          },
          src: storeInfo === null || storeInfo === void 0 ? void 0 : storeInfo.logo,
          alt: ""
        }) : '-'
      })]
    })
  });
};
/* harmony default export */ __webpack_exports__.Z = (WatchStoreInfo);

/***/ }),

/***/ 46500:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BG: function() { return /* binding */ getFloorInfoByFloorId; },
/* harmony export */   RT: function() { return /* binding */ removeFloor; },
/* harmony export */   TW: function() { return /* binding */ setFloorInfoByFloorId; },
/* harmony export */   jl: function() { return /* binding */ getAllData; },
/* harmony export */   wA: function() { return /* binding */ createFloorInfo; }
/* harmony export */ });
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15009);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99289);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97857);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_indexedDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31065);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57632);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20701);
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14422);




var dataBase = new _utils_indexedDB__WEBPACK_IMPORTED_MODULE_3__/* .DataBase */ .y('floorData', 'floorId');




// 查找景区

// 通过景区id获取景区信息
var getFloorInfoByFloorId = function getFloorInfoByFloorId(params) {
  return new Promise(function (res, reg) {
    if (params.floorId) {
      dataBase.getDataByKeyPath(params.floorId).then(function (data) {
        if (data) {
          res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theSuccess */ .Em)(JSON.parse(data.data)));
        } else {
          res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theError */ .Z5)(_dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_ERROR_GETBYID_MSG));
        }
      });
    } else {
      res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theError */ .Z5)(_dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_ERROR_GETBYID_MSG));
    }
  });
};
// 新建景区
var createFloorInfo = function createFloorInfo(params) {
  return new Promise(function (res, reg) {
    var key = (0,uuid__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    if (params.name !== undefined && params.floorIndex !== undefined && params.url !== undefined) {
      dataBase.saveDataByKeyPath(key, _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2___default()(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2___default()({}, params), {}, {
        floorId: key
      }));
      res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theSuccess */ .Em)({
        floorId: key
      }, _dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_SUCCESS_MSG));
    } else {
      res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theError */ .Z5)(_dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_ERROR_MSG));
    }
  });
};

// 修改景区信息

var setFloorInfoByFloorId = /*#__PURE__*/function () {
  var _ref = _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee2(floorId, params) {
    return _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref2 = _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee(res, reg) {
              return _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    try {
                      dataBase.getDataByKeyPath(floorId).then(function (oldData) {
                        dataBase.saveDataByKeyPath(floorId, _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2___default()(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2___default()({}, JSON.parse(oldData.data)), params));
                        res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theSuccess */ .Em)(undefined, _dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_SUCCESS_MSG));
                      });
                    } catch (error) {
                      res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theError */ .Z5)(_dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_ERROR_MSG));
                    }
                  case 1:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function setFloorInfoByFloorId(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// 删除景区
var removeFloor = function removeFloor(floorId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee3(res, reg) {
      return _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (floorId) {
              dataBase.removeDataByKeyPath(floorId).then(function () {
                res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theSuccess */ .Em)(undefined, _dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_SUCCESS_MSG));
              })["catch"](function (error) {
                res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theError */ .Z5)(_dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_ERROR_DELEETE_MSG));
              });
            } else {
              res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theError */ .Z5)(_dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_ERROR_ISHAVE_MSG));
            }
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};
// 获取所有数据
var getAllData = function getAllData() {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee4(res, reg) {
      var allDataList;
      return _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return dataBase.getAllData();
          case 3:
            allDataList = _context4.sent;
            res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theSuccess */ .Em)(allDataList));
            _context4.next = 10;
            break;
          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theError */ .Z5)(_dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_ERROR_MSG));
          case 10:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 7]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};

/***/ }),

/***/ 20701:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Em: function() { return /* binding */ theSuccess; },
/* harmony export */   Z5: function() { return /* binding */ theError; }
/* harmony export */ });
/* unused harmony export fetchQuery */
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5574);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97857);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__);


var theSuccess = function theSuccess(data, msg) {
  return {
    success: true,
    msg: msg || '',
    data: data
  };
};
var theError = function theError(msg) {
  return {
    success: false,
    msg: msg || '',
    data: null
  };
};

/**
 * 
 * @param url 请求地址
 * @param method 请求方式
 * @param headers 请求头
 * @param params 请求参数
 * @param query 路径参数
 * @returns 
 */
var fetchQuery = function fetchQuery(url, method) {
  var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var query = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var queryString = new URLSearchParams(query).toString();
  console.log('queryString', queryString);
  return new Promise(function (resolve, reject) {
    fetch("".concat(url).concat(queryString ? '?' + queryString : ''), {
      method: method || 'POST',
      // 请求方法  
      headers: _objectSpread(_objectSpread({}, headers), {}, {
        'Accept': 'text/event-stream'
      }),
      body: JSON.stringify(params || {}) // 将我们的数据转换为JSON字符串  
    })["finally"](function () {
      console.log(123);
    }).then(function (response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text(); // 获取响应文本
    }).then(function (eventStreamData) {
      // 在这里解析 eventStreamData，处理事件流
      console.log('eventStreamData', eventStreamData);
    })
    // .then(body => {
    //     console.log(body); // 处理从服务器返回的数据  

    //     const parsedData = parseSSEMessage(body);  
    //     console.log(parsedData);
    //     let arr = body.split('data:');
    //     console.log('arr',arr);

    //     resolve(body)
    // })
    ["catch"](function (error) {
      reject(error);
      console.error('There was a problem with your fetch operation:', error);
    });
  });
};
function parseSSEMessage(message) {
  // 假设message是从SSE连接中接收到的整行数据  
  // 例如: "event:conversation.chat.completed\ndata:{\"id\":\"7394816695363256330\",...}"  

  // 首先，按换行符分割字符串，得到事件名和数据部分  
  var parts = message.trim().split('\n');

  // 遍历分割后的数组，找到data部分  
  var dataPart = null;
  parts.forEach(function (part) {
    var _part$split = part.split(':'),
      _part$split2 = _slicedToArray(_part$split, 2),
      key = _part$split2[0],
      value = _part$split2[1];
    if (key.trim() === 'data') {
      // 去除值前面的空格，并处理JSON转义字符（如果必要的话）  
      // 注意：这里假设数据已经是有效的JSON字符串，但可能包含转义字符  
      dataPart = value.trim().replace(/\\/g, ''); // 这一步可能是不必要的，取决于数据的实际格式  
      // 如果数据中包含转义的JSON字符串（如JSON字符串内部的双引号被转义），你可能需要使用更复杂的逻辑来解析  
    }
  });

  // 解析JSON数据  
  if (dataPart) {
    try {
      var data = JSON.parse(dataPart);
      // 现在你可以使用data对象了  
      console.log(data);
      return data;
    } catch (error) {
      console.error('Failed to parse JSON:', error);
    }
  }

  // 如果没有找到data部分或解析失败，返回null或适当的错误消息  
  return null;
}

/***/ }),

/***/ 87177:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Wh: function() { return /* binding */ getPointListByFloorId; },
/* harmony export */   oF: function() { return /* binding */ createPointInfo; }
/* harmony export */ });
/* unused harmony exports getPointInfoByPointId, setPointByPointId, removePointByStoreId, getAllPointList */
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15009);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97857);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99289);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_indexedDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31065);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20701);
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14422);






var dataBase = new _utils_indexedDB__WEBPACK_IMPORTED_MODULE_3__/* .DataBase */ .y('pointData', 'pointId');
// 新建点位
var createPointInfo = function createPointInfo(params) {
  return new Promise(function (res, reg) {
    dataBase.saveDataByKeyPath(params.pointId, params);
    res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theSuccess */ .Em)({
      id: params.pointId
    }, _dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_SUCCESS_MSG));
  });
};

// 通过店铺id获取店铺信息
var getPointInfoByPointId = function getPointInfoByPointId(pointId) {
  return new Promise(function (res, reg) {
    if (pointId) {
      dataBase.getDataByKeyPath(pointId).then(function (data) {
        if (data) {
          res(theSuccess(JSON.parse(data.data)));
        } else {
          res(theError(PROMOSE_RESPONSE.PROMOSE_ERROR_GETBYID_MSG));
        }
      });
    } else {
      res(theError(PROMOSE_RESPONSE.PROMOSE_ERROR_GETBYID_MSG));
    }
  });
};
var setPointByPointId = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(pointId, params) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(res, reg) {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    try {
                      dataBase.getDataByKeyPath(pointId).then(function (oldData) {
                        dataBase.saveDataByKeyPath(pointId, _objectSpread(_objectSpread(_objectSpread({}, JSON.parse((oldData === null || oldData === void 0 ? void 0 : oldData.data) || "{}")), params), {}, {
                          pointId: pointId
                        }));
                        res(theSuccess(undefined, PROMOSE_RESPONSE.PROMOSE_SUCCESS_MSG));
                      });
                    } catch (error) {
                      res(theError(PROMOSE_RESPONSE.PROMOSE_ERROR_MSG));
                    }
                  case 1:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function setPointByPointId(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()));

// 删除店铺
var removePointByStoreId = function removePointByStoreId(pointId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(res, reg) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (pointId) {
              dataBase.removeDataByKeyPath(pointId).then(function () {
                res(theSuccess(undefined, PROMOSE_RESPONSE.PROMOSE_SUCCESS_MSG));
              })["catch"](function (error) {
                res(theError(PROMOSE_RESPONSE.PROMOSE_ERROR_DELEETE_MSG));
              });
            } else {
              res(theError(PROMOSE_RESPONSE.PROMOSE_ERROR_ISHAVE_MSG));
            }
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};
// 获取所有数据
var getAllPointList = function getAllPointList() {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(res, reg) {
      var allDataList;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return dataBase.getAllData();
          case 3:
            allDataList = _context4.sent;
            res(theSuccess(allDataList));
            _context4.next = 10;
            break;
          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            res(theError(PROMOSE_RESPONSE.PROMOSE_ERROR_MSG));
          case 10:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 7]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};

// 根据景区id获取景区下所有的店铺
var getPointListByFloorId = function getPointListByFloorId(floorId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee5(res, reg) {
      var allDataList;
      return _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return dataBase.getAllData('floorId', floorId);
          case 3:
            allDataList = _context5.sent;
            res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theSuccess */ .Em)(allDataList));
            _context5.next = 10;
            break;
          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theError */ .Z5)(_dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_ERROR_MSG));
          case 10:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 7]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};

/***/ }),

/***/ 93178:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ev: function() { return /* binding */ getStoreListByFloorId; },
/* harmony export */   HC: function() { return /* binding */ removeStoreByStoreId; },
/* harmony export */   gX: function() { return /* binding */ getStoreInfoByStoreId; },
/* harmony export */   oQ: function() { return /* binding */ setStoreByStoreId; },
/* harmony export */   up: function() { return /* binding */ createStoreInfo; }
/* harmony export */ });
/* unused harmony export getAllStoreList */
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15009);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97857);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99289);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_indexedDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31065);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20701);
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14422);






var dataBase = new _utils_indexedDB__WEBPACK_IMPORTED_MODULE_3__/* .DataBase */ .y('storeData', 'storeId');
// 新建景区
var createStoreInfo = function createStoreInfo(params) {
  return new Promise(function (res, reg) {
    dataBase.saveDataByKeyPath(params.storeId, params);
    res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theSuccess */ .Em)({
      storeId: params.storeId
    }, _dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_SUCCESS_MSG));
  });
};

// 通过店铺id获取店铺信息
var getStoreInfoByStoreId = function getStoreInfoByStoreId(storeId) {
  return new Promise(function (res, reg) {
    if (storeId) {
      dataBase.getDataByKeyPath(storeId).then(function (data) {
        if (data) {
          res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theSuccess */ .Em)(JSON.parse(data.data)));
        } else {
          res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theError */ .Z5)(_dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_ERROR_GETBYID_MSG));
        }
      });
    } else {
      res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theError */ .Z5)(_dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_ERROR_GETBYID_MSG));
    }
  });
};
var setStoreByStoreId = /*#__PURE__*/function () {
  var _ref = _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee2(storeId, params) {
    return _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref2 = _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee(res, reg) {
              return _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    try {
                      dataBase.getDataByKeyPath(storeId).then(function (oldData) {
                        console.log('oldData', oldData);
                        dataBase.saveDataByKeyPath(storeId, _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default()(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default()(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default()({}, JSON.parse((oldData === null || oldData === void 0 ? void 0 : oldData.data) || "{}")), params), {}, {
                          storeId: storeId
                        }));
                        res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theSuccess */ .Em)(undefined, _dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_SUCCESS_MSG));
                      });
                    } catch (error) {
                      res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theError */ .Z5)(_dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_ERROR_MSG));
                    }
                  case 1:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function setStoreByStoreId(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// 删除店铺
var removeStoreByStoreId = function removeStoreByStoreId(storeId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee3(res, reg) {
      return _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (storeId) {
              dataBase.removeDataByKeyPath(storeId).then(function () {
                res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theSuccess */ .Em)(undefined, _dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_SUCCESS_MSG));
              })["catch"](function (error) {
                res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theError */ .Z5)(_dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_ERROR_DELEETE_MSG));
              });
            } else {
              res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theError */ .Z5)(_dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_ERROR_ISHAVE_MSG));
            }
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};
// 获取所有数据
var getAllStoreList = function getAllStoreList() {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(res, reg) {
      var allDataList;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return dataBase.getAllData();
          case 3:
            allDataList = _context4.sent;
            res(theSuccess(allDataList));
            _context4.next = 10;
            break;
          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            res(theError(PROMOSE_RESPONSE.PROMOSE_ERROR_MSG));
          case 10:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 7]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};

// 根据景区id获取景区下所有的店铺
var getStoreListByFloorId = function getStoreListByFloorId(floorId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee5(res, reg) {
      var allDataList;
      return _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return dataBase.getAllData('floorId', floorId);
          case 3:
            allDataList = _context5.sent;
            res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theSuccess */ .Em)(allDataList));
            _context5.next = 10;
            break;
          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theError */ .Z5)(_dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_ERROR_MSG));
          case 10:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 7]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};

/***/ }),

/***/ 29142:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fJ: function() { return /* binding */ getElementLeft; },
/* harmony export */   u4: function() { return /* binding */ bindMaterialById; },
/* harmony export */   uz: function() { return /* binding */ createPointTypesMesh; }
/* harmony export */ });
/* unused harmony exports mapMaterial, createStoreName, createPoint, getViewCp, coordsToLngLats */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _components_logo2d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54852);
/* harmony import */ var _components_three_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79497);
/* harmony import */ var _components_three_scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24712);
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14422);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99477);
/* harmony import */ var three_examples_jsm_renderers_CSS2DRenderer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81764);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73935);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85893);









var bindMaterialById = function bindMaterialById(storeList, group) {
  var mapScene = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _components_three_scene__WEBPACK_IMPORTED_MODULE_3__/* .scene */ .Ah;
  group.traverse(function (mesh) {
    if (mesh) {
      var name = mesh.name.split('_')[0];
      mesh.material = mapMaterial(name);
    }
  });
  var storeNameGroup = new three__WEBPACK_IMPORTED_MODULE_7__/* .Group */ .ZAu();
  mapScene.add(storeNameGroup);
  storeList.forEach(function (data) {
    var storeId = data.storeId;
    if (storeId) {
      var thatMesh = mapScene.getObjectByProperty('storeId', storeId);
      if (thatMesh) {
        thatMesh.material = _components_three_material__WEBPACK_IMPORTED_MODULE_2__/* .bindStoreMaterial */ .j6.clone();
        thatMesh.storeType = 'bind';
        thatMesh.userData.storeInfo = data;
      }
    }
  });
};
var createPointTypesMesh = function createPointTypesMesh(pointList) {
  var mapScene = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _components_three_scene__WEBPACK_IMPORTED_MODULE_3__/* .scene */ .Ah;
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new three__WEBPACK_IMPORTED_MODULE_7__/* .Vector3 */ .Pa4();
  pointList.forEach(function (data) {
    var storeNameObject = createPoint(data);
    storeNameObject.position.add(offset);
    mapScene.add(storeNameObject);
  });
};
var mapMaterial = function mapMaterial(type) {
  switch (type) {
    case 'bind':
      return _components_three_material__WEBPACK_IMPORTED_MODULE_2__/* .bindStoreMaterial */ .j6.clone();
    case 'unBind':
      return _components_three_material__WEBPACK_IMPORTED_MODULE_2__/* .unBindStoreMaterial */ .QD.clone();
    case 'toilet':
      return _components_three_material__WEBPACK_IMPORTED_MODULE_2__/* .toiletMaterial */ .Lh.clone();
    case 'lift':
      return _components_three_material__WEBPACK_IMPORTED_MODULE_2__/* .liftMaterial */ .Tk.clone();
    case 'Escalator':
      return _components_three_material__WEBPACK_IMPORTED_MODULE_2__/* .liftMaterial */ .Tk.clone();
    case 'choose':
      return _components_three_material__WEBPACK_IMPORTED_MODULE_2__/* .chooseStoreMaterial */ .kg.clone();
    case 'floor':
      return _components_three_material__WEBPACK_IMPORTED_MODULE_2__/* .floorMaterial */ .Ae.clone();
    default:
      return _components_three_material__WEBPACK_IMPORTED_MODULE_2__/* .unBindStoreMaterial */ .QD.clone();
  }
};
function getElementLeft(el) {
  var left = 0;
  var top = 0;
  while (el && !isNaN(el.offsetLeft)) {
    left += el.offsetLeft - el.scrollLeft;
    top += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return {
    left: left,
    top: top
  };
}
var createStoreName = function createStoreName(data, pos, markData, setStoreName) {
  var element = document.createElement('div');
  var root = ReactDOM.createRoot(element);
  root.render( /*#__PURE__*/_jsx(Logo2d, {
    logo: (data === null || data === void 0 ? void 0 : data.logo) || "".concat(OSS_URL).concat(STORE_ATTRIBUTE_ICON_MAP.get('shops')),
    name: data.name,
    markData: markData,
    callback: setStoreName
  }));
  var tag = new CSS2DObject(element);
  tag.position.copy(pos);
  return tag;
};
var createPoint = function createPoint(data) {
  var element = document.createElement('div');
  var root = react_dom__WEBPACK_IMPORTED_MODULE_5__.createRoot(element);
  root.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_logo2d__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    logo: "".concat(_dictionary__WEBPACK_IMPORTED_MODULE_4__/* .OSS_URL */ .DE).concat(_dictionary__WEBPACK_IMPORTED_MODULE_4__/* .STORE_ATTRIBUTE_ICON_MAP */ .ag.get(data.attribute))
  }));
  var tag = new three_examples_jsm_renderers_CSS2DRenderer_js__WEBPACK_IMPORTED_MODULE_8__/* .CSS2DObject */ .j(element);
  var pos = new three__WEBPACK_IMPORTED_MODULE_7__/* .Vector3 */ .Pa4().fromArray(data.position);
  tag.position.copy(pos);
  return tag;
};

// 世界坐标转屏幕坐标
var getViewCp = function getViewCp(v3, v2, camera) {
  var worldVector = v3.clone();
  var standardVector = worldVector.project(camera); //世界坐标转标准设备坐标
  var a = window.innerWidth / 2;
  var b = window.innerHeight / 2;
  var vx = Math.round(standardVector.x * a + a); //标准设备坐标转屏幕坐标
  var vy = Math.round(-standardVector.y * b + b); //标准设备坐标转屏幕坐标
  var p = new THREE.Vector2(vx, vy);
  v2.copy(p);
  return p;
};

// 屏幕坐标转经纬度
var coordsToLngLats = function coordsToLngLats(point, AMap, map, targetV2) {
  var x = point.x,
    y = point.y;
  var pixel = new AMap.Pixel(x, y);
  var lnglat = map.containerToLngLat(pixel);
  var v2 = new THREE.Vector2();
  v2.set(lnglat.lng, lnglat.lat);
  if (targetV2 !== null && targetV2 !== void 0 && targetV2.isVector2) {
    targetV2.copy(v2);
  }
  return v2;
};

/***/ }),

/***/ 31065:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: function() { return /* binding */ DataBase; }
/* harmony export */ });
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15009);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99289);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12444);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72004);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9783);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__);





/* eslint-disable prettier/prettier */
// import {EventTarget} from 
var DataBase = /*#__PURE__*/function () {
  function DataBase(databaseName) {
    var _this = this;
    var keyPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
    _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default()(this, DataBase);
    _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "databaseName", void 0);
    _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "db", void 0);
    _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "isOpen", false);
    _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "keyPath", void 0);
    this.databaseName = databaseName;
    this.keyPath = keyPath;
    var request = window.indexedDB.open(this.databaseName);
    request.onerror = function () {
      console.log('数据库打开报错');
      _this.isOpen = false;
    };
    request.onsuccess = function () {
      _this.db = request.result;
      console.log('数据库打开成功');
      _this.isOpen = true;
    };
    request.onupgradeneeded = function (event) {
      _this.db = event.target.result;
      if (!_this.db.objectStoreNames.contains(_this.databaseName)) {
        _this.db.createObjectStore(_this.databaseName, {
          keyPath: _this.keyPath
        }); // 主键自增
      }
    };
  }
  _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default()(DataBase, [{
    key: "saveDataByKeyPath",
    value: function () {
      var _saveDataByKeyPath = _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee(kp, data) {
        var strScene, object, isHave, store;
        return _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              // this.name = name;
              strScene = JSON.stringify(data);
              object = {
                data: strScene
              };
              object[this.keyPath] = kp;
              _context.next = 5;
              return this.isHave(kp);
            case 5:
              isHave = _context.sent;
              store = this.db.transaction([this.databaseName], "readwrite").objectStore(this.databaseName);
              console.log('store', store, object);
              if (isHave) {
                store.put(object);
              } else {
                store.add(object);
              }
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function saveDataByKeyPath(_x, _x2) {
        return _saveDataByKeyPath.apply(this, arguments);
      }
      return saveDataByKeyPath;
    }()
  }, {
    key: "isHave",
    value: function isHave(kp) {
      var _this2 = this;
      return new Promise(function (resolve) {
        var objectStore = _this2.db.transaction(_this2.databaseName).objectStore(_this2.databaseName);
        objectStore.openCursor().onsuccess = function (event) {
          var cursor = event.target.result;
          console.log('cursor', cursor, kp);
          resolve(cursor && (cursor === null || cursor === void 0 ? void 0 : cursor.primaryKey) === kp);
        };
      });
    }
  }, {
    key: "getAllData",
    value: function getAllData(key, value) {
      var _this3 = this;
      return new Promise(function (resolve) {
        var dataList = [];
        var objectStore = _this3.db.transaction(_this3.databaseName).objectStore(_this3.databaseName);
        objectStore.openCursor().onsuccess = function (event) {
          var cursor = event.target.result;
          if (cursor) {
            // 获取当前记录
            var record = cursor.value;
            var data = JSON.parse(record.data);
            if (key && value !== undefined) {
              if (data[key] === value) {
                dataList.push(data);
              }
            } else {
              dataList.push(data);
            }

            // 继续遍历下一个记录
            cursor["continue"]();
          } else {
            // 游标遍历完毕
            resolve(dataList);
          }
        };
      });
    }
  }, {
    key: "getDataByKeyPath",
    value: function getDataByKeyPath(kp) {
      var _this4 = this;
      return new Promise(function (resolve) {
        var request = _this4.db.transaction([_this4.databaseName]).objectStore(_this4.databaseName).get(kp);
        request.onsuccess = function () {
          if (request !== null && request !== void 0 && request.result) {
            resolve(request === null || request === void 0 ? void 0 : request.result);
          } else {
            resolve(null);
          }
        };
      });
    }
  }, {
    key: "removeDataByKeyPath",
    value: function removeDataByKeyPath(kp) {
      var _this5 = this;
      return new Promise(function (resolve) {
        var request = _this5.db.transaction([_this5.databaseName], "readwrite").objectStore(_this5.databaseName)["delete"](kp);
        request.onsuccess = function () {
          resolve(true);
        };
      });
    }
  }]);
  return DataBase;
}();

/***/ })

}]);